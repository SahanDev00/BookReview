import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './BookList';
import AddBook from './AddBook';

const Home = () => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:5000/api/books')
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, [])
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600">Book Review App</h1>
      <AddBook onAdd={fetchBooks} />
      <BookList books={books} onDelete={fetchBooks} />
    </div>
  )
}

export default Home