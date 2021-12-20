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
    attachment: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subjects'
    }
  },
  { timestamps: true }
);

export const LectureModel = mongoose.model('lectures', schema);
