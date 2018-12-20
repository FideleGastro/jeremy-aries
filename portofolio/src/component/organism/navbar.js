import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Portal from "../../Portal";
import Modal from "../../Modal";
import { WithUser } from '../../context'

class navbar extends Component {
  state = {
    modalToggle: false
  };

  modalToggle = () => {
    this.setState({ modalToggle: !this.state.modalToggle });
  };

  render() {
    return (
      <>
        <Wrap>
          <StyledLink to="/">{this.props.user.username} </StyledLink>
          <StyledLink to="/project">project</StyledLink>
          <StyledLink to="/about">about</StyledLink>
          <StyledLink to="/contact">contact</StyledLink>
          <StyledLink to="/signin">signin</StyledLink>
          <StyledToggle onClick={this.modalToggle}>connexion</StyledToggle>
        </Wrap>
        {this.state.modalToggle && (
          <Portal>
            <Modal CloseModal={this.modalToggle} />
          </Portal>
        )}
      </>
    );
  }
}

const Wrap = styled.div`
  background: white;
  box-shadow: 0 0 4px 0px grey;
  text-align: center;
  padding: 0px 0px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  color: black;
  font-weight: bolder;
  z-index: 5;
`;

const StyledLink = styled(Link)`
  color: black;
  list-style: none;
  text-decoration: none;
  padding: 0.5em 1.5em;
  margin: 0.5em 1.5em;
`;

const StyledToggle = styled("div")`
  color: black;
  list-style: none;
  text-decoration: none;
  padding: 0.5em 1.5em;
  margin: 0.5em 1.5em;
`;

export default WithUser(navbar);
