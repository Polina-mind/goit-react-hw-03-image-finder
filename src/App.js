import React, { Component } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
import ImageGalleryItem from './components/ImageGalleryItem';
import GalleryView from './GalleryView';
import './App.css';

class App extends Component {
  state = {
    query: '',
    gallery: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModal = event => {
    event.preventDefault();

    const onImage = event.currentTarget;
    console.log(onImage);
  };

  render() {
    const { gallery, showModal } = this.state;

    return (
      <Container>
        <GalleryView></GalleryView>

        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal} onOpen={this.onOpenModal}>
            <ImageGalleryItem
              largeImageURL={gallery.largeImageURL}
              tags={gallery.tags}
            ></ImageGalleryItem>
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
