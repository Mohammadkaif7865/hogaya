import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home/Home";
import Listing from "./Component/Listing/Listing";
import Detail from "./Component/Details/Detail";
import Ghost from "./Component/Ghost";
import PlaceOrder from "./Component/Booking/placeOrder";
import ViewOrder from "./Component/Booking/viewOrder";
import Login from "./Component/login/login";
import Register from "./Component/login/Register";
import UserInfo from "./Component/login/userInfo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <Header name={name} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/listing/:id" component={Listing} />
        <Route path="/details" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/userInfo" > <UserInfo setName={(data) => setName(data)} /></Route>
        <Route path="/placeOrder/:restName" component={PlaceOrder} />
        <Route path="/viewBooking" component={ViewOrder} />
        <Route path="/*" component={Ghost} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
