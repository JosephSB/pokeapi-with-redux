import { Pokemon, PokemonState } from "../../interfaces/Pokemon";
import { ADD_POKEMONS, SET_POKEMONS } from "../types/pokemons.types";

export const setPokemons = (payload: PokemonState[]) => ({
  type: SET_POKEMONS,
  payload,
});

export const addPokemons = (payload: PokemonState[]) => ({
  type: ADD_POKEMONS,
  payload,
});
