import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import galleryApi from './galleryApi';

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
    });
  };

  fetchGallery = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    galleryApi
      .fetchGallery(options)
      .then(gallery => {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  openModal = event => {
    event.preventDefault();
    console.log('Click');

    const onImage = event.currentTarget.src;
    console.log(onImage);
  };

  render() {
    const { gallery, isLoading, error } = this.state;
    const ifGallery = gallery.length ? true : false;

    return (
      <div>
        {error && <h1>Error!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery gallery={gallery} onClick={this.openModal}></ImageGallery>

        {isLoading && <p>Loading...</p>}
        {ifGallery && <Button onClick={this.fetchGallery}></Button>}
      </div>
    );
  }
}

export default GalleryView;
