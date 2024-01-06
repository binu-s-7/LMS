import mongoose from 'mongoose';

const publisherSchema = mongoose.Schema(
  {
    publisher: {
      type: String,
    },
  },
);

const publisher = mongoose.model('Publisher', publisherSchema);

export default publisher;
