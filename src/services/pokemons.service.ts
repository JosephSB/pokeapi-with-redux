import axios from "axios"
import { AllPokemonsEndPoint } from "../interfaces/Endpoints";

const baseURL = "https://pokeapi.co/api/v2/";

export const getPokemons = (limit: number, size: number) => {
    return axios.get<AllPokemonsEndPoint>(`${baseURL}pokemon?limit=${limit}&offset=${size}`)
    /*
    const controller = new AbortController();
    return {
      call: axios.get<AllPokemonsEndPoint>(`${baseURL}pokemon?limit=${limit}&offset=${size}`, {signal: controller.signal }),
      controller
    };*/
}

export const getPokemonsByUrl = (url: string) => {
    const controller = new AbortController();
    return {
      call: axios.get(url, {signal: controller.signal }),
      controller
    };
}

export const getPokemonById = (id: number) => {
    const controller = new AbortController();
    return {
      call: axios.get(`${baseURL}pokemon/${id}`, {signal: controller.signal }),
      controller
    };
}