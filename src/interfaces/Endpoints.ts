export interface AxiosBase {

}


export interface AllPokemonsResp {
    name: string
    url: string
}
export interface AllPokemonsEndPoint {
    results: AllPokemonsResp[]
}

export interface DetailPokemonResp {
    id: number
    name: string
    types: {
        slot: number
        type: {
            name: string
        }
    }[]
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }
}

