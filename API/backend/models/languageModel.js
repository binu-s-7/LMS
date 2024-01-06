import mongoose from 'mongoose';
const languageSchema = mongoose.Schema(
  {
    language:{
      type:String
    },
  },
  );

const language = mongoose.model('Language',languageSchema);
export default language;
