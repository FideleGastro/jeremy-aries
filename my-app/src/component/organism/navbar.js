import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class navbar extends Component {
  render() {
    return (
      <Wrap>
        <StyledLink to="/">home</StyledLink>
        <StyledLink to="/signin">signup</StyledLink>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  background: whitesmoke;
  box-shadow: 0 0 4px 0px grey;
  text-align: center;
  padding: 10px 0px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  color: black;
  font-weight: bolder;
`;

const StyledLink = styled(Link)`
  color: blue;
  list-style: none;
  text-decoration: none;
`;

export default navbar;
