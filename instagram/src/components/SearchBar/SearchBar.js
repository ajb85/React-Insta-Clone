import React from "react";
import "./searchBar.css";

export default function SearchBar(props) {
  return (
    <div className="searchBar">
      <div className="logos">
        <img src="https://i.imgur.com/RzOn2Qz.png" alt="IG logo" />
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navIcons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
}
