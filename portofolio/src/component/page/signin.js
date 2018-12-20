import React, { Component, lazy } from "react";
import styled from "styled-components";

//import SigninForm from "./../organism/signinForm";
const SigninForm = lazy(() => import("./../organism/signinForm"));

class signup extends Component {
  render() {
    return (
      <Container>
        <SigninForm />
      </Container>
    );
  }
}

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default signup;
