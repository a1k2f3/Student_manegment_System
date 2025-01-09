// Import Mongoose
import mongoose from 'mongoose';
const { Schema } = mongoose;
const Signup = new Schema({
  Name: String, 
  Email: {type:String,unique:true},
  phone: Number,
  date_of_birth: { type: Date, default: Date.now },
  password:String,  

});
 export const  Acount = mongoose.model('Acount', Signup);
