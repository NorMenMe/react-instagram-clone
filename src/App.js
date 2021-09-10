import "../src/scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Tagged from "./components/Tagged";
import { useEffect, useState, useContext } from "react";
import GlobalState from "./components/GlobalState";
import axios from "axios";
import PhotosContext from "./context/initilizeContext";
import ToggleButtonPosts from "./components/ToggleButtonPosts.js";
import ToggleButtonTaggs from "./components/ToggleButtonTaggs";

const UNSPLASH_API_KEY = "wXUfFtJ9NppCBXFFQjEyPOJWvAEzxtxUA9K5Pe3xVUY";

const API_nature = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}&query=nature&orientation=landscape`;

const API_music = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}&query=music&orientation=landscape`;

function App() {
  const { photos, setPhotos, musicPics, setMusicPics, color, setColor } =
    useContext(PhotosContext);

  const readData = () => {
    axios
      .get(API_nature)
      .then(function (response) {
        setPhotos(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(API_music)
      .then(function (response) {
        setMusicPics(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    readData();
    // <ToggleButtonPosts />;
    // setColor(!color);
  }, []);

  console.log(photos);
  return (
    <BrowserRouter>
      <Navbar className="Navbar" />
      <div className="master-wrapper">
        <Header></Header>
        <hr />
        <div className="wrapper-posts-tagged-link">
          <Link to="/posts">
            <ToggleButtonPosts />
          </Link>
          <Link to="/tagged">
            <ToggleButtonTaggs />
          </Link>
        </div>
        <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/tagged" component={Tagged} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
