import mongoose from 'mongoose';

const publisherSchema = mongoose.Schema(
  {
    publisher: {
      type: String,
    },
  },
);
