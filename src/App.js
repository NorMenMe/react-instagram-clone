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
import ToggleButtonTagged from "./components/ToggleButtonTagged";
import WrapperCards from "./components/WrapperCards";

function App() {
  const { photos, setPhotos, musicPics, setMusicPics, color, setColor } =
    useContext(PhotosContext);

  console.log("app is rerender");
  return (
    <>
      <Navbar className="Navbar" />
      <div className="master-wrapper">
        <Header />
        <WrapperCards />
      </div>
    </>
  );
}

export default App;
