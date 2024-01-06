import mongoose from 'mongoose';

const authorSchema = mongoose.Schema(
  {
    author: {
      type: String
    },
  },
);


const author = mongoose.model('Author', authorSchema);

export default author;

