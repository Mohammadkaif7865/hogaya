import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="App">
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/post">Post</Link>
    </div>
  );
};
export default Header;
