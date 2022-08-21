import "./App.css";
import Header from "./Component/header";
import Footer from "./Component/footer";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello my child",
    };
  }
  changeMessage() {
    this.setState({ message: "I am app your parent" });
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.message} />
        <h1>This is app component</h1>
        <button onClick={()=>this.changeMessage()}>message changed</button>
        <Footer message={this.state.message} />
      </div>
    );
  }
}

export default App;
