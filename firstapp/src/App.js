import "./App.css";
import Header from "./Component/header";
import Footer from "./Component/footer";
import React, { useState } from "react";

function App() {
  let [num,setNum] = useState();
  return (
    <div className="App">
      <Header num={num}></Header>
      <h1>This is app component</h1>
      <Footer num={num}></Footer>
    </div>
  );
}

export default App;
