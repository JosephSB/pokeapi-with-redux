import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdaptDataPokemon } from "../adapters/pokemon.adpter";
import { Pokemon, PokemonState } from "../interfaces/Pokemon";
import { getPokemons, getPokemonsByUrl } from "../services/pokemons.service";

const initialState = {
    data: <Pokemon[]>[],
    loading: false
};

export const fetchPokemonsWithDetails = createAsyncThunk(
    'pokemons/fetchPokemonsWithDetails',
    async (limit: number, { dispatch }) => {
        dispatch(setLoading(true));

        let data = <PokemonState[]>[];
        const resp = await getPokemons(9, limit).catch((error) => console.error(error))
        if (resp && resp.status === 200) data = resp.data.results;

        const pokemonsDetail = await Promise.all(
            data.map(
                (item) => getPokemonsByUrl(item.url).then((resp) => {
                    if (resp.status === 200 && resp.data) {
                        return AdaptDataPokemon(resp.data);
                    }
                }).catch((error) => console.error(error))
            )
        )

        dispatch(addPokemons(pokemonsDetail));
        dispatch(setLoading(false));
    }
);

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        addPokemons: (state, action) => {
            state.data.push(...action.payload);
        },
        setPokemons: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        handleFavorite: (state, action) => {
            const index = state.data.findIndex(item => item.id === action.payload);
            if (index >= 0) {
                const isFavorite = state.data[index].favorite;
                state.data[index].favorite = !isFavorite;
                if(!isFavorite) localStorage.setItem(`pokemon-fav-${state.data[index].id}`, JSON.stringify(!isFavorite))
                else localStorage.removeItem(`pokemon-fav-${state.data[index].id}`)
            }
        },
        /*
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const foundTask = state.find((task) => task.id === id);
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
            }
        },
        deleteTask: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload);
            if (foundTask) {
                state.splice(state.indexOf(foundTask), 1);
            }
        },
        */
    },
});

export const { addPokemons, setPokemons, setLoading,handleFavorite/*, editTask, deleteTask */ } = pokemonSlice.actions;
export default pokemonSlice.reducer;