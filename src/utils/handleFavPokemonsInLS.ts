import { Pokemon } from "../interfaces/Pokemon"

export const getFavPokemonInLS = () =>{
    const JSONFavPokemons = localStorage.getItem("data-fav-pokemons")
    const favPokemons: Pokemon[] =  JSONFavPokemons ? JSON.parse(JSONFavPokemons) : [];
    return favPokemons;
}

export const PokemonIsFav = (id: number) =>{
    const JSONFavPokemons = localStorage.getItem("data-fav-pokemons")
    const favPokemons: Pokemon[] =  JSONFavPokemons ? JSON.parse(JSONFavPokemons) : [];
    const index = favPokemons.findIndex(item => item.id === id);
    if (index >= 0) return favPokemons[index].favorite;
    return false
}

export const SaveFavPokemonInLS = (pokemon: Pokemon) =>{
    const JSONFavPokemons = localStorage.getItem("data-fav-pokemons")
    const favPokemons: Pokemon[] =  JSONFavPokemons ? JSON.parse(JSONFavPokemons) : [];
    favPokemons.push(pokemon)
    localStorage.setItem("data-fav-pokemons", JSON.stringify(favPokemons))
}

export const removeFavPokemonInLS = (id: number) => {
    const JSONFavPokemons = localStorage.getItem("data-fav-pokemons");
    const favPokemons: Pokemon[] =  JSONFavPokemons ? JSON.parse(JSONFavPokemons) : [];
    const FilterFavPokemons = favPokemons.filter( (item) => item.id !== id )
    localStorage.setItem("data-fav-pokemons", JSON.stringify(FilterFavPokemons))
}