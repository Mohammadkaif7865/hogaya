import "../App.css";
import React, { useEffect, useState } from "react";
const url = "https://amazoncloneserver.herokuapp.com/products";
export default function Display(props) {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="App">
      {products.length === 0 ? (
        <h1>No match found</h1>
      ) : (
        products.map((item, i) => (
          <div className="imgCard" key={i}>
            <img src={item.images.img1.link} alt="img" className="imgInCard" />
            <div className="dis">{item.name}</div>
            <div className="rating">
              Rating: {item.rating}{" "}
              <i className="bi bi-star-fill colorGold"></i>
            </div>
            <div className="price">Price : ₹ {item.cost}</div>
          </div>
        ))
      )}
    </div>
  );
}
