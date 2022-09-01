import React, { useEffect } from "react";
import Search from "./Search";
import QuickSearch from "./QuickSearch";
const Home = (props) => {
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
  return (
    <>
      <Search />
      <QuickSearch />
    </>
  );
};

export default Home;
