import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Post from "./Component/Post";
import Profile from "./Component/Profile";
import Ghost from "./Component/Ghost";
import KuchBhi from "./Component/KuchBhi";
import Display from "./Component/Display";
import PostDetails from "./Component/PostDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/Display" component={Display} />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/Post" component={Post} />
        <Route path="/Post/:topic" component={PostDetails} />
        <Route path="/kuchbhi" component={KuchBhi} />
        <Route path="/*" component={Ghost} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
