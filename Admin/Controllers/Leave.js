import mongoose from 'mongoose';
const { Schema } = mongoose;
const Leave = new Schema({ 
  Email: {type:String,unique:true},
  subject:String,
  message: String ,
  time:Timestamp,
  date: { type: Date, default: Date.now },
});
export const  Leaves = mongoose.model('Leave', Leave);