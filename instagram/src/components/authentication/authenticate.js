import React, { Component } from "react";

const authenticate = Comp =>
  class extends Component {
    render() {
      return <Comp />;
    }
  };

export default authenticate;
