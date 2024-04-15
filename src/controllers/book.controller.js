import catchAsyncError from "../middlewares/catchAsyncError.middleware.js";
import Book from "../models/book.model.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getAllBooks = catchAsyncError(async (req, res, next) => {
    const books = await Book.find({});
    res.status(200).json({
        message: true,
        data: books
    });
})

export const createBook = catchAsyncError(async (req, res, next) => {
    const books = await Book.create(req.body);

    if (!books) return next(new ErrorHandler("something went wrong while saving books", 400))

    res.status(201).json({
        message: true,
        data: "book created successfully"
    })
})


export const getBookById = catchAsyncError(async (req, res, next) => {
    res.status(200).json({ message: true, data: res.book });
})

export const updateBook = catchAsyncError(async (req, res, next) => {

    const { id } = req.params;

    const book = await Book.findByIdAndUpdate(id, req.body, { new: true })

    res.status(200).json({
        message: true,
        data: "book updated successfully"
    })
})


export const deleteBook = catchAsyncError(async (req, res, next) => {

    const { id } = req.params;

    await Book.findByIdAndDelete(id)

    res.status(200).json({
        message: true,
        data: "book deleted successfully"
    })
})














