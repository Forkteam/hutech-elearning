import mongoose from 'mongoose';
import { PRIVATE, PUBLIC } from '../enums/status.js';

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: [PRIVATE, PUBLIC],
      default: PRIVATE
    },
    industryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'industries'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    studentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      }
    ]
  },
  { timestamps: true }
);

export const SubjectModel = mongoose.model('subjects', schema);
