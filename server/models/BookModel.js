const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, default: '' },
    rating: { type: Number, default: 0 },
    review: { type: String, default: '' }
});

module.exports = mongoose.model('Book', bookSchema);