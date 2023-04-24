import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className="overlay"
        onClick={this.handleBackdropClick}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1200,
        }}
      >
        <div
          className="modal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '500px',
            height: '400px',
            backgroundColor: 'white',
            zIndex: 1200,
          }}
        >
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
