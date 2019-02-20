import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage.js";
import authenticate from "./components/authentication/authenticate.js";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
  }

  toggleLogin = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  render() {
    const Authenticated = authenticate(PostsPage);
    return (
      <Authenticated
        loggedIn={this.state.loggedIn}
        toggleLogin={this.toggleLogin}
      />
    );
  }
}

export default App;
