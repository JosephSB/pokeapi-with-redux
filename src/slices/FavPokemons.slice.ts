import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../interfaces/Pokemon";

const initialState = {
    data: <Pokemon[]>[],
    loading: false
};


const FavPokemonSlice = createSlice({
    name: "FavPokemons",
    initialState,
    reducers: {
        setFavPokemons: (state, action) => {
            state.data = action.payload;
        },

    },
});

export const { setFavPokemons } = FavPokemonSlice.actions;
export default FavPokemonSlice.reducer;