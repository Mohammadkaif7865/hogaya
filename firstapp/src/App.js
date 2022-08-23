import "./App.css";
import Header from "./Component/header";
import Footer from "./Component/footer";
import Display from "./Component/display";
import React, { Component } from "react";
const url = "https://amazoncloneserver.herokuapp.com/products";
// function App() {
//   let [data, setData] = useState([]);
//   let [message, setMessage] = useState("this is my message");
//   useEffect(() => {
//     fetch(url, { method: "GET" })
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
//   return (
//     <div className="App">
//       <Header message={message} />
//       <Display data={data} />
//       {/* <h1>This is app component</h1>
//       <button onClick={this.changeMessage}>message changed</button> */}
//       <Footer message={message} />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello my child",
      products: [],
      filteredData: [],
    };
  }
  // changeMessage = () => {
  //   this.setState({ message: "I am app your parent" });
  // };
  filterText(data) {
    let output = this.state.products.filter((item) => {
      return item.name.toLowerCase().indexOf(data.toLowerCase()) > -1||item.category.toLowerCase().indexOf(data.toLowerCase()) > -1|| item.sub_category.toLowerCase().indexOf(data.toLowerCase()) > -1;
    });

    this.setState({ filteredData: output });
  }
  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data, filteredData: data });
      });
  }
  render() {
    return (
      <div className="App">
        <Header
          message={this.state.message}
          filterText={(data) => this.filterText(data)}
        />
        <Display data={this.state.filteredData} />
        {/* <h1>This is app component</h1>
        <button onClick={this.changeMessage}>message changed</button> */}
        <Footer message={this.state.message} />
      </div>
    );
  }
}

export default App;
