import React, { Component } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
import ImageGalleryItem from './components/ImageGalleryItem';
import GalleryView from './GalleryView';
import './App.css';

class App extends Component {
  state = {
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

  render() {
    const { showModal } = this.state;
    // console.log(showModal);

    return (
      <Container>
        <GalleryView></GalleryView>

        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}

        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageGalleryItem></ImageGalleryItem>
          </Modal>
        )} */}
      </Container>
    );
  }
}

export default App;
