import React, { useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import Statuscheck from '../components/Statuscheck';

function Categories({ statechange }) {
  useEffect(() => {
    statechange(false);
  }, [0]);
  return (
    <div className="category">
      <Statuscheck />
    </div>
  );
}
Categories.propTypes = {
  statechange: PropTypes.func,
};
Categories.defaultProps = {
  statechange: func,
};
export default Categories;
