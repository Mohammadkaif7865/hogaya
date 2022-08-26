import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
