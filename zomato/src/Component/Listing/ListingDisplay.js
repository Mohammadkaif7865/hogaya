import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <div className="item" key={item.restaurant_id}>
              <div className="row">
                <div className="col-md-5">
                  <img
                    src={item.restaurant_thumb}
                    className="Image"
                    alt={item.restaurant_name}
                  />
                </div>
                <div className="col-md-7">
                  <div className="hotel_name">
                    <Link to={`/details?restId=${item.restaurant_id}`}>
                      {item.restaurant_name}
                    </Link>
                    <div className="city_name">{item.address}</div>
                    <div className="city_name">{item.rating_text}</div>
                    <div className="city_name">Rs. {item.cost}</div>
                    <div className="labelDiv">
                      <span className="btn btn-primary">
                        {item.mealTypes[0].mealtype_name}
                      </span>{" "}
                      &nbsp;
                      <span className="btn btn-success">
                        {item.mealTypes[1].mealtype_name}
                      </span>
                    </div>
                    <div className="labelDiv">
                      <span className="btn btn-info">
                        {item.cuisines[0].cuisine_name}
                      </span>{" "}
                      &nbsp;
                      <span className="btn btn-danger">
                        {item.cuisines[1].cuisine_name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        });
      } else {
        return (
          <div>
            <h2>No Data For the Filter</h2>
          </div>
        );
      }
    } else {
      return (
        <div>
          <img
            src="https://i.ibb.co/30Fq85D/loader.gif"
            alt="loader"
          />
          {/* https://i.ibb.co/m6TSbQ6/loader-gif.gif
                    https://i.ibb.co/GRf0ygr/1-Cs-J05-WEGfun-YMLGfs-T2s-XA.gif"
https://i.ibb.co/30Fq85D/loader.gif                    */}
          <h2>Loading....</h2>
        </div>
      );
    }
  };

  return <div id="content">{renderData(props)}</div>;
};

export default ListingDisplay;
