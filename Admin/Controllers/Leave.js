import mongoose from 'mongoose';
const { Schema } = mongoose;
const Leave = new Schema({ 
  Email:String,
  subject:String,
  message: String ,
  date: { type: Date, default: Date.now },
});
export const  Leaves = mongoose.model('Leave', Leave);