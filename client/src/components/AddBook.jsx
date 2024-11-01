import React, { useState } from 'react';
import axios from 'axios';

const AddBook = ({ onAdd }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('')

    const handleAdd = async () => {
        await axios.post('http://localhost:5000/api/books', {title, author, genre, rating, review});
        onAdd();
        setTitle('');
        setAuthor('');
        setGenre('');
        setRating(0);
        setReview('');
    };
    
  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold text-center text-gray-700">Add a New Book</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mt-3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full mt-3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full mt-3 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full mt-3 p-2 border rounded"
        />
        <button
          type='submit'
          className="w-full bg-blue-500 text-white mt-4 py-2 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  )
}

export default AddBook