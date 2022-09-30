import axios from "axios"
import { AllPokemonsEndPoint } from "../interfaces/Endpoints";

const baseURL = "https://pokeapi.co/api/v2/";

export const getPokemons = (limit: number, size: number) => {
    return axios.get<AllPokemonsEndPoint>(`${baseURL}pokemon?limit=${limit}&offset=${size}`)
}

export const getPokemonsByUrl = (url: string) => {
  return axios.get(url)
}

export const getPokemonById = (id: number) => {
    const controller = new AbortController();
    return {
      call: axios.get(`${baseURL}pokemon/${id}`, {signal: controller.signal }),
      controller
    };
}