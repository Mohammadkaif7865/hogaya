import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import "./offcanvas.css";
function Header(props) {
  const [show, setShow] = useState("none");
  let [temp, setTemp] = useState("");
  let [city, setCity] = useState("");
  let [src, setSrc] = useState("");
  navigator.geolocation.getCurrentPosition(position);
  async function position(data) {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${data.coords.latitude}&lon=${data.coords.longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    let response = await fetch(`${url}`);
    let info = await response.json();
    setTemp(info.list[0].temp.day);
    setCity(info.city.name);
    setSrc(
      "http://openweathermap.org/img/w/" + info.list[0].weather[0].icon + ".png"
    );
  }

  const handleClose = () => setShow("none");
  const handleShow = () => setShow("block");
  function logout() {
    sessionStorage.clear();
    props.setName("");
    props.history.push("/");
  }
  return (
    <>
      <div id="mySidenav" className="sidenav" style={{ display: show }}>
        <Link to="/" className="title-my-2" onClick={handleClose}>
          <h1
            style={{
              fontSize: "calc(30px + 1vw)",
              fontStyle: "italic",
            }}
          >
            Zomato
          </h1>
        </Link>
        <span className="closebtn" onClick={handleClose} >&times;</span>
        {
          !props.name ? <Link to="/register" className="n-u-i" onClick={handleClose}>
            <p>sign up</p>
          </Link> : null
        }
        <Link to={props.name ? "/userInfo" : "/login"} className="n-u-i" onClick={handleClose}>
          {
            props.name ? <p>Hi {props.name}</p> : <p>log in</p>
          }
        </Link>
        {
          props.name ? <Link to="/" className="n-u-i" onClick={() => { logout(); handleClose(); }}>
            <p>LogOut</p>
          </Link> : null
        }
        {
          props.name ? <Link to="/viewBooking" className="n-u-i" onClick={handleClose}>
            <p>Orders</p>
          </Link> : null
        }
      </div>
      <header id="header-list">
        <div className="navbar-mine">
          <div className="left-list-nav">
            <h1 id="my-nav-bar" onClick={handleShow}>
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
                  textAlign: "center"
                }}
              >
                Zomato
              </h1>
            </Link>
            <div className="weather">
              <div>
                <img src={src} alt="weather-Img" />
                <span>{temp}&#8451;</span> &nbsp;
              </div>
              <span>{city}</span>
            </div>
          </div>
          <div className="right-list-nav font-mid">
            {
              !props.name ? <Link to="/register" className="n-u-i">
                <p>sign up</p>
              </Link> : null
            }
            <Link to={props.name ? "/userInfo" : "/login"} className="n-u-i">
              {
                props.name ? <p>Hi {props.name}</p> : <p>log in</p>
              }
            </Link>
            {
              props.name ? <Link to="/" className="n-u-i" onClick={logout}>
                <p>LogOut</p>
              </Link> : null
            }
            {
              props.name ? <Link to="/viewBooking" className="n-u-i">
                <p>Orders</p>
              </Link> : null
            }
            <Link to="/">
              <h1
                className="title-my"
                style={{
                  fontSize: "calc(30px + 1vw)",
                  fontStyle: "italic",
                  textAlign: "center",
                  margin: 0,
                  padding: 0,
                }}
              >
                Zomato
              </h1>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
export default withRouter(Header);