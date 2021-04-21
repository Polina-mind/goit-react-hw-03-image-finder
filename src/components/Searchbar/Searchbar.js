import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
