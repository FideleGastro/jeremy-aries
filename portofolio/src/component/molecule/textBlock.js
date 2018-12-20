import React from "react";
import axios from "axios";

// console.log(
//   "image",
//   axios
//     .get("https://picsum.photos/200/300/?random")
//     .then(function(response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function(error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function() {
//       // always executed
//     })
// );

const textBlock = text => {
  return <h1>{text}</h1>;
};

export default textBlock;
