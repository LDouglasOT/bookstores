import React from 'react';
import Book from '../components/Book';

function Books() {
  return (
    <div className="book-page">
      <div>
        <h2>New Book</h2>
        <form action="" className="book-form">
          <input className="entry" type="text" placeholder="Author" />
          <input className="entry" type="text" placeholder="Title" />
          <input className="submit-btn" type="submit" value="Save Book" />
        </form>
      </div>
      <ul>
        <h2>Books List</h2>
        <li><Book /></li>
        <li><Book /></li>
        <li><Book /></li>
        <li><Book /></li>
      </ul>
    </div>
  );
}

export default Books;
