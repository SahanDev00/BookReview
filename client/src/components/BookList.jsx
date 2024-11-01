import React from 'react';
import axios from 'axios';

const BookList = ({ books, onDelete }) => {

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/books/${id}`);
        onDelete();
    };

  return (
    <div className="max-w-lg mx-auto mt-8">
      {books.map((book) => (
        <div key={book._id} className="flex justify-between items-center p-4 bg-white shadow rounded mb-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-gray-600">Genre: {book.genre || 'No genre mentioned'}</p>
            <p className="text-gray-600">Rating: {book.rating || '0'}</p>
            <p className="text-gray-600">Review: {book.review || 'No reviews yet'}</p>
          </div>
          <button
            onClick={() => handleDelete(book._id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default BookList