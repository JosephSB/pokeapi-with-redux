import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../interfaces/Pokemon";

const initialState = {
    data: <Pokemon[]>[],
    loading: false
};


const pokemonSlice = createSlice({
    name: "FavPokemons",
    initialState,
    reducers: {
        setFavPokemons: (state, action) => {
            state.data = action.payload;
        },

    },
});

export const { setFavPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;