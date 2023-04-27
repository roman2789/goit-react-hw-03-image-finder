import { GalleryItem, ItemRef } from './ImageGalleryItemStyled';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class Item extends Component {
  state = {
    showModal: false,
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    return (
      <GalleryItem>
        <ItemRef onClick={this.onToggleModal}>
          {this.props.children}
          {this.state.showModal && (
            <Modal
              onClose={this.onToggleModal}
              image={this.props.image.largeImageURL}
            />
          )}
        </ItemRef>
      </GalleryItem>
    );
  }
}
