import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Search.css"
import "../../App.css";
import "../offcanvas.css";

const url = "https://restaurantmysite.herokuapp.com/location";
const restUrl = "https://restaurantmysite.herokuapp.com/restaurants";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      restaurants: "",
      show: "none",
      index: 3,
      name: this.props.name ? props.name : ""
    };
  }



  handleClose = () => this.setState({ show: "none" });
  handleShow = () => this.setState({ show: "block" });
  logout = () => {
    sessionStorage.clear();
    this.props.setName("");
    this.props.history.push("/");
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
  doSomething = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 120) {
      this.setState({ index: 0 });
    } else if (scrolled <= 120) {
      this.setState({ index: 3 });
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
        <div id="mySidenav" className="sidenav" style={{ display: this.state.show }}>
          <span to="/" className="closebtn" onClick={this.handleClose} >&times;</span>
          {
            !this.state.name ? <Link to="/register" className="n-u-i" onClick={this.handleClose}>
              <p>sign up</p>
            </Link> : null
          }
          <Link to={this.state.name ? "/userInfo" : "/login"} className="n-u-i" onClick={this.handleClose}>
            {
              this.state.name ? <p>Hi {this.state.name}</p> : <p>log in</p>
            }
          </Link>
          {
            this.state.name ? <Link to="/" className="n-u-i" onClick={() => { this.logout(); this.handleClose(); }}>
              <p>LogOut</p>
            </Link> : null
          }
          {
            this.state.name ? <Link to="/viewBooking" className="n-u-i" onClick={this.handleClose}>
              <p>Orders / Cart</p>
            </Link> : null
          }
        </div>
        <div id="header-index" style={{ zIndex: this.state.index }}>
          <div id="header-list-2">
            <div className="navbar-mine-2">
              <div className="left-list-nav-2">
                <h1 id="my-nav-bar" onClick={this.handleShow}>
                  <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#demo"
                  ></i>
                </h1>
                <Link to="/" className="title-my-2">
                  <h1
                    style={{
                      fontSize: "calc(30px + 1vw)",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    Zomato
                  </h1>
                </Link>
              </div>
              <div className="right-list-nav-2 font-mid-2">
                {
                  !this.state.name ? <Link to="/register" className="n-u-i">
                    <p>sign up</p>
                  </Link> : null
                }
                <Link to={this.state.name ? "/userInfo" : "/login"} className="n-u-i">
                  {
                    this.state.name ? <p>Hi {this.state.name}</p> : <p>log in</p>
                  }
                </Link>
                {
                  this.state.name ? <Link to="/" className="n-u-i" onClick={this.logout}>
                    <p>LogOut</p>
                  </Link> : null
                }
                {
                  this.state.name ? <Link to="/viewBooking" className="n-u-i">
                    <p>Orders / Cart</p>
                  </Link> : null
                }
                <Link to="/">
                  <h1
                    className="title-my"
                    style={{
                      fontSize: "calc(30px + 1vw)",
                      fontStyle: "italic",
                      textAlign: "center",
                    }}
                  >
                    Zomato
                  </h1>
                </Link>
              </div>
            </div>
          </div>


          <div className="confined">
            <div className="instr-w-w">
              <h1 style={{ fontSize: "calc(70px + 3vw)", fontStyle: "italic" }}>Zomato</h1>
              <p className="font-mid">Find the best restaurant near you</p>
            </div>
            <div className="search">

              <div className="search-loc-logo">
                <i className="bi bi-geo-alt-fill"></i>
              </div>


              <select onChange={this.handleCity} id="city">
                <option>----SELECT YOUR CITY-----</option>
                {this.renderCity(this.state.location)}
              </select>
              <select className="restSelect" onChange={this.handleRest} id="place">
                <option>----SELECT YOUR Restaurants-----</option>
                {this.renderRest(this.state.restaurants)}
              </select>

              <button id="search">
                <i className="bi bi-search" style={{ fontSize: "30px", color: "rgb(240, 1, 1)" }}></i>
              </button>
            </div>
          </div>



        </div>
      </>
    );
  }

  // divpi calling on page load
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ location: data });
      });
    window.addEventListener('scroll', this.doSomething)
  }
}

export default withRouter(Search);
