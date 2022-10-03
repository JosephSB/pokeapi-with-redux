import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from '../slices/pokemon.slice'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import FavPokemonsSlice from '../slices/FavPokemons.slice'
import SearchPokemonSlice from '../slices/SearchPokemon.slice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice,
    favorites: FavPokemonsSlice,
    search: SearchPokemonSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector