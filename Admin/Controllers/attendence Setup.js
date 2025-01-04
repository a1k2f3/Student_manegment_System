// // Import Mongoose
import mongoose from 'mongoose';
const { Schema } = mongoose;
const attendence = new Schema({
 attendence : String, 
   email: {type:String,required:true},
  date: { type: Date, default: Date.now },
     
});
 export const  Attendence = mongoose.model('Attendence', attendence);
