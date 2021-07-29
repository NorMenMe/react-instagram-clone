import "../src/scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="Navbar" />
      </BrowserRouter>
    </div>
  );
}

export default App;
