import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs'; // Ensure bcrypt is imported
import { Acount } from '../Controllers/mogoose_Setup.js';
const router = express.Router();
router.use(cors());
router.use(bodyParser.json());
router.put('/user', async(req, res) => {
   
  })
  export default router