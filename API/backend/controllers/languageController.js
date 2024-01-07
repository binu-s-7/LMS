import asyncHandler from "express-async-handler";
import Language from "../models/languageModel.js";

// @route   GET /api/languages
const getAllLanguages = asyncHandler(async (req, res) => {
  const language = await Language.find({});
  res.json(language);
});

// @route   GET /api/languages
const createLanguage = asyncHandler(async (req, res) => {
  const {  language  } = req.body;

  const createdLanguage = await Language.create({
    language,
  });

  if (createdLanguage) {
    res.status(201).json({
      language: createdLanguage.language,
    });
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

export { getAllLanguages, createLanguage };
