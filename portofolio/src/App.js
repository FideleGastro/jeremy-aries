import React, { Component, Fragment, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as page from "./component/page";
import Navbar from "./component/organism/navbar";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Container>
              <Switch>
                <Route path="/" exact component={page.Home} />
                <Route path="/signin" exact component={page.Signin} />
              </Switch>
            </Container>
          </Suspense>
        </Fragment>
      </Router>
    );
  }
}

const Container = styled.div`
  background: chartreuse;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
