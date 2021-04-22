import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ gallery, tags }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL}
            alt={tags}
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
  tags: PropTypes.string.isRequired,
};

export default ImageGallery;
