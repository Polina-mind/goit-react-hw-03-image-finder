import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({}) => {
  return (
    <ul className="ImageGallery">
      <li></li>
    </ul>
  );
};

ImageGallery.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ImageGallery;
