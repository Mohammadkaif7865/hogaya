import "./App.css";
import Header from "./Component/header";
import Footer from "./Component/footer";
import Display from "./display";
import React, { Component } from "react";
const url = "https://amazoncloneserver.herokuapp.com/products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello my child",
      data: '',
    };
  }
  // changeMessage = () => {
  //   this.setState({ message: "I am app your parent" });
  // };
  render() {
    return (
      <div className="App">
        <Header message={this.state.message} />
        {/* <Display data={this.state.data}></Display> */}
        {/* <h1>This is app component</h1>
        <button onClick={this.changeMessage}>message changed</button> */}
        <Footer message={this.state.message} />
      </div>
    );
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
      this.setState({ data: data });
      });
      console.log(this.state.data);
  }
}

export default App;
