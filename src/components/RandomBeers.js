import React from "react";
import Header from "./Header";
import axios from "axios";

const RandomBeers = () => {
  const [beer, setBeer] = React.useState({});
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  React.useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `https://ih-beers-api2.herokuapp.com/beers`,
      })
      .then((results) => {
        let randomId = getRandomInt(results.data.length);
        console.log("Random number", randomId);
        setBeer(results.data[randomId]);
      })
      .catch((err) => {
        console.log("Something went wrong during the axios request", err);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div>
          <h2>{beer.name}</h2>
          <h4>{beer.tagline}</h4>
          <h4>{beer.attenuation_level}</h4>
          <p>{beer.first_brewed}</p>
        </div>
      </div>
      <img src={beer.image_url} />
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeers;
