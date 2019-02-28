import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage.js";
import LoginPage from "./components/Login/LoginPage.js";
import authenticate from "./components/authentication/authenticate.js";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false, username: "" };
  }

  updateState = (state, stateValue) => {
    this.setState({ [state]: stateValue });
  };

  render() {
    const Authenticated = authenticate(LoginPage)(PostsPage);
    return (
      <Authenticated
        loggedIn={this.state.loggedIn}
        updateState={this.updateState}
        username={this.state.username}
      />
    );
  }
}

export default App;
