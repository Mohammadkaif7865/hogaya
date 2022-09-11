import React, { Component } from "react";
import axios from "axios";
import "./Listing.css";
import "../../App.css";
import ListingDisplay from "./ListingDisplay";
import CuisineFilter from "../Filters/cuisineFilter";
import CostFilter from "../Filters/costFilter";

const url = "https://restaurantmysite.herokuapp.com/restaurants";

class Listing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: "",
      boxShown: "none"
    };
  }
  closebtn = () => {
    this.setState({ boxShown: "none" });
  }
  openbtn = () => {
    this.setState({ boxShown: "block" });
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
        <div className="box-container" style={{ display: this.state.boxShown }}>
          <div className="box-my">
            <i className="bi bi-x-lg cancel-kar" onClick={this.closebtn}></i>
            <h2 className="box-head">Filters</h2>
            <div id="filter">
              <CuisineFilter
                mealId={this.props.match.params.id}
                restPerCuisine={(data, show) => {
                  this.setDataPerFilter(data);
                  this.setState({boxShown: show});
                }}
              />
              <hr />
              <CostFilter
                restPerCost={(data, show) => {
                  this.setDataPerFilter(data);
                  this.setState({boxShown: show});
                }}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="filter-my make-sticky">
            <div onClick={this.openbtn} className="filters" type="button"><i className="bi bi-funnel-fill"></i> Filter</div>
            <div className="filters" type="button"><i className="bi bi-arrow-down-up"></i> Delivery time</div>
            <div className="filters" type="button">Rating 4.0+</div>
            <div className="filters" type="button">Pure veg</div>
            <div className="filters" type="button">More filter <i className="bi bi-chevron-down"></i></div>
          </div>



          <div className="path-to-2">
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
