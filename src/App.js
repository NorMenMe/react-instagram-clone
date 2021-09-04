import "../src/scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Posts from "./components/Posts";
import { useEffect, useState, useContext } from "react";
import GlobalState from "./components/GlobalState";
import axios from "axios";
import PhotosContext from "./context/initilizeContext";

const UNSPLASH_API_KEY = "wXUfFtJ9NppCBXFFQjEyPOJWvAEzxtxUA9K5Pe3xVUY";

const API = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}&query=nature&orientation=landscape`;

function App() {
  const { photos, setPhotos } = useContext(PhotosContext);

  const readData = () => {
    axios
      .get(API)
      .then(function (response) {
        // console.log(response.data.results[0].urls.regular);
        setPhotos(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    readData();
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
            <div className="link-posts">POSTS</div>
          </Link>
          <Link to="/tagged">
            <div className="link-tagged">TAGGED</div>
          </Link>
        </div>
        <Switch>
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
