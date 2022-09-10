import React, { Component } from "react";
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

const url = "https://restaurantmysite.herokuapp.com/mealtype";

class QuickSearch extends Component {
  constructor() {
    super();

    this.state = {
      mealType: "",
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <span id="quickHeading">Quick Search</span>
          <span id="quickSubHeading">Discover Restaurants By Meal</span>
          <QuickDisplay mealData={this.state.mealType} />
        </div>
      </>
    );
  }

  //apicalling
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealType: data });
      });
  }
}

export default QuickSearch;
