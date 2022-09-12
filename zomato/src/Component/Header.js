import React, { useState} from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";
import "./offcanvas.css";
function Header(props) {
  const [show, setShow] = useState("none");

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
        <span to="/" className="closebtn" onClick={handleClose} >&times;</span>
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
                  textAlign: "center",
                }}
              >
                Zomato
              </h1>
            </Link>
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
      </header>
    </>
  );
}
export default withRouter(Header);