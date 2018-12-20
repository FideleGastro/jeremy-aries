import React from "react";

import styled from "styled-components";

const StyledImage = styled("div")`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props =>
    props.url ? props.url : "https://picsum.photos/200/300/?random"});
  background-position: center;
  height: 100vh;
  width: 50vw;
`;

const imageBlock = image => {
  return <StyledImage url={image} />;
};

export default imageBlock;
