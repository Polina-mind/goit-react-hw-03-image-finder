import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import ImageGalleryItem from '../ImageGalleryItem';
import './Modal.css';

// const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {
    gallery: [],
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  openModal = event => {
    event.preventDefault();
    console.log('Click');

    const onImage = event.currentTarget.src;
    console.log(event);
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          {this.props.children}
          {/* <img src={} alt="" /> */}
          {/* <ImageGalleryItem
            onClick={this.openModal}
            largeImageURL={this.gallery.largeImageURL}
            tags={this.gallery.tags}
          ></ImageGalleryItem> */}
        </div>
      </div>
    );

    //   createPortal(
    //   <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
    //     <div className="Modal__content">{this.props.children}</div>
    //   </div>,
    //   modalRoot,
    // );
  }
}
