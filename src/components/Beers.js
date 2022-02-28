import React from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

const Beers = () => {
  const [beerList, setBeerList] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([beerList]);

  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "https://ih-beers-api2.herokuapp.com/beers",
      })
      .then((results) => {
        setBeerList(results.data);
      })
      .catch((err) => {
        console.log("Something went wrong during the axios request", err);
      });
  }, []);

  React.useEffect(() => {
    let searchResults = beerList.filter((singleBeer) => {
      return singleBeer.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredList(searchResults);
  }, [searchText, beerList]);

  return beerList ? (
    <div>
      <Header />
      <input
        type="text"
        placeholder="search beer names"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        {filteredList ? (
          filteredList.map((beer) => {
            return (
              <div>
                <img src={beer.image_url} />
                <div>
                  <h2>{beer.name}</h2>
                  <h4>{beer.tagline}</h4>
                  <p>Contributed by: {beer.contributed_by}</p>
                  <Link to={`/beers/${beer._id}`}> View Details</Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </div>
  ) : (
    <h1>Loading ....</h1>
  );
};

export default Beers;
