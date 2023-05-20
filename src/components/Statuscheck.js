import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from './redux/categories/categorySlice';

function Statuscheck() {
  // const Selector = useSelector((state) => state.categories);
  const Dispatch = useDispatch();
  return (
    <div className="status-home">
      <div>Under Construction</div>
      <button className="statuscheck" type="button" onClick={() => Dispatch(checkStatus())}>Check Status</button>
    </div>
  );
}

export default Statuscheck;
