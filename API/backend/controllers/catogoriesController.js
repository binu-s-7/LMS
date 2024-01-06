import asyncHandler from "express-async-handler";
import Category from "../models/catogoriesModel.js";

// @route   GET /api/categories
const getAllCategories = asyncHandler(async (req, res) => {
  const category = await Category.find({});
  res.json(category);
});

// @route   GET /api/categories
const createCategory = asyncHandler(async (req, res) => {
  const { category } = req.body;
  const createdAuthor = await Category.create({
   category,
  });

