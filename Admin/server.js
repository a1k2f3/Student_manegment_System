// Import Dependencies
import express from "express";
import mongoose from "mongoose";
import { Acount } from './Controllers/mogoose_Setup.js'
import authenticateToken from "./jwt/Authtoken.js";
import Auth_User from './Module/Login.js'
import { Attendence } from './Controllers/attendence Setup.js';
import attendence from './Module/Attendence.js'
import leaveRoutes from './Module/Leaveapi.js'
import userRoutes from './Module/Register.js'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
async function connection_db() {
  try {
    await mongoose.connect("mongodb://localhost:27017/System");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
connection_db();

app.get("/", (req, res) => {
  res.send("Hello World");
});
// Registration Route
app.use('/api', userRoutes);
app.use('/api',Auth_User)
app.use('/api', leaveRoutes);
app.use('/api', attendence);
// Check if User Exists Route (Protected)
app.post('/student', authenticateToken, async (req, res) => {
  try {
    const user = await Acount.findOne({ Email: req.user.email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Error fetching user: " + error.message);
  }
});

// Display User Details Route (Protected)
app.post('/displayStudent', authenticateToken, async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Acount.findOne({ Email: email });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Error fetching user: " + error.message);
  }
});

// Display All Users Route (Protected)
app.get('/display',authenticateToken, async (req, res) => {
  try {
    const users = await Acount.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users: " + error.message);
  }
});

// See Attendance Route (Protected)
app.post('/seeAttendance', authenticateToken, async (req, res) => {
  const {email}=req.body
  if(email)
  {
    try {
      const attendances = await Attendence.find({ email: email });
      res.status(200).json(attendances);
    } catch (error) {
      console.error("Error fetching attendance:", error);
      res.status(500).send("Error fetching attendance: " + error.message);
    }   
  }
  else{
  console.log("User email from token:", req.user.email); // Debug log
  try {
    const attendances = await Attendence.find({ email: req.user.email });
    res.status(200).json(attendances);
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res.status(500).send("Error fetching attendance: " + error.message);
  }
}});

// Count Attendance Records (Protected)
app.post('/count', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Count the number of 'Present' attendance records for the given email
    const count = await Attendence.countDocuments({ attendance: "Present", email: email });

    // Return the count in a structured response
    res.status(200).json({ message: "Attendance count retrieved successfully", count: count });

    console.log(`Attendance count for ${email}:`, count);
  } catch (error) {
    console.error("Error counting attendance:", error);
    res.status(500).json({ message: "Error counting attendance", error: error.message });
  }
});


// Count Absent Records (Protected)
app.post('/absent', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const count = await Attendence.countDocuments({ attendance: 'Absent', email });
    res.status(200).json({ absentCount: count });
  } catch (error) {
    console.error("Error counting absent records:", error);
    res.status(500).json({ error: "Error counting absent records", details: error.message });
  }
});

app.delete('/deleteAttendence', async (req, res) => {
  const { email } = req.query; // Use req.query for DELETE parameters
  if (!email) {
    return res.status(400).json({ message: 'Email is required to delete attendance' });
  }
  try {
    const attendance = await Attendence.findOneAndDelete({ email });
    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }
    res.status(200).json({ message: 'Attendance deleted successfully', attendance });
  } catch (error) {
    console.error("Error deleting attendance:", error);
    res.status(500).send("Error deleting attendance: " + error.message);
  }
});

app.delete('/deleteuser', async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: 'Email is required to delete the account' });
  }

  try {
    const account = await Acount.findOneAndDelete({ email }); // Correct model name

    if (!account) {
      return res.status(404).json({ message: 'Account record not found' });
    }
    res.status(200).json({ message: 'Account deleted successfully', account });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ message: 'Error deleting account', error: error.message });
  }
});
// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
