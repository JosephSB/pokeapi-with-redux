import { useState } from "react";
import MainWrapper from "../../components/wrappers/MainWrapper"
import { useAppSelector, useAppDispatch } from '../../store/pokemon.store'
import { StyledContainerHome } from "./styles";
import { InView } from 'react-intersection-observer';
import { fetchPokemonsWithDetails } from "../../slices/pokemon.slice";
import CardPokemon from "../../components/cards/CardPokemon";
import LoaderCards from "../../components/loaders/LoaderCards";

const Home = () => {
    const pokemons = useAppSelector((state) => state.pokemons.data);
    const loading = useAppSelector((state) => state.pokemons.loading);
    const dispatch = useAppDispatch();
    const [rangePokemons, setRangePokemons] = useState({limit: 0, size: 9});

    const searchMorePokemons = async (limit: number) => {
        dispatch(fetchPokemonsWithDetails(limit));
    }

    const handleIntersectionObserver = (inView: boolean) =>{
        if(!inView) return;
        let newLimit = rangePokemons.limit;
        searchMorePokemons(newLimit)
        newLimit = rangePokemons.limit + rangePokemons.size;
        setRangePokemons({...rangePokemons, limit: newLimit})
    }

    return(
        <MainWrapper>
            <StyledContainerHome>
                {
                    pokemons.map( (item,index) => <CardPokemon key={index} {...item} />)
                }
                {loading && <LoaderCards long={9} /> }
                <InView as="div" onChange={(inView) => handleIntersectionObserver(inView)}/>
            </StyledContainerHome>
        </MainWrapper>
    )
}

export default Home