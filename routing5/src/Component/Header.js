import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Routing 5
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/Display">Products</Link>
          </li>
          <li>
            <Link to="/kuchbhi">KuchBhi</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
