import React from "react";
//import "./commentSection.css";
//props: comments
import { Comment } from "../PostContainer/PostStyles.js";

export default function CommentSection(props) {
  let comments = props.comments.map((comment, i) => (
    <div className="comment" key={i}>
      <strong>{comment.username}</strong>
      <span>{comment.text}</span>
    </div>
  ));
  return <Comment className="comments">{comments}</Comment>;
}
