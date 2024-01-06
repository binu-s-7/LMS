import asyncHandler from "express-async-handler";
import Publisher from "../models/publisherModel.js";

// @route   GET /api/publishers
const getAllPublisher = asyncHandler(async (req, res) => {
  const publisher = await Publisher.find({});
  res.json(publisher);
});

// @route   GET /api/publishers
const createPublisher = asyncHandler(async (req, res) => {
  const {  publisher  } = req.body;

  const createdPublisher = await Publisher.create({
    publisher,
  });

  if (createdPublisher) {
    res.status(201).json({
      author: createdPublisher.author,
    });
  } else {
    res.status(400);
    throw new Error("invalid data");
  }
});

export { createPublisher, getAllPublisher };
