import React, { Component, lazy } from "react";
//import SigninForm from "./../organism/signinForm";
const SigninForm = lazy(() => import("./../organism/signinForm"));

class signup extends Component {
  render() {
    return (
      <>
        <SigninForm />
      </>
    );
  }
}

export default signup;
