import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ src }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt="" className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.protoTypes = {
  src: PropTypes.string.isRequired,
  // tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
