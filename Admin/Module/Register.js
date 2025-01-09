import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs'; // Ensure bcrypt is imported
import { Acount } from '../Controllers/mogoose_Setup.js';
const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
router.put('/update-profile/:userId', async (req, res) => {
  const { userId } = req.params;
  const { name, email, phone,  } = req.body;

  try {
    // Find the user by ID and update the profile
    const user = await Acount.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user fields
    if (name) user.Name = name;
    if (email) user.Email = email;
    if (phone) user.phone = phone;
    // Save updated user
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating profile' });
  }
});
export default router;
