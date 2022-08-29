import React, { Component } from "react";
import "./Search.css";
import { withRouter } from "react-router-dom";

const url = "https://restaurantmysite.herokuapp.com/location";
const restUrl = "https://restaurantmysite.herokuapp.com/restaurants";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      restaurants: "",
    };
  }

  renderCity = (data) => {
    // ! to escape from code break we have to conditionally render the data
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.state_id} key={item.state_id}>
            {item.state}
          </option>
        );
      });
    }
  };

  renderRest = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <option value={item.restaurant_id} key={item.restaurant_id}>
            {item.restaurant_name} | {item.address}
          </option>
        );
      });
    }
  };

  handleCity = (event) => {
    let stateId = event.target.value;
    console.log(stateId);
    fetch(`${restUrl}?stateId=${stateId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restaurants: data });
      });
  };

  handleRest = (event) => {
    const restId = event.target.value;
    this.props.history.push(`/details?restId=${restId}`);
  };

  render() {
    return (
      <>
        <div id="search">
          <div id="logo">
            <span>E!</span>
          </div>
          <div id="heading">Find The Best Restaurants Near You</div>
          <div className="dropdown">
            <select onChange={this.handleCity}>
              <option>----SELECT YOUR CITY-----</option>
              {this.renderCity(this.state.location)}
            </select>
            <select className="restSelect" onChange={this.handleRest}>
              <option>----SELECT YOUR Restaurants-----</option>
              {this.renderRest(this.state.restaurants)}
            </select>
          </div>
        </div>
      </>
    );
  }

  // api calling on page load
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location: data });
      });
  }
}

export default withRouter(Search);