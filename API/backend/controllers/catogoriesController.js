import mongoose from 'mongoose';

const categorySchema = mongoose.Schema(
  {
    category: {
      type: String
    },
  },
);


const category = mongoose.model('Category', categorySchema);

export default category;
