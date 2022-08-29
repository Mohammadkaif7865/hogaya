import React, { Component } from "react";
import axios from "axios";
import "./Listing.css";
import ListingDisplay from "./ListingDisplay";
// import CuisineFilter from "../filters/cuisineFilter";
// import CostFilter from "../filters/costFilter";

const url = "https://restaurantmysite.herokuapp.com/restaurants";

class Listing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: "",
    };
  }

  setDataPerFilter = (data) => {
    this.setState({ restaurants: data });
  };
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };
 
  render() {
    return (
      <>
        <div className="row">
          <div id="mainListing">
            <div id="filter">
              <center>
                <h3>Filters</h3>
              </center>
              <hr />
              {/* <CuisineFilter
                mealId={this.props.match.params.id}
                restPerCuisine={(data) => {
                  this.setDataPerFilter(data);
                }}
              /> */}
              <hr />
              {/* <CostFilter
                restPerCost={(data) => {
                  this.setDataPerFilter(data);
                }}
              /> */}
            </div>
            <ListingDisplay listData={this.state.restaurants} />
          </div>
        </div>
      </>
    );
  }

  //calling api with axios
  componentDidMount() {
    let mealId = this.props.match.params.id ? this.props.match.params.id : 1;
    sessionStorage.setItem("mealId", mealId);
    axios.get(`${url}?mealId=${mealId}`).then((res) => {
      this.setState({ restaurants: res.data });
    });
    this.scrollToTop();
  }
}

export default Listing;