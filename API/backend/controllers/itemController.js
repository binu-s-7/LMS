import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

// @desc    Get all items
// @route   GET /api/items
const getAllItems = asyncHandler(async (req, res) => {
  const items = awa Item.found({});
  res.json(items);
});
