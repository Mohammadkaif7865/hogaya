import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export default function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <footer>
        <Link to="/">
          <div className="foot-m">
            <h3>Back to top</h3>
          </div>
        </Link>
        <Link to="/">
          <div
            className="float-b-t-t"
            style={{ display: visible ? "inline" : "none" }}
          >
            <h3>
              <i className="bi bi-chevron-up" onClick={scrollToTop}></i>
            </h3>
          </div>
        </Link>
        <div className="we-deliver">
          <h1>Cities We Deliver To</h1>
          <Link to="/">
            <div className="cities-m">Delhi</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Mumbai</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Kolkata</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Bengaluru</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Lucknow</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Indore</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Goa</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Trivandrum</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Vijayawada</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Raipur</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Gorakhpur</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Madurai</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Jalandhar</div>
          </Link>
          <Link to="/">
            <div className="cities-m">jaipur</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Manipur</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Rishikesh</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Patna</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Dispur</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Gowahati</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Siliguri</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Haridwar</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Dehradun</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Shimla</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Gwaliar</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Prayagraj</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Mysore</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Hyderabad</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Jodhpur</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Mussoorie</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Agra</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Rajkot</div>
          </Link>
          <Link to="/">
            <div className="cities-m">Varanasi</div>
          </Link>
          <Link to="/">
            <div
              className="cities-m"
              style={{ borderBottom: "2px solid black" }}
            >
              <b>See more</b>
            </div>
          </Link>
        </div>
        <h1
          style={{
            fontSize: "calc(30px + 1vw)",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Zomato
        </h1>
        <div className="foot-wrap">
          <div className="foot-p-c">
            <p style={{ fontSize: "calc(8px + 0.8vw)" }}>
              <b>Get to Know Us</b>
            </p>
            <p>
              <Link to="/">About Us</Link>
            </p>
            <p>
              <Link to="/">Careers</Link>
            </p>
            <p>
              <Link to="/">Press Releases</Link>
            </p>
            <p>
              <Link to="/">Zomato Cares</Link>
            </p>
            <p>
              <Link to="/">About Us</Link>
            </p>
            <p>
              <Link to="/"> Blog</Link>
            </p>
            <p>
              <Link to="/"> Report fraud</Link>
            </p>
          </div>
          <div className="foot-p-c">
            <p style={{ fontSize: "calc(8px + 0.8vw)" }}>
              <b>Make Money with Us</b>
            </p>
            <p>
              <Link to="/">Sell on Zomato</Link>
            </p>
            <p>
              <Link to="/">Zomato Global Selling</Link>
            </p>
            <p>
              <Link to="/">Become an Affiliate</Link>
            </p>
            <p>
              <Link to="/">COVID-19 and Zomato</Link>
            </p>
            <p>
              <Link to="/">100% Purchase Protection</Link>
            </p>
            <p>
              <Link to="/">Help</Link>
            </p>
            <p>
              <Link to="/">Download the app</Link>
            </p>
          </div>
          <div className="foot-p-c dark-logo">
            <p style={{ fontSize: "calc(8px + 0.8vw)" }}>
              <b>Connect with us</b>
            </p>
            <p style={{ fontSize: "calc(18px + 0.8vw)" }}>
              <Link to="/">
                <i className="bi bi-meta"></i>
              </Link>
              <Link to="/">
                {" "}
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="/">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="/">
                {" "}
                <i className="bi bi-linkedin"></i>
              </Link>
              <Link to="/">
                {" "}
                <i className="bi bi-youtube"></i>
              </Link>
            </p>
            <Link to="/">
              <img src="https://i.ibb.co/Z2H8G6C/gp.webp" alt="img" />
            </Link>
            <Link to="/">
              <img src="https://i.ibb.co/JcbFKqF/pls.webp" alt="img" />
            </Link>
          </div>
        </div>
        <div className="last-foot-m">
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2022 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
