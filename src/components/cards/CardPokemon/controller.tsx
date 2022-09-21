import { useEffect, useState } from "react";
import CardPokemon from ".";
import { AdaptDataPokemon } from "../../../adapters/pokemon.adpter";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { Pokemon, PokemonState } from "../../../interfaces/Pokemon";
import { getPokemonsByUrl } from "../../../services/pokemons.service";
import SkeletonCardPokemon from "./skeleton";

interface props {
    item: PokemonState
}

const ControllerCardPokemon = ({item}:props) => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const [data, setData] = useState<Pokemon>();

    useEffect(() => {
        callEndpoint(getPokemonsByUrl(item.url))
        .then( (resp)=> {
            if(resp.status === 200 && resp.data){
                setData( AdaptDataPokemon(resp.data));
            }
        } )
        .catch( (error) => console.error(error))
    }, []);

    if(loading){
        return(
            <SkeletonCardPokemon/>
        )
    }

    if(data === undefined){
        return <></>

    }

    return(
        <CardPokemon {...data} />
    )
}

export default ControllerCardPokemon