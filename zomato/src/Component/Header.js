import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../App.css";
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Link to="/register" className="n-u-i">
              <p>sign up</p>
            </Link>
            <Link to="/login" className="n-u-i">
              <p>log in</p>
            </Link>
            <Link to="/" className="n-u-i">
              <p>Add restaurant</p>
            </Link>
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
