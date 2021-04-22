import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ gallery }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL}
            alt={largeImageURL}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.protoTypes = {
  gallery: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGallery;
