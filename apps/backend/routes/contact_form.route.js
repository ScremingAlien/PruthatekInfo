import express from "express";
import { submit_form } from "../controllers/contact_form.controller.js"; 
const router = express.Router();

router.post("/submit", submit_form);

export const ContactFormRouter = router;
