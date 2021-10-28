import React, { Component } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
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
    largeImageURL: '',
  };

  openModal = event => {
    const largeImageUrl = event.target.dataset.source;
    this.setState({ largeImageURL: largeImageUrl });

    this.toggleModal();
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
        <GalleryView openModal={this.openModal}></GalleryView>

        {showModal && (
          <Modal onClick={this.openModal} onClose={this.toggleModal}>
            <img src={this.state.largeImageURL} alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
