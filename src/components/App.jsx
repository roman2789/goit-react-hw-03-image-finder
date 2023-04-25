import { Component } from 'react';
import Modal from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './AppStyled';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyles } from 'GlobalStyles';
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

  onSearchFormSubmit = query => {
    this.state.images.forEach(image =>
      image.tags.toLowerCase().includes(query)
    );
  };

  render() {
    return (
      <Container>
        <GlobalStyles />
        <Searchbar onSubmit={this.onSearchFormSubmit} />
        {this.state.showModal && (
          <Modal onClose={this.onToggleModal}>
            <h1>dbvb</h1>
            <button type="button" onClick={this.onToggleModal}>
              Close modal
            </button>
          </Modal>
        )}

        <ImageGallery images={this.state.images} />
      </Container>
    );
  }
}
export default App;
