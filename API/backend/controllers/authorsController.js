import asyncHandler from "express-async-handler";
import Author from "../models/authorModel.js";

// @desc    Get all authors
// @route   GET /api/authors
const getAllAuthors = asyncHandler(async (req, res) => {
  const author = await Author.find({});
  res.json(author);
});

