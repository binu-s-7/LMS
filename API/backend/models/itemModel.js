import mongoose from 'mongoose';

const itemSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    category: {
      type: String,
    },
    publisher: {
      type: String,
    },
    language: {
      type: String,
    },
    borrowedBy: {
      type: String,
    },
    status: {
      type: String,
    },
    borrowedDate: {
      type: Date,
    },
  },
);


const item = mongoose.model('Item', itemSchema);

export default item;
