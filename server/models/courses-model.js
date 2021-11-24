import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String
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

export const CoursesModel = mongoose.model('courses', schema);
