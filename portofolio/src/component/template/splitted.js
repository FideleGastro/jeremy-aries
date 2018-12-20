import React, { Component } from "react";
import styled from "styled-components";

class splitted extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledLeft>{this.props.leftContent}</StyledLeft>
        <StyledRight>{this.props.rightContent}</StyledRight>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled("div")`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledLeft = styled("div")`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledRight = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default splitted;
