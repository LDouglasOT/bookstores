import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import Book from '../components/Book';
import { fetchBooks, saveBook } from '../components/redux/books/bookSlice';

function Books({ statechange }) {
  const [name, setName] = useState('');
  const [btitle, setTitle] = useState('');
  const books = useSelector((state) => state.book.books);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchBooks());
    statechange(false);
  }, [0]);

  const save = async (e) => {
    e.preventDefault();
    const data = {
      item_id: Object.keys(books).length + 1,
      title: btitle,
      author: name,
      category: 'Classics',
    };
    await Dispatch(saveBook(data)).then(() => {
      Dispatch(fetchBooks());
    });
  };

  return (
    <div className="book-page">
      <div className="form-wrapper">
        <p className="new-book">ADD NEW BOOK</p>
        <form action="" className="book-form">
          <input className="entry" type="text" onChange={(e) => setName(e.target.value)} placeholder="Book Title" />
          <select className="entryx" onChange={(e) => setTitle(e.target.value)}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <input className="submit-btn" type="submit" value="ADD BOOK" onClick={(e) => save(e)} />
        </form>
      </div>
      <div className="line" />
      <ul className="book-list">
        {Object.keys(books).map((key) => (
          <div key={key} className="maindiv">
            {books[key].map((item) => (
              <div key={key} className="Book-container">
                <li key={key}><Book item={item} itemId={key} /></li>
              </div>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}
Books.propTypes = {
  statechange: PropTypes.func,
};
Books.defaultProps = {
  statechange: func,
};
export default Books;
