import React, { Component } from "react";
import axios from "axios";
import "./Listing.css";
import "../../App.css";
import { Link } from "react-router-dom";
import ListingDisplay from "./ListingDisplay";
import CuisineFilter from "../Filters/cuisineFilter";
import CostFilter from "../Filters/costFilter";
// import OwlCarousel from '../../../node_modules/react-owl-carousel';  
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const url = "https://restaurantmysite.herokuapp.com/restaurants";
const options = {
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [`<i class="bi bi-chevron-left" style='background-color:white; border-radius: 10px;position: absolute; height: 80px; width: 50px;top: 25%; font-size:40px; padding-top: 10px; left: 0px; color:black; border: 2px solid  rgb(207, 210, 213); '></i>`, `<i class="bi bi-chevron-right" style='background-color:white; border-radius: 10px;position: absolute; height: 80px; width: 50px;top: 25%; font-size:40px; padding-top: 10px; right: 0px; color:black; border: 2px solid  rgb(207, 210, 213); '></i>`],

  responsive: {
    0: {
      items: 1.5
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }

}
class Listing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: "",
      topRated: "",
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
  renderTop = () => {
    if (this.state.topRated) {
      if (this.state.topRated.length > 0) {
        console.log(this.state.topRated);
        return this.state.topRated.map((item) => {
          return (
            <div key={item.restaurant_id}>
              <Link to={`/details?restId=${item.restaurant_id}`} > <img src={item.
                restaurant_thumb} id="owl-img" alt="Food" /></Link>
              <p>{item.restaurant_name}</p>
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
            src="https://i.ibb.co/GRf0ygr/1-Cs-J05-WEGfun-YMLGfs-T2s-XA.gif"
            alt="loader"
          />
          <h2>Loading....</h2>
        </div>
      );
    }
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
                  this.setState({ boxShown: show });
                }}
              />
              <hr />
              <CostFilter
                restPerCost={(data, show) => {
                  this.setDataPerFilter(data);
                  this.setState({ boxShown: show });
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
          <h3>Here are the top rated restuarants near by you</h3>
          <OwlCarousel className="owl-theme" {...options}
          >
            {this.renderTop()}
          </OwlCarousel>

          <div className="path-to-2">
            <ListingDisplay listData={this.state.restaurants} />
          </div>
        </div >

      </>
    );
  }

  //calling api with axios
  componentDidMount() {
    let mealId = this.props.match.params.id ? this.props.match.params.id : 1;
    sessionStorage.setItem("mealId", mealId);
    axios.get(`${url}?mealId=${mealId}`).then((res) => {
      this.setState({
        restaurants: res.data, topRated: res.data.sort(function (a, b) {
          return parseFloat(b.average_rating) - parseFloat(a.average_rating);
        })
      });

    });
    this.scrollToTop();
  }
}

export default Listing;
