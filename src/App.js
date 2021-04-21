import React, { Component } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import './App.css';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onSubmit = () => {
    console.log('onSubmit');
  };

  render() {
    const { showModal } = this.state;
    // console.log(showModal);

    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>

        <ImageGallery></ImageGallery>

        <ImageGalleryItem></ImageGalleryItem>

        {/* <Loader></Loader> */}

        {/* <SearchForm></SearchForm> */}

        <Button
        // onClick={onLoadMore}
        ></Button>

        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
