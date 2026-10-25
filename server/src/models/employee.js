import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  designation: { type: String, required: true },
  status: { type: String, required: true, enum: ["Active", "On Leave", "Inactive"] },
  joinedDate: { type: String }
}, { timestamps: true, versionKey: false });
export default mongoose.model('Employee', schema);
