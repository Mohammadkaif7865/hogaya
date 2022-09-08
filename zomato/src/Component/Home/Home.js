import React, { useEffect } from "react";
import Search from "./Search";
import "./Home.css";
import QuickSearch from "./QuickSearch";
import "../../App.css";
import { useState } from "react";
const Home = (props) => {
  let [name, setName] = useState(props.name);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  console.log(name);
  return (
    <>
      <div className="handleHome">
        <Search name={props.name}  setName={(data)=> setName(data)}/>
        <QuickSearch />
      </div>
    </>
  );
};

export default Home;
