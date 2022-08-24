import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Post from "./Component/Post";
import Profile from "./Component/Profile";
import Ghost from "./Component/Ghost";
import KuchBhi from "./Component/KuchBhi";
import PostDetails from "./Component/PostDetails";
import Main from "./Component/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// # in rrd 6 switch is replaced with routes
// # Route syntax is changed
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route exact path="Post" element={<Post />} />
            <Route path="Post/:topic" element={<PostDetails />} />
            <Route path="kuchbhi" element={<KuchBhi />} />
            <Route path="/*" element={<Ghost />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
