import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
// # we can get params or :id in child component in match object of props of child component
// TODO import useParams amd define it into a variable and then use it as variable.paramName
// # we can get query params in child component in Location object of props of child component
// TODO import useSearchParams and define it into a [variable] and then use it as variable.getAll('queryParamName') 
// * History > for redirection to previous route
const PostDetails = (props) => {
  let params = useParams();
  let [searchParams] = useSearchParams();
  return (
    <div className="panel panel-success">
      <div className="panel-heading">
        <h3>{params.topic} Page</h3>
        <h4>You are on {searchParams.getAll("page")}</h4>
      </div>
      <div className="panel-body">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
