import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({}) => {
  return (
    <li className="ImageGalleryItem">
      <img src="" alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
