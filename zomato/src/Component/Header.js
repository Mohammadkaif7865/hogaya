import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function Header() {
  return (
    <>
      <header id="header-list">
        <div
          className="offcanvas offcanvas-start"
          id="demo"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h1 className="offcanvas-title">Zomato</h1>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body font-mid">
            <Link to="/">
              <p>log in</p>
            </Link>
            <Link to="/">
              <p>Sign up</p>
            </Link>
            <Link to="/">
              <p>Add restaurant</p>
            </Link>
          </div>
        </div>
        <div className="navbar-mine">
          <div className="left-list-nav">
            <Link to="/">
              <h1 id="my-nav-bar">
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#demo"
                ></i>
              </h1>
            </Link>
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
            <Link to="/" className="n-u-i">
              <p>sign up</p>
            </Link>
            <Link to="/" className="n-u-i">
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
