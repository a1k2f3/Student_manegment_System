import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from "jsonwebtoken";
import { Acount } from '../Controllers/mogoose_Setup.js';
const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Acount.findOne({ Email: email });
       if (!user || !bcrypt.compare(password, user.password)) {
        return res.status(400).send("Invalid email or password");
      }
      // Generate JWT token
      const token = jwt.sign({ id: user._id, email: user.Email }, JWT_SECRET,
         { expiresIn: '1h' });
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("Error logging in: " + error.message);
    }
  });
  export default router
  