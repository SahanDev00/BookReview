const express = require('express');
const Book = require('../models/BookModel');
//can make prefixes
const router = express.Router();

// create a new book
router.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);

        if (!req.body.title || !req.body.author) {
            return res.status(400).json({ error: 'Title and Author Cant be empty' })
        }

        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Get all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//update a book's review
router.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

//Delete a book
router.delete('/books/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: 'Book Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message0 });
    }
});

module.exports = router;
