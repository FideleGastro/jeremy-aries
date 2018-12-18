import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class signinForm extends Component {
  state = {
    isValid: false,
    email: "",
    password: "",
    passwordverify: ""
  };

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { email, password, passwordverify } = this.state;
    if (
      email === "toto@toto.fr" &&
      password === "toto" &&
      passwordverify === "toto"
    ) {
      this.setState({ isValid: true });
      return true;
    }
    return false;
  };

  render() {
    console.log("state", this.state);
    return (
      <>
        {!this.state.isValid ? (
          <Form onSubmit={this.onSubmit}>
            <Input
              onChange={this.onChange}
              type="email"
              name="email"
              placeholder=" email..."
            />
            <Input
              onChange={this.onChange}
              type="password"
              name="password"
              placeholder=" pwd..."
            />
            <Input
              onChange={this.onChange}
              type="password"
              name="passwordverify"
              placeholder="pwd verif..."
            />
            {this.state.password !== this.state.passwordverify && (
              <Center>error: password different ! </Center>
            )}
            <Input type="submit" value="Submit" />
          </Form>
        ) : (
          <StyledLink to="/">home</StyledLink>
        )}
      </>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  background: whitesmoke;
  box-shadow: 0 0 4px 0px grey;
`;

const Input = styled.input`
  margin: 5px 10px;
  padding: 5px 10px;
`;

const Center = styled.span`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: blue;
  list-style: none;
  text-decoration: none;
`;

export default signinForm;
