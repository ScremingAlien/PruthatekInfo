import { USER_MODEL } from "../models/users.js";
import { ACCORDIAN_MODEL } from "../models/accordian.js";
import { BLOG_MODEL } from "../models/blogs.js";
import { POLL_MODEL } from "../models/polls.js";
import { TAG_MODEL, ACHIEVEMENT_MODEL } from "../models/achivement_tags.js";

import { countFollowers, slugify } from "../utilites/helperFunctions.js";

import express from "express";

let router = express.Router();

router.get('/blog', async (req, res) => {
     try {


          let tags = [
               "tech",
               "money",
               "food",
               "health",
          ];

           
          res.status(200).json({
               success: true,
               message: "Tags found",
               data: tags
          });



     } catch (err) {
          console.log(err)
     }
});




export const TestRouter = router;



// _id: new ObjectId('67d51fa18f36692eaa2a9c30'),
// _id: new ObjectId('67d51fa18f36692eaa2a9c30'),


