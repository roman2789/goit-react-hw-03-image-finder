import { Component } from 'react';

import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

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
          <Modal>
            <h1>dbvb</h1>
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
