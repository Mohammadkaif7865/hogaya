import React from "react";

const Home = (props) => {
  //console.log(props)
  return (
    <div className="container">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3>Home Page</h3>
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
        </div>
      </div>
    </div>
  );
};

export default Home;