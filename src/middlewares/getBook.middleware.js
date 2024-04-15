import Book from "../models/book.model.js"
import ErrorHandler from "../utils/errorHandler.js";

export async function getBook(req, res, next) {
    try {
        const book = await Book.findById(req.params.id);
        if (book == null) {
            return next(new ErrorHandler("invalid book id", 400))
        }
        res.book = book;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}