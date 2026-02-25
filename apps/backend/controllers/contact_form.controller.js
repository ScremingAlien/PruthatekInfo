import { CONTACT_FORM_MODEL } from "../models/contact_form.js";
import nodemailer from "nodemailer";
import { asyncHandler } from "../utilites/asyncHandler.js";

export const submit_form = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  await CONTACT_FORM_MODEL.create({ firstName, lastName, email, phone, message });

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Pruthatek Contact Form" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    // to: "surajmendhe32@gmail.com",
    to: "info@pruthatek.com",
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Form Submission</h3>
      <p><b>Name:</b> ${firstName} ${lastName || ""}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({
    success: true,
    message: "Your message has been sent successfully!"
  });
});
