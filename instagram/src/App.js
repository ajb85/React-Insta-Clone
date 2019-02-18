import React, { Component } from "react";
import "./App.css";
import mockData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
//import SearchBar from "./components/SearchBar/SearchBar.js";

class App extends Component {
  render() {
    const posts = mockData.map(post => <PostContainer post={post} />);
    return <div>{posts}</div>;
  }
}

export default App;
