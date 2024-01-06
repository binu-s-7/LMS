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

// @desc    Get item by _id
// @route   GET /api/items/item/:id
const getItemById = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (item) {
    res.json({
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
    res.status(404);
    throw new Error("Item not found");
  }
});

// @desc    Update item
// @route   PUT /api/items/:id
const updateItem = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    item.title = req.body.title || user.title;
    item.author = req.body.author || user.author;
    item.category = req.body.category || user.category;
    item.publisher = req.body.publisher || user.publisher;
    item.language = req.body.language || user.language;
    item.borrowedBy = req.body.borrowedBy || user.borrowedBy;
    item.status = req.body.status || user.status;
    item.borrowedDate = req.body.borrowedDate || user.borrowedDate;

    const updatedItem = await item.save();

    res.json({
      ...updatedItem,
    });
  } else {
    res.status(404);
    throw new Error("Item not found");
  }
});

// @desc    Delete item by _id
// @route   DELETE /api/items/:id
const deleteItemById = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
  
    if (item) {
      await Item.deleteOne({ _id: req.params.id });
      res.json({ message: "Item removed" });
    } else {
      res.status(404);
      throw new Error("Item not found");
    }
  });
  

export { createItem, updateItem, getItemById, deleteItemById, getAllItems };
