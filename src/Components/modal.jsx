import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../modal.css'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
class Window extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
       <a onClick={this.openModal}>{this.props.name}</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className = 'modal'>
            <button onClick={this.closeModal}>&times;</button>
            <h2>{this.props.name}</h2> 
            <a href = {this.props.twitter} target="_blank">Twitter</a>
            <p>Tier: <strong>{this.props.tier}</strong></p>
            <p>Rating: <strong>{this.props.score}</strong></p>
          </div>
        </Modal>
      </div>
    );
  }
}
 
export default Window;