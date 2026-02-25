import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true }
  
}, { timestamps: true });

export const CONTACT_FORM_MODEL = mongoose.model("contact-form", contactFormSchema);
