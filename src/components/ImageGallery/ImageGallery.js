import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ gallery, tags, onClick, largeImageURL }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            onClick={onClick}
            src={webformatURL}
            alt={tags}
            data-source={largeImageURL}
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
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGallery;
