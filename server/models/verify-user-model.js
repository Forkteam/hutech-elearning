import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expires: '10m' }
  }
});

export const VerifyUserModel = mongoose.model('verifyUsers', schema);
