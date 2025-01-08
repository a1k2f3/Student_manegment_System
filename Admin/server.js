// Import Dependencies
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";
import bodyParser from "body-parser";
import { Acount } from './Controllers/mogoose_Setup.js';
import { Attendence } from './Controllers/attendence Setup.js';
import SendLeave from  './Module/Leaveapi.js'
const app = express();
const port = 3000;
const JWT_SECRET = "your_jwt_secret_key"; // Replace with a strong secret key
// const JWT_SECRET2 = "your_jwt_secret_key"; // Replace with a strong secret key

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
async function connection_db() {
  try {
    await mongoose.connect("mongodb://localhost:27017/System");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
connection_db();

// Routes

// Welcome Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Registration Route
app.post('/Register', async (req, res) => {
  try {
    const { name, email, contact, date_of_birth, password } = req.body;
    const existingUser = await Acount.findOne({ Email: email });
    if (existingUser) {
      return res.status(400).send("User already exists. Please login.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Acount.create({
      Name: name,
      Email: email,
      phone: contact,
      date_of_birth,
      password: hashedPassword,
    });

    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user: " + error.message);
  }
});
// Login Route
app.post('/login', async (req, res) => {
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

// JWT Middleware for Protected Routes
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Mark Attendance Route (Protected)
app.post('/attendance', authenticateToken, async (req, res) => {
  const{email}=req.body
  if(email)
  {
    try {
      const { attendance } = req.body;
  console.log(attendance)
     let Attendance= await Attendence.create({ attendence:attendance, email:email });
      res.status(201).json(Attendance);
    } catch (error) {
      console.error("Error marking attendance:", error);
      res.status(500).send("Error marking attendance: " + error.message);
    }   
  }
  else{
  try {
    const { attendance } = req.body;
    const email = req.user.email;
console.log(attendance)
   let Attendance= await Attendence.create({ attendence:attendance, email:email });
    res.status(201).json(Attendance);
  } catch (error) {
    console.error("Error marking attendance:", error);
    res.status(500).send("Error marking attendance: " + error.message);
  }
}});

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
    const count = await Attendence.countDocuments({ attendance: "Present", email:email });
    res.status(200).json( count );
    console.log(count)
  } catch (error) {
    console.error("Error counting attendance:", error);
    res.status(500).send("Error counting attendance: " + error.message);
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
app.post('/api',SendLeave)
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
