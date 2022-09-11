import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {
  const renderData = ({ listData }) => {
    if (listData) {
      if (listData.length > 0) {
        return listData.map((item) => {
          return (
            <Link to={`/details?restId=${item.restaurant_id}`} key={item.restaurant_id}>
              <div className="p-i-to-2">
                <span className="offer-mm">{item.restOffer}% OFF</span>
                {
                  item.isPro ? <span className="offer-extra-mm">Pro extra 20% OFF</span> : null
                }
                <span className="dependable"><i className="bi bi-graph-up-arrow"> {item.deliveries} delivery from here</i></span>
                <span className="time-mm">{item.average_time} min</span>
                <span className="float-r rate-my adjust-rate">{item.average_rating} <i className="bi bi-star-fill g-g-old"></i></span>
                <img src={item.restaurant_thumb} alt={item.restaurant_name} />
                <div className="details-listing">
                  <h4>{item.restaurant_name}</h4>
                  <p>{item.address}</p>
                  <p>Rs. {item.cost}</p>
                  <p>{item.mealTypes[0].mealtype_name}<i className="bi bi-dot"></i>{item.cuisines[0].cuisine_name}<i className="bi bi-dot"></i> {item.cuisines[1].cuisine_name}<i className="bi bi-dot"></i>{item.mealTypes[1].mealtype_name}</p>
                </div>
              </div>
            </Link>
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
            src="https://i.ibb.co/GRf0ygr/1-Cs-J05-WEGfun-YMLGfs-T2s-XA.gif"
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
