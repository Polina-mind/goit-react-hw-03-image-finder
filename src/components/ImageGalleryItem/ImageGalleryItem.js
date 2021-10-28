import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ src, alt, dataSource }) => {
  return (
    <img
      src={src}
      alt={alt}
      data-source={dataSource}
      className="ImageGalleryItem-image"
    />
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSource: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
