import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import './ImageGallery.css';

const ImageGallery = ({ gallery, onClick }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="ImageGalleryItem" key={id} onClick={onClick}>
          <ImageGalleryItem
            src={webformatURL}
            alt={tags}
            dataSource={largeImageURL}
            className="ImageGalleryItem-image"
          ></ImageGalleryItem>
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
