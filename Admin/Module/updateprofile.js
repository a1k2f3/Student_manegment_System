import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { Acount } from '../Controllers/mogoose_Setup.js';
import mongoose from 'mongoose'; // Required for ObjectId validation

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());

router.put('/user/:id', async (req, res) => {
  try {
    const { Name, Email, phone } = req.body;
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const doc = await Acount.findById(id);
    if (!doc) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate input fields
    if (!Name || !Email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Update fields
    doc.Name = Name;
    doc.phone = phone;
    doc.Email = Email;
const JWT_SECRET = "your_jwt_secret_key"
    await doc.save(); // Ensure the document is saved before responding
    const newToken = jwt.sign({ email: doc.Email }, JWT_SECRET, {
        expiresIn: '1h', // Token expires in 1 hour
    });
    res.status(200).json({ message: "User updated successfully", user: doc,token:newToken });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
