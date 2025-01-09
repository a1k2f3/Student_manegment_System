import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Leaves } from '../Controllers/Leave.js';
const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
router.post('/leave', async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    // Create a leave request in the database
    await Leaves.create({
      Email: email,
      subject: subject,
      message: message,
    });

    res.status(201).json({ message: 'Leave request created successfully' });
  } catch (error) {
    console.error('Error creating leave request:', error);
    res.status(500).json({ error: 'Error creating leave request', details: error.message });
  }
});

export default router;
