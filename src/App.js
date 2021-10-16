import "../src/scss/main.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import WrapperCards from "./components/WrapperCards";

function App() {
  return (
    <>
      <Navbar className="Navbar" />
      <main className="master-wrapper">
        <Header />
        <WrapperCards />
      </main>
    </>
  );
}

export default App;
