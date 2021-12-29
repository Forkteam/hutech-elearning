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
    file: String,
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

schema.set('toJSON', {
  virtuals: true,
  versionKey: false
});

export const LectureModel = mongoose.model('lectures', schema);
