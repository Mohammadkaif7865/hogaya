import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Listing from "./Component/Listing";
import Detail from "./Component/Detail";
import Ghost from "./Component/Ghost";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Listing" component={Listing} />
        <Route  path="/Detail" component={Detail} />
        <Route  path="/*" component={Ghost} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
