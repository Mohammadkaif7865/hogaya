import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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
      show: "none"
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
    console.log(this.state.show);
    return (
      <>
        <div id="mySidenav" className="sidenav" style={{ display: this.state.show }}>
          <span to="/" className="closebtn" onClick={this.handleClose} >&times;</span>
          {
            !this.props.name ? <Link to="/register" className="n-u-i" onClick={this.handleClose}>
              <p>sign up</p>
            </Link> : null
          }
          <Link to={this.props.name ? "/userInfo" : "/login"} className="n-u-i" onClick={this.handleClose}>
            {
              this.props.name ? <p>Hi {this.props.name}</p> : <p>log in</p>
            }
          </Link>
          {
            this.props.name ? <Link to="/" className="n-u-i" onClick={() => { this.logout(); this.handleClose(); }}>
              <p>LogOut</p>
            </Link> : null
          }
          {
            this.props.name ? <Link to="/viewBooking" className="n-u-i" onClick={this.handleClose}>
              <p>Orders / Cart</p>
            </Link> : null
          }
        </div>
        <div id="header-index">
          <div id="header-list-2">
            <div className="navbar-mine">
              <div className="left-list-nav">
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
              <div className="right-list-nav font-mid">
                {
                  !this.props.name ? <Link to="/register" className="n-u-i">
                    <p>sign up</p>
                  </Link> : null
                }
                <Link to={this.props.name ? "/userInfo" : "/login"} className="n-u-i">
                  {
                    this.props.name ? <p>Hi {this.props.name}</p> : <p>log in</p>
                  }
                </Link>
                {
                  this.props.name ? <Link to="/" className="n-u-i" onClick={this.logout}>
                    <p>LogOut</p>
                  </Link> : null
                }
                {
                  this.props.name ? <Link to="/viewBooking" className="n-u-i">
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
              <form action="nav.js">
                <div className="search-loc-logo">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <select name="city" id="city">
                  <option value="Delhi">
                    location
                  </option>
                  <option value="Delhi">
                    Mumbai
                  </option>
                  <option value="Delhi">
                    Kolkata
                  </option>
                  <option value="Delhi">
                    Bangaluru
                  </option>
                </select>
                <input type="text" placeholder="Restaurant name" id="place" autoComplete="off" />
                <button type="submit" id="search">
                  <i className="bi bi-search" style={{ fontSize: "30px", color: "rgb(240, 1, 1)" }}></i>
                </button>
              </form>
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
  }
}

export default withRouter(Search);
