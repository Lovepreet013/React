import React from 'react';
import ReactDom from "react-dom";
export const ModalPortal = props => {
  return ReactDom.createPortal(<div style={{
    background: 'rgba(0,0,0,0.7)',
    height: '100vh',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100vw'
  }}>
            <div style={{
      background: 'white',
      margin: 16,
      padding: 16
    }}>
                {props.children}
            </div>
          </div>, document.querySelector("#portal"));
};
export class Modal extends React.Component {
  state = {
    modelIsOpen: false
  };
  openModal = () => {
    this.setState(prevState => prevState.modelIsOpen = true);
  };
  closeModal = () => {
    this.setState(prevState => prevState.modelIsOpen = false);
  };
  render() {
    return <div>
                <h1>Portals in React</h1>
                <button onClick={this.openModal}>Open Modal</button>
                {this.state.modelIsOpen && <ModalPortal>
                    <p>hello from Modal</p>
                    <button onClick={this.closeModal}>Close Modal</button>
                </ModalPortal>}
            </div>;
  }
}