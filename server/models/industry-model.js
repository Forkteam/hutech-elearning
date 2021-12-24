import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }
  },
  { timestamps: true }
);

schema.set('toJSON', {
  virtuals: true,
  versionKey: false
});

export const IndustryModel = mongoose.model('industries', schema);
