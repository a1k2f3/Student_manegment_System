import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs'; // Ensure bcrypt is imported
import { Acount } from '../Controllers/mogoose_Setup.js';

const router = express.Router();

router.use(cors());
router.use(bodyParser.json());

router.post('/register', async (req, res) => {
  try {
    const { name, email, contact, date_of_birth, password } = req.body;

    // Check if the user already exists
    const existingUser = await Acount.findOne({ Email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please login." });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await Acount.create({
      Name: name,
      Email: email,
      phone: contact,
      date_of_birth,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user", details: error.message });
  }
});

export default router;
