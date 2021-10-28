import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseClick);
  }

  handleCloseClick = event => {
    if (event.currentTarget === event.target || event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleCloseClick}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
