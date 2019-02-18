import React from "react";
import "./postContainer.css";
import Comments from "../CommentSection/CommentSection.js";
// props: post
export default function PostContainer(props) {
  return (
    <div>
      <Comments comments={props.post.comments} />
    </div>
  );
}
