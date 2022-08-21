// import React, { useState } from "react";
// function Header(props) {
//   let [val, setVal] = useState("");
//   function handleChange(event) {
//     setVal(event.target.value);
//   }
//   return (
//     <div
//       style={{ backgroundColor: "green", color: "white", textAlign: "center" }}
//     >
//       <h1>This is Header component {props.message}</h1>
//       <input type="text" onChange={(e) => handleChange(e)} />
//       <h3>{val}</h3>
//     </div>
//   );
// }

import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      message: "here will be the text come",
    };
  }
  handleChange = (event) => {
    this.setState({
      val: event.target.value ? event.target.value : this.state.message,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>This is Header component {this.props.message}</h1>
        <input type="text" onChange={(e) => this.handleChange(e)} />
        <h3>{this.state.val}</h3>
      </div>
    );
  }
}
export default Header;
