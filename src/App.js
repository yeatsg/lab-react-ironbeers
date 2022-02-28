import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import RandomBeers from "./components/RandomBeers";
import FoundBeer from "./components/FoundBeer";

function App() {
  return (
    <div className="App">
      <div className="routes">
        <Routes>
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:id" element={<FoundBeer />} />
        </Routes>
      </div>
      <div>
        <p>Hey there cowfolks.</p>
        <Link to="/beers">Find Beers</Link>
        <Link to="/random-beer">Random Beer</Link>
        <Link to="/new-beer">Create New Beer</Link>
      </div>
    </div>
  );
}

export default App;
