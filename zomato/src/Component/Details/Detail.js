import React, { Component } from "react";
import axios from "axios";
import "./Details.css";
import "../../App.css";
import { Link } from "react-router-dom";
import MenuDisplay from "./menuDisplay";

const url = "https://restaurantmysite.herokuapp.com";

class RestDetails extends Component {
  constructor() {
    super();

    this.state = {
      details: "",
      menuList: "",
      userItem: "",
      initItems: [],
      images: "",
      mealId: sessionStorage.getItem("mealId")
        ? sessionStorage.getItem("mealId")
        : "1",
    };
  }

  addToCart = (data) => {
    let items = [...this.state.initItems, ...data]
    this.setState({ userItem: items });
  };

  proceed = () => {
    sessionStorage.setItem("menu", this.state.userItem.sort(function (a, b) { return a - b }));
    this.props.history.push(
      `/placeOrder/${this.state.details.restaurant_name}`
    );
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
        <div className="restaurant-image">
          <div className="pic1">

            <img src={this.state.details.restaurant_thumb} alt="img" className="pic-item" />

          </div>
          <div className="pic2">

            <img src={this.state.images[0]} alt="img" className="pic-item" />

          </div>
          <div className="pic3">

            <div className="my-add-photo">
              View Gallery
            </div>
            <img src={this.state.images[1]} alt="img" className="pic-item" style={{ opacity: " 0.5" }} />

          </div>
          <div className="pic4">

            <img src={this.state.images[2]} alt="img" className="pic-item" />

          </div>
          <div className="no-pic">

            <div className="my-add-photo">
              <i className="bi bi-plus-circle" ></i> Add pics
            </div>
            <img src={this.state.images[3]} alt="img" className="pic-item" style={{ opacity: " 0.2" }} />


          </div>
        </div>
        <div className="container rest-header">
          <div >
            <div className="cart">
              <span className="cart-counts" id="cart-counts" onClick={this.proceed}>{this.state.userItem.length}</span>
              <i className="bi bi-cart2 cart-logo"></i>
            </div>
            <h1>{this.state.details.restaurant_name}</h1>

          </div>
        </div>
        <div className="container">
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <span className="rest-header-review"><u>Dining review  </u><span style={{ borderRadius: "5px", backgroundColor: "rgb(222, 168, 6)", color: "white", padding: "5px" }}>{this.state.details.average_rating} <i className="bi bi-star-fill "></i></span>
            </span>
            <span className="rest-header-review"><u>Delivery review </u> <span style={{ borderRadius: "5px", backgroundColor: "green", color: "white", padding: "5px" }}>{this.state.details.average_rating} <i className="bi bi-star-fill "></i></span></span>
          </div>
          <div className="address-rest">
            <p>
              {this.state.details.address}
            </p>
            <p>
              <span style={{ color: "orange" }}>Open Now</span> - 8am - 10:30pm(Today) <Link to="/"><i className="bi bi-info-circle"></i></Link>
            </p>
          </div>
          <div className="user-and-restaurant">
            <button className="btn btn-danger" onClick={this.proceed}>
              CheckOut
            </button>
            {" "}

            <button className="btn btn-light border-2-grey
            " type="button" onClick={this.props.history.goBack}>Back</button>
            {" "}
            <button className="btn btn-light border-2-grey" type="button"><i className="bi bi-arrow-90deg-right color-red"></i> Direction</button>
            {" "}
            <button className="btn btn-light border-2-grey" type="button"><i className="bi bi-bookmark-plus color-red"></i> Bookmark</button>
            {" "}
            <button className="btn btn-light border-2-grey" type="button"><i className="bi bi-share-fill color-red"></i> Share</button>

          </div>
        </div>
        <div className="container">
          <MenuDisplay
            menudata={this.state.menuList}
            finalOrder={(data) => {
              this.addToCart(data);
            }}
          />
        </div>
      </>
    );
  }

  // calling with async await
  async componentDidMount() {
    let initalItems = sessionStorage.getItem("menu") ? sessionStorage.getItem('menu').split(",") : [];
    initalItems.map((item) => {
      this.state.initItems.push(Number(item));
      return "ok";
    })
    if (this.state.initItems.length > 0) {
      this.setState({ userItem: this.state.initItems })
    }
    let restId = this.props.location.search.split("=")[1];
    let response = await axios.get(`${url}/details/${restId}`);
    let menu = await axios.get(`${url}/menu/${restId}`);
    this.setState({ details: response.data[0], menuList: menu.data, images: response.data[0].image_gallery });
    this.scrollToTop();
  }
}

export default RestDetails;
