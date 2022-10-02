import { AllPokemonsResp, DetailPokemonResp } from "../interfaces/Endpoints";

export const AdaptPokemonToState = (data: AllPokemonsResp ) => {
    return {
        id: parseInt(data.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replaceAll("/", "")),
        pending: true, 
        url: data.url, 
        data: undefined
    }
}

export const AdaptDataPokemon = (data: DetailPokemonResp ) => {
    let isFav = localStorage.getItem(`pokemon-fav-${data.id}`);
    return {
        id: data.id,
        urlImg: data.sprites.other["official-artwork"].front_default,
        name: data.name,
        types: data.types.map( (item)=> {return item.type.name} ),
        favorite: isFav ? JSON.parse(isFav) : false
    }
}