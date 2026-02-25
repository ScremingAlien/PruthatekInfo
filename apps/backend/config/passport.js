import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { ENV } from './env.js';
import { USER_MODEL } from '../models/users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { logger } from './logger.js'
import { slugify, transporter } from '../utilites/helperFunctions.js'
 
passport.use(
  new GoogleStrategy(
    {
      clientID: ENV.googleClientID,
      clientSecret: ENV.googleClientSecret,
      callbackURL: `${ENV.googleCall}/v1/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {

        // login -> google -> 
        // if Not exists -> Create tempUser and redirect to email verfiy page
        // if Existes -> send Token for registration
        // 
        // login -> SImple -> 
        // take email and pass _> if true then send token
        // if Existes -> send Token for registration
        // 
        // signup _> google -> 
        // if Not exists -> then create a tempUser and redirect to email verify page
        // if Exitsts ->  then send Token for login


        // check if user is already registered or not
        let user = await USER_MODEL.findOne({ email: profile.emails[0].value }).select('slug accountType username avatar  country refreshToken lastLogin lastPasswordChange');
        console.log("------>>>", user)

        if (user) {
          // for login 

          const token = jwt.sign({ user_id: user._id, slug: user.slug, accountType: user.accountType, avatar: user.avatar, username: user.username }, ENV.jwtSecret, { expiresIn: '1d' });

          user.refreshToken = token;
          user.lastLogin = new Date();

          
          await user.save()
          logger.info(`${user.username} logged in`);
          return done(null, { token, user, accountType: user.accountType, authType: 'Login' });

        } else {
          // for register 

          let create_user = await USER_MODEL.create({
            username: profile.displayName,
            slug: slugify(profile.displayName),
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            verifyedUser: false,
            password: await bcrypt.hash(profile.id, 10),
            accountType: "Simple"
          });
          
          // send emial tokoens
          const token = jwt.sign({
            user_id: create_user._id,
            accountType: create_user.accountType,
            username: create_user.username,

          }, ENV.jwtSecret, { expiresIn: '15min' });

          create_user.emailToken = token;
          create_user.refreshToken = token;
          create_user.lastLogin = new Date();

          await create_user.save();

          let data = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: profile.emails[0].value,
            subject: 'Verify Your Account of info.pruthtek',
            html: `<h1>Verify Your Account of info.pruthtek</h1>
                    <p>Hi ${create_user.username},</p>
                    <p>Click the link below to verify your account:</p>
                    <a href="${ENV.frontendUrl}/emailVerify/${token}">Verify Account</a>
                    <p>Thanks,</p>
                    <p>The info.pruthtek Team</p>`,
          });



          logger.info(`${create_user?.username} Is registered  (not verified)`);

          return done(null, { token, user: create_user, accountType: create_user.accountType, authType: 'SignUp' });

        }
      } catch (error) {
        logger.error(`Error at google auth middleware ${error.message}`);
        return done(error, null);
      }
    }
  )
);

export default passport;



