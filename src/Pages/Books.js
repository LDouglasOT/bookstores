import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { fetchBooks, saveBook } from '../components/redux/books/bookSlice';

function Books() {
  const [name, setName] = useState('');
  const [btitle, setTitle] = useState('');
  const books = useSelector((state) => state.book.books);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchBooks());
  }, [0]);
  const save = async (e) => {
    e.preventDefault();
    const data = {
      item_id: Object.keys(books).length + 1,
      title: btitle,
      author: name,
      category: 'Classics',
    };
    console.log(data);
    await Dispatch(saveBook(data)).then(() => {
      Dispatch(fetchBooks());
    });
  };

  return (
    <div className="book-page">
      <div>
        <h2>New Book</h2>
        <form action="" className="book-form">
          <input className="entry" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Author" />
          <input className="entry" type="text" onChange={(e) => setName(e.target.value)} placeholder="Title" />
          <input className="submit-btn" type="submit" value="Save Book" onClick={(e) => save(e)} />
        </form>
      </div>
      <ul>
        <h2>Books List</h2>
        {Object.keys(books).map((key) => (
          <div key={key}>
            {books[key].map((item) => (
              <div key={key}>
                <li key={key}><Book item={item} itemId={key} /></li>
              </div>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Books;
