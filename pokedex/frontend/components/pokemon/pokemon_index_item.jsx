import React from "react";
import { Link, Route } from "react-router-dom";
import { PokemonDetailContainer } from "./pokemon_detail_container";

export const PokemonIndexItem = props => {
  const id = props.pokemon.id;

  return (
    <li>
      <Link to={"pokemon/" + id}>
        <h1>{props.pokemon.name}</h1>
        <img src={props.pokemon.image_url} />
      </Link>
    </li>
  );
};
