
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Attendence } from '../Controllers/attendence Setup.js';
import authenticateToken from '../jwt/Authtoken.js';
const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
router.post('/attendance', authenticateToken, async (req, res) => {
    const { email, attendance } = req.body;
    try {
        // Get today's date at midnight for comparison
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        // Check if attendance is already marked for today
        const existingMark = await Attendence.findOne({
            email: email,
            date: { $gte: startOfDay, $lte: endOfDay }
        });
        if (existingMark) {
            return res.status(400).json({ message: "Attendance already marked" });
            
        }
        console.log(attendance);
        const newAttendance = await Attendence.create({ email, attendance });
        res.status(201).json(newAttendance);
    } catch (error) {
        console.error("Error marking attendance:", error);
        res.status(500).json({ error: "Error marking attendance", details: error.message });
    }
});

  export default router