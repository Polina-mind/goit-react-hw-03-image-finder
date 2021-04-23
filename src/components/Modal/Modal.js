import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import './Modal.css';

export default class Modal extends Component {
  state = {
    gallery: [],
    largeImageURL: '',
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

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          {/* <img src={this.state.largeImageURL} alt="" /> */}
          <ImageGalleryItem src={this.state.largeImageURL}></ImageGalleryItem>
        </div>
      </div>
    );
  }
}
