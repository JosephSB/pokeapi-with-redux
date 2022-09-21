import { PokemonType } from "../types/PokemonTypes"

export interface Pokemon {
    id: number
    urlImg: string
    name: string
    types: string[]
}

export interface PokemonState {
    url: string
    name: string
}




