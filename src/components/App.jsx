import { Component } from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
    date: new Date().toLocaleTimeString(),
  };
  componentDidUpdate() {
    setInterval(
      () => this.setState({ date: new Date().toLocaleTimeString() }),
      1000
    );
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
            <div>{this.state.date}</div>
          </Modal>
        )}

        <button type="button" onClick={this.onToggleModal}>
          Open modal
        </button>
      </div>
    );
  }
}
export default App;
