import { Component } from 'react';
import Modal from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './AppStyled';
import { Searchbar } from './Searchbar/Searchbar';
import { GlobalStyles } from 'GlobalStyles';
class App extends Component {
  state = {
    query: '',

    showModal: false,
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onSearchFormSubmit = query => {
    this.setState({ query });
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

        <ImageGallery query={this.state.query} />
      </Container>
    );
  }
}
export default App;
