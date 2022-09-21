import { ADD_POKEMONS, SET_POKEMONS } from "../types/pokemons.types";


const initialState = {
  pokemons: [],
};

interface action {
  type: string
  payload: any
}

export const pokemonsReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
      case ADD_POKEMONS:
        return { ...state, pokemons: [...state.pokemons,...action.payload] };
    default:
      return state;
  }
};