import React from "react";
import Header from "./Header";

const NewBeer = () => {
  return (
    <div>
      <Header />
      <form
        method="POST"
        action="https://ih-beers-api2.herokuapp.com/beers/new"
      >
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Tagline
          <input type="text" name="tagline" />
        </label>
        <label>
          Description
          <input type="text" name="description" />
        </label>
        <label>
          First Brewed
          <input type="text" name="first_brewed" />
        </label>
        <label>
          Brewer's Tips
          <input type="text" name="brewers_tips" />
        </label>
        <label>
          Attenuation Level
          <input type="number" name="attenuation_level" />
        </label>
        <label>
          Contributed By
          <input type="text" name="contributed_by" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBeer;
