import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Post from "./Component/Post";
import Profile from "./Component/Profile";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route to="/" component={Home} />
        <Route to="/profile" component={Post} />
        <Route to="/Post" component={Profile} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
