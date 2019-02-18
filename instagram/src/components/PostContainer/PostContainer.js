import React from "react";
import "./postContainer.css";
import Comments from "../CommentSection/CommentSection.js";
import PropTypes from "prop-types";
// props: post
export default function PostContainer(props) {
  return (
    <div className="post">
      <section className="postUser">
        <img src={props.post.thumbnailUrl} alt="User avatar" />
        <h2>{props.post.username}</h2>
      </section>
      <img src={props.post.imageUrl} alt="Post content" />
      <section className="postIcons">
        <div>
          <i className="far fa-heart" />
          <i className="far fa-comment" />
        </div>
        <strong>{props.post.likes} likes</strong>
      </section>
      <Comments comments={props.post.comments} />
      <section className="timestamp">
        <p>{props.post.timestamp}</p>
      </section>
      <section className="newComment">
        <input type="text" placeholder="Add a comment..." />
        <i className="fas fa-ellipsis-h" />
      </section>
    </div>
  );
}

PostContainer.propTypes = {
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
