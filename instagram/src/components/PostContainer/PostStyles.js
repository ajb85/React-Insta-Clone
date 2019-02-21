import React from "react";
import styled from "styled-components";

export const Post = styled.div`
  border: 1px solid lightgrey;
  max-width: 600px;
  margin-bottom: 100px;

  img {
    width: 100%;
  }
`;

export const UserInfo = styled.section`
  margin: 15px 0 15px 15px;
  display: flex;
  align-items: center;

  img {
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  h2 {
    font-size: 15px;
  }
`;

export const PostIcons = styled.section`
  margin: 15px 0 7px 15px;

  div {
    display: flex;
    align-items: center;
    height: 22px;
  }

  i {
    font-size: 22px;
    margin: 15px 0 15px;
  }

  i.fa-heart {
    margin-right: 15px;
  }

  i.fa-heart.liked {
    color: blue;
  }

  i.fa-comment {
    transform: scale(-1, 1);
  }
`;

export const Timestamp = styled.section`
  margin: 5px 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid lightgrey;

  p {
    margin: 0;
  }
`;

export const NewComment = styled.section`
  margin: 15px 0 15px 15px;

  input {
    width: 94%;
    border: transparent;

    &:focus {
      outline: none;
    }
  }
`;

export const Comment = styled.section`
  margin: 15px 0 15px 15px;

  strong {
    margin-right: 8px;
  }
`;
