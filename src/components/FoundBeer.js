import React from "react";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const FoundBeer = () => {
  const [beer, setBeer] = React.useState({});
  let { id } = useParams();

  React.useEffect(() => {
    axios
      .request({
        method: "GET",
        url: `https://ih-beers-api2.herokuapp.com/beers/${id}`,
      })
      .then((results) => {
        console.log("axios request results", results.data);
        setBeer(results.data);
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

export default FoundBeer;
