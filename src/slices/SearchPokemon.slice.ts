import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../interfaces/Pokemon";

const initialState = {
    data: <Pokemon[]>[],
    loading: false,
    filter: {
        type: "",
        value: ""
    }
};


const SearchPokemonSlice = createSlice({
    name: "SearchPokemons",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setSearchPokemons: (state, action) => {
            state.data = action.payload;
        },

    },
});

export const { setFilter } = SearchPokemonSlice.actions;
export default SearchPokemonSlice.reducer;