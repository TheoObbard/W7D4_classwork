import React from "react";

export const PokemonIndexItem = props => {
  console.log(props);
  return (
    <li>
      <h1>{props.pokemon.name}</h1>
      <img src={props.pokemon.image_url} />
    </li>
  );
};
