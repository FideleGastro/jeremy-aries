import React, { Component } from "react";
import styled from "styled-components";

class Modal extends Component {
  state = {};
  render() {
    return (
      <>
        <StyledModal><button onClick={this.props.CloseModal}>CLOSE ME ! </button></StyledModal>
        
      </>
    );
  }
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export default Modal;
