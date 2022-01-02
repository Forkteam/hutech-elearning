import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    lectureId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'lectures'
    }
  },
  { timestamps: true }
);

schema.set('toJSON', {
  virtuals: true,
  versionKey: false
});

export const CommentModel = mongoose.model('comment', schema);
