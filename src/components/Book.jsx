import React from 'react';
import PropTypes from 'prop-types';

function Book({ remove, item }) {
  return (
    <div className="Book">
      <h3>{ item.author }</h3>
      <h3>{ item.titleName }</h3>
      <button type="button" onClick={() => remove(item)}>Remove</button>
    </div>
  );
}
Book.propTypes = {
  remove: PropTypes.func,
  item: PropTypes.objectOf,
};
Book.defaultProps = {
  remove: () => {},
  item: {},
};
export default Book;
