import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../App.css";
export default function Header(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function logout(){
    sessionStorage.clear();
    props.setName("");
    props.history.push("/");
}
  return (
    <>
      <header id="header-list">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
        <div className="navbar-mine">
          <div className="left-list-nav">
            <h1 id="my-nav-bar">
              <Button variant="light" onClick={handleShow}>
                <h1>
                  <i
                    className="fa fa-bars"
                    aria-hidden="true"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#demo"
                  ></i>
                </h1>
              </Button>
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
              props.name ? <Link to="/userInfo" className="n-u-i">
              <p>LogOut</p>
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
