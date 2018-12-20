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
          <StyledNavbar onTop={window.scrollY > 0} />
          <Suspense fallback={<div>Loading...</div>}>
            <Container>
              <Switch>
                <Route path="/" exact component={page.Home} />
                <Route path="/project" exact component={page.Signin} />
                <Route path="/about" exact component={page.Contact} />
                <Route path="/contact" exact component={page.Contact} />
                <Route path="/admin" exact component={page.Home} />
                <Route path="/signin" exact component={page.Signin} />
              </Switch>
            </Container>
          </Suspense>
        </Fragment>
      </Router>
    );
  }
}

const Container = styled.div``;

const StyledNavbar = styled(Navbar)`
  background: ${props => (props.onTop ? "darkred" : "limegreen")};
`;

export default App;
