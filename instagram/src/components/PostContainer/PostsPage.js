import React, { Component } from "react";
import mockData from "../../dummy-data.js";
import PostContainer from "./PostContainer.js";
import SearchBar from "../SearchBar/SearchBar.js";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      postData: [],
      searching: "",
      liked: {},
      clicked: null
    };
    //this.state = { displayName: "You", postData: [], searching: "", liked: {} };
  }
  componentDidMount() {
    if (!localStorage[this.state.username]) {
      localStorage.setItem(this.state.username, JSON.stringify(mockData));
    }
    this.setState({
      postData: JSON.parse(localStorage.getItem(this.state.username))
    });

    window.addEventListener("beforeunload", this.saveStateToStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToStorage);
    this.saveStateToStorage();
  }

  saveStateToStorage = () => {
    let { postData } = this.state;

    localStorage.setItem(this.state.username, JSON.stringify(postData));
  };

  addNewComment = (comment, i) => {
    let postData = [...this.state.postData];
    postData[i].comments.push({
      username: this.state.username,
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

  clickPost = i => {
    console.log("clicked");
    if (this.state.clicked === null) {
      this.setState({ clicked: i });
    } else {
      this.setState({ clicked: null });
    }
  };

  render() {
    let posts = "Loading...";
    const modifyPost = {
      likePost: this.likePost,
      newComment: this.addNewComment,
      clickPost: this.clickPost
    };
    if (
      this.state &&
      this.state.postData.length &&
      this.state.clicked === null
    ) {
      posts = this.state.postData
        .filter(post => post.username.includes(this.state.searching))
        .map((post, i) => (
          <PostContainer
            post={post}
            key={post.imageUrl}
            index={i}
            displayName={this.state.username}
            modifyPost={modifyPost}
            liked={this.state.liked}
          />
        ));
    } else if (
      this.state &&
      this.state.postData.length &&
      typeof this.state.clicked === "number"
    ) {
      const post = this.state.postData[this.state.clicked];
      posts = (
        <PostContainer
          post={post}
          key={post.imageUrl}
          index={this.state.clicked}
          displayName={this.state.username}
          modifyPost={modifyPost}
          liked={this.state.liked}
        />
      );
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

export default PostsPage;
