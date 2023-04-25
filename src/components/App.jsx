import { Component } from 'react';
import Modal from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
class App extends Component {
  state = {
    images: [],

    showModal: false,
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?key=29463027-4abcfc2db99f2732a8383a5f8&page=1&per_page=12'
    )
      .then(response => response.json())
      .then(imagesData => this.setState({ images: imagesData.hits }));
  }

  onToggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {this.state.showModal && (
          <Modal onClose={this.onToggleModal}>
            <h1>dbvb</h1>
            <button type="button" onClick={this.onToggleModal}>
              Close modal
            </button>
          </Modal>
        )}

        <button type="button" onClick={this.onToggleModal}>
          Open modal
        </button>

        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
export default App;
