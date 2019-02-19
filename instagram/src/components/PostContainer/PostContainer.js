import React from "react";
import "./postContainer.css";
import Comments from "../CommentSection/CommentSection.js";
import PropTypes from "prop-types";
/*
Props:
post={post}
key={i}
index={i}
displayName={this.state.displayName}
modifyPost={modifyPosts}
searching={this.state.searching}
liked={this.state.liked}
*/
export default function PostContainer(props) {
  function newComment(e) {
    e.preventDefault();
    const comment = e.target.firstChild.value;
    props.modifyPost.newComment(comment, props.index);
    e.target.firstChild.value = "";
  }

  const likedClassName = props.liked[props.index]
    ? "far fa-heart liked"
    : "far fa-heart";

  return (
    <div className="post">
      <section className="postUser">
        <img src={props.post.thumbnailUrl} alt="User avatar" />
        <h2>{props.post.username}</h2>
      </section>
      <img src={props.post.imageUrl} alt="Post content" />
      <section className="postIcons">
        <div>
          <i
            className={likedClassName}
            onClick={() => props.modifyPost.likePost(props.index)}
          />
          <i className="far fa-comment" />
        </div>
        <strong>{props.post.likes} likes</strong>
      </section>
      <Comments comments={props.post.comments} />
      <section className="timestamp">
        <p>{props.post.timestamp}</p>
      </section>
      <section className="newComment">
        <form onSubmit={newComment}>
          <input type="text" placeholder="Add a comment..." />
          <i className="fas fa-ellipsis-h" />
        </form>
      </section>
    </div>
  );
}

PostContainer.propTypes = {
  displayName: PropTypes.string.isRequired,
  //modifyPost: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  })
};

PostContainer.defaultProps = {
  posts: { comments: [] }
};
