import React, { Component } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
// import ImageGalleryItem from './components/ImageGalleryItem';
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

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <GalleryView></GalleryView>

        {/* <button type="button" className="Button" onClick={this.toggleModal}>
          Open Modal
        </button> */}

        {showModal && <Modal onClick={this.toggleModal}></Modal>}
      </Container>
    );
  }
}

export default App;
