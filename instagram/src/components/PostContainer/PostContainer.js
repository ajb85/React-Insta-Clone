import React from "react";
import "./postContainer.css";
import Comments from "../CommentSection/CommentSection.js";
// props: post
export default function PostContainer(props) {
  return (
    <div className="post">
      <section className="postUser">
        <img src={props.post.thumbnailUrl} />
        <h2>{props.post.username}</h2>
      </section>
      <img src={props.post.imageUrl} />
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
        <i class="fas fa-ellipsis-h" />
      </section>
    </div>
  );
}
