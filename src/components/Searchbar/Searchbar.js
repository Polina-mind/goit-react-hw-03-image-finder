import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    query: '',
    gallery: [],
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
    // console.log(e.currentTarget.value, this.state.query);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Searchbar;