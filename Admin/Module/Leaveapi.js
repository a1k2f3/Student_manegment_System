import express from'express'
// import { Leave } from '../Controllers/mogoose_Setup.js';
import { Leaves } from '../Controllers/Leave.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const router = express.Router(); // Use express.Router() instead of express()
router.use(cors());
router.use(bodyParser.json());
router.post('/leave',(req, res) => {
  try {
    const {  email,subject,message } = req.body;
     Leaves.create({
       Email:email,
       subject:subject,
      message:message,
    });
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error creating user: " + error.message);
    console.log(error)
  }
});

export default router;
