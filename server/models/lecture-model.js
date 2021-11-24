import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    coursesId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'courses'
    }
  },
  { timestamps: true }
);

export const LectureModel = mongoose.model('lectures', schema);
