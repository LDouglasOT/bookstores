import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { addbook, removebook } from '../redux/books/bookSlice';

function Books() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const books = useSelector((state) => state.book.books);
  const Dispatch = useDispatch();
  const removeBook = (e) => {
    e.preventDefault();
    Dispatch(addbook({ id: books.length + 1, author: name, titleName: title }));
  };

  return (
    <div className="book-page">
      <div>
        <h2>New Book</h2>
        <form action="" className="book-form">
          <input className="entry" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Author" />
          <input className="entry" type="text" onChange={(e) => setName(e.target.value)} placeholder="Title" />
          <input className="submit-btn" type="submit" value="Save Book" onClick={(e) => removeBook(e)} />
        </form>
      </div>
      <ul>
        <h2>Books List</h2>
        {books.map((item) => (
          <li key={item}><Book item={item} remove={(items) => Dispatch(removebook(items))} /></li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
