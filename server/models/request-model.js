import mongoose from 'mongoose';
import { ACCEPTED, DENIED, PENDING } from '../enums/status.js';

const schema = new mongoose.Schema(
  {
    identityFront: {
      type: String,
      required: true
    },
    identityBack: {
      type: String,
      required: true
    },
    studentCard: {
      type: String,
      required: true
    },
    studentCode: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    status: {
      type: String,
      enum: [PENDING, ACCEPTED, DENIED],
      default: PENDING
    }
  },
  { timestamps: true }
);

schema.set('toJSON', {
  virtuals: true,
  versionKey: false
});

export const RequestModel = mongoose.model('request', schema);
