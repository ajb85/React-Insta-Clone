import React, { Component } from "react";
import "./App.css";
import mockData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

class App extends Component {
  constructor() {
    super();
    this.state = { displayName: "You", postData: mockData };
  }

  newComment = (comment, i) => {
    let postData = [...this.state.postData];
    postData[i].comments.push({
      username: this.state.displayName,
      text: comment
    });
    this.setState({ postData });
  };

  render() {
    const posts = this.state.postData.map((post, i) => (
      <PostContainer
        post={post}
        key={i}
        index={i}
        displayName={this.state.displayName}
        addComment={this.newComment}
      />
    ));
    return (
      <div className="container">
        <SearchBar />
        <div className="postsContainer">{posts}</div>
      </div>
    );
  }
}

export default App;
