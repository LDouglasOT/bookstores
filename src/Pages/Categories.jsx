import React from 'react';
// import { useSelector, useDispatch} from 'react-redux';
import Statuscheck from '../components/Statuscheck';

function Categories() {
  // const categories = useSelector((state) => state.book.books);
  // const Dispatch = useDispatch();
  return (
    <div className="category">
      <Statuscheck />
    </div>
  );
}

export default Categories;
