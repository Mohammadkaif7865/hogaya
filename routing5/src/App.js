import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Post from "./Component/Post";
import Profile from "./Component/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/Post" component={Post} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
