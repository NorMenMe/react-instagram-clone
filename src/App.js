import "../src/scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ToggleCards from "./components/ToggleCards";
// import Tagged from "./components/Tagged";
import { useContext } from "react";
// import GlobalState from "./components/GlobalState";
// import axios from "axios";
import PhotosContext from "./context/initilizeContext";
import ToggleButtonPosts from "./components/ToggleButtonPosts.js";
import ToggleButtonTaggs from "./components/ToggleButtonTaggs";

function App() {
  const { photos, setPhotos, musicPics, setMusicPics, color, setColor } =
    useContext(PhotosContext);

  return (
    <>
      <Navbar className="Navbar" />
      <div className="master-wrapper">
        <Header />
        <div className="wrapper-posts-tagged-link">
          <Link to="/posts">
            <ToggleButtonPosts />
          </Link>
          <Link to="/tagged">
            <ToggleButtonTaggs />
          </Link>
        </div>
        <Switch>
          <Route exact path="/posts">
            <ToggleCards value="nature" />
          </Route>
          <Route exact path="/posts">
            <ToggleCards value="music" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
