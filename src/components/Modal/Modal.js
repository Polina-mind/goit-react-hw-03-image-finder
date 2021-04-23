import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import './Modal.css';

// const modalRoot = document.querySelector('#modal-root');

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
        <div className="Modal">{this.props.children}</div>
      </div>
    );

    // createPortal(
    //   <div className="Overlay" onClick={this.handleBackdropClick}>
    //     <div className="Modal">{this.props.children}</div>
    //   </div>,
    //   modalRoot,
    // );
  }
}
