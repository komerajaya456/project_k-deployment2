import mongoose from "mongoose";
const collectionname='users'




const userSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      role: {
        type: Number,
        default: 0,
      },
    },
    { timestamps: true } //if new user added it add created time
  );






export default mongoose.model(`${collectionname}`, userSchema);