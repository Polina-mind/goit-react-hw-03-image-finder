import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import FetchGallery from './galleryApi';

class GalleryView extends Component {
  state = {
    query: '',
    gallery: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGallery();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      gallery: [],
      error: null,
      largeImageURL: '',
    });
  };

  fetchGallery = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    FetchGallery(options)
      .then(gallery => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { gallery, isLoading, error } = this.state;

    return (
      <div>
        {error && <h1>Error!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery
          gallery={gallery}
          onClick={this.props.openModal}
        ></ImageGallery>

        {isLoading && <p>Loading...</p>}
        {gallery.length > 0 && <Button onClick={this.fetchGallery}></Button>}
      </div>
    );
  }
}

GalleryView.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default GalleryView;
