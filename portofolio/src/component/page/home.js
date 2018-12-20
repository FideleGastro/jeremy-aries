import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import SplittedContainer from "../template/splitted";

import ImageBlock from "../molecule/imageBlock";
import TextBlock from "../molecule/textBlock";

const presentation = (
  <>
    <h3>FideleGastro</h3>
  </>
);

class home extends Component {
  state = {
    userData: {},
    reposUserData: {}
  };

  componentDidMount() {
    // axios.get("https://api.github.com/users/fidelegastro").then(response => {
    //   console.log("fetch => ", response.data);
    //   this.setState({ userData: { ...response.data } });
    // });
    // axios
    //   .get("https://api.github.com/users/fidelegastro/repos")
    //   .then(response => {
    //     console.log("fetch => ", response.data);
    //     this.setState({ reposUserData: { ...response.data } });
    //   });
  }

  render() {
    console.log("state", this.state);
    return (
      <>
        <SplittedContainer
          leftContent={ImageBlock(
            "https://condescending-borg-09a56c.netlify.com/static/raphael-effaabf7fa068b48046a4044cc9e1719.jpg"
          )}
          rightContent={TextBlock(presentation)}
        />

        <SplittedContainer
          rightContent={ImageBlock()}
          leftContent={TextBlock(<h3>CouCou</h3>)}
        />
      </>
    );
  }
}

export default home;
