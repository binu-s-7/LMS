import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

// @desc    Get all items
// @route   GET /api/items
const getAllItems = asyncHandler(async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

// @desc    create new item
// @route   POST /api/items
const createItem = asyncHandler(async (req, res) => {
  const { title, author, category,publisher,language, borrowedBy, status, borrowedDate } =
    req.body;
  const itemCount = await Item.countDocuments();
  const item = await Item.create({
    id: itemCount + 1,
    title,
    author,
    category,
    publisher,
    language,
    borrowedBy,
    status,
    borrowedDate,
  });

  if (item) {
    res.status(201).json({
      _id: item._id,
      id: item.id,
      title: item.title,
      category: item.category,
      publisher: item.publisher,
      language: item.language,
      author: item.author,
      borrowedBy: item.borrowedBy,
      status: item.status,
      borrowedDate: item.borrowedDate,
    });
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});
