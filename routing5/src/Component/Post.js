import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  //console.log(props)
  return (
    <div className="container">
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3>Post Page</h3>
        </div>
        <div className="panel-body">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <h1>Javascript</h1>
          <Link to="/Post/Javascript?page=1" className="btn btn-primary">
            Details
          </Link>
          <h1>Node</h1>
          <Link to="/Post/Node?page=4" className="btn btn-dark">
            Details
          </Link>
          <h1>React</h1>
          <Link to="/Post/React?page=3" className="btn btn-success">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
