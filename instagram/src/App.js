import React, { Component } from "react";
import "./App.css";
import mockData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

class App extends Component {
  constructor() {
    super();
    this.state = { displayName: "You", postData: [], searching: "", liked: {} };
  }
  componentDidMount() {
    if (!localStorage.postData) {
      localStorage.setItem("postData", JSON.stringify(mockData));
    }
    this.setState({ postData: JSON.parse(localStorage.getItem("postData")) });

    window.addEventListener("beforeunload", this.saveStateToStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToStorage);
    this.saveStateToStorage();
  }

  saveStateToStorage = () => {
    let { postData } = this.state;

    localStorage.setItem("postData", JSON.stringify(postData));
  };

  addNewComment = (comment, i) => {
    let postData = [...this.state.postData];
    postData[i].comments.push({
      username: this.state.displayName,
      text: comment
    });
    this.setState({ postData });
  };

  handleSearchInput = searching => {
    this.setState({ searching });
  };

  likePost = i => {
    // with a post ID you could track their likes.  If a post is already liked,
    // unlike it.  For now, I'm using "i" since the data is static.  This,
    // of course, would NOT work with dynamic data from the API.  But I'll
    // assume with that api will come IDs as well.
    let postData = [...this.state.postData];
    let liked = Object.create(this.state.liked);
    if (!liked[i]) {
      postData[i].likes += 1;
      liked[i] = true;
    } else {
      postData[i].likes -= 1;
      liked[i] = false;
    }
    this.setState({ postData, liked });
  };

  render() {
    let posts = "Loading...";
    const modifyPost = {
      likePost: this.likePost,
      newComment: this.addNewComment
    };
    if (this.state && this.state.postData.length) {
      posts = this.state.postData
        .filter(post => post.username.includes(this.state.searching))
        .map((post, i) => (
          <PostContainer
            post={post}
            key={i}
            index={i}
            displayName={this.state.displayName}
            modifyPost={modifyPost}
            liked={this.state.liked}
          />
        ));
    }
    return (
      <div className="container">
        <SearchBar
          handleSearch={this.handleSearchInput}
          input={this.state.searching}
        />
        <div className="postsContainer">{posts}</div>
      </div>
    );
  }
}

export default App;
