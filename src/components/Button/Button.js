import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.protoTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
