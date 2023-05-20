import React from 'react';
import PropTypes, { number } from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteBook, fetchBooks } from './redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';

function Book({ item, itemId }) {
  const Dispatch = useDispatch();
  const Booksremove = async () => {
    await Dispatch(deleteBook(itemId)).then(() => {
      Dispatch(fetchBooks());
    });
  };
  return (
    <div className="Book">
      <div className="book-details">
        <h5 className="categories">Action</h5>
        <h4 className="title">{ item.author }</h4>
        <h5 className="author">{ item.title }</h5>
        <div className="action-btn-wrapper">
          <button type="button" onClick={() => Booksremove()}>Comments</button>
          <div className="vl" />
          <button type="button" onClick={() => Booksremove()}>Remove</button>
          <div className="vl" />
          <button type="button" onClick={() => Booksremove()}>Chat</button>
        </div>
      </div>
      <div className="analytics-wrapper">
        <div className="progress">
          <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
              strokeWidth={6}
              trailColor="#d6d6d6"
              styles={buildStyles({ textColor: 'red', pathColor: '#307bbe', trailColor: '#e8e8e8' })}
              value={66}
            />
          </div>
          <div className="progress-text">
            <p className="ptext">64%</p>
            <p className="ptextx">Completed</p>
          </div>
        </div>
        <div className="vls" />
        <div className="progress-details">
          <h4 className="current-chapter">CURRENT CHAPTER</h4>
          <h4 className="chapter">Chapter 17</h4>
          <button className="progress-btn" type="button" onClick={() => Booksremove()}>Update progress</button>
        </div>
      </div>
    </div>
  );
}
Book.propTypes = {
  itemId: PropTypes.number,
  item: PropTypes.objectOf,
};
Book.defaultProps = {
  item: {},
  itemId: number,
};
export default Book;
