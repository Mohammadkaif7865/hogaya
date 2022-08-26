import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch></Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
