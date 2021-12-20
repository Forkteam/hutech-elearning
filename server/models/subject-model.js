import mongoose from 'mongoose';
import StatusEnum from '../enums/status.js';

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
      enum: Object.values(StatusEnum),
      default: StatusEnum.PRIVATE
    },
    industryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'industry'
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
