import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

Button.protoTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
