import React from "react";

const Ghost = () => {
  //console.log(props)
  return (
    <div className="container">
      <div className="panel panel-success">
        <div className="panel-heading">
          <h3>404 Not Found</h3>
        </div>
        <div className="panel-body">
          <img
            src="https://i.ibb.co/nPS0Lfv/ghost.webp"
            alt="img"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Ghost;
