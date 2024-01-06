import asyncHandler from "express-async-handler";
import Language from "../models/languageModel.js";

//@route GET/api/languages
const getAllLanguages = asyncHandler(async(req,res)=>{
  const language = await Language.find({});
  res.json(language);
  );
