import express from'express'
import { Acount } from '../Controllers/mogoose_Setup.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const router = express.Router(); // Use express.Router() instead of express()
router.use(cors());
router.use(bodyParser.json());

router.post('/Rigester',(req, res) => {
  try {
    const { name, email,contact,password,date_of_birth } = req.body;
     Acount.create({
       Name:name,
       Email:email,
      phone:contact,
       date_of_birth:date_of_birth,
       passsword:password
    });
    
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error creating user: " + error.message);
  }
});

export default router;
