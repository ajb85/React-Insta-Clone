import React, { Component } from "react";
/*
props:
loggedIn={this.state.loggedIn}
updateState={this.updateState}
*/
const authenticate = LogIn => UserLoggedIn =>
  class extends Component {
    render() {
      if (this.props.loggedIn) {
        return <UserLoggedIn username={this.props.username} />;
      }
      return <LogIn updateState={this.props.updateState} />;
    }
  };

export default authenticate;
