// routes/bookRoutes.js
import express from "express"
import { getBook } from "../middlewares/getBook.middleware.js";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/book.controller.js";
const router = express.Router();

// Get all books
router.get('/get-all-books', getAllBooks);

// Create a book
router.post('/create-a-book', createBook);

// Get one book
router.get('/get-a-book/:id', getBook, getBookById);

// Update a book
router.put('/update-a-book/:id', updateBook);

// Delete a book
router.delete('/delete-a-book/:id', deleteBook);




export default router
