import React from 'react';
import PropTypes from 'prop-types';
import './ImageGallery.css';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
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
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
