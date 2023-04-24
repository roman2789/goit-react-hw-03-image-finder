import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    return createPortal(
      <div
        className="overlay"
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
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
