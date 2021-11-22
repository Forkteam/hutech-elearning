import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: Number,
      default: 1 //1: student, 2: teacher, 3: admin
    },
    code: {
      type: String,
      trim: true
    },
    name: {
      type: String
    },
    attachment: String,
    birthday: Date,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model('users', schema);
