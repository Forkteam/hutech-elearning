import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true
    }
  },
  { timestamps: true }
);

schema.set('toJSON', {
  virtuals: true,
  versionKey: false
});

export const OrderModel = mongoose.model('order', schema);
