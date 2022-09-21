import { useState } from "react";
import MainWrapper from "../../components/wrappers/MainWrapper"
import { getPokemons } from "../../services/pokemons.service";
import { useDispatch, useSelector } from 'react-redux';
import { PokemonState } from "../../interfaces/Pokemon";
import { addPokemons, setPokemons } from "../../redux/actions/pokemons.actions";
import { StyledContainerHome } from "./styles";
import ControllerCardPokemon from "../../components/cards/CardPokemon/controller";
import { InView } from 'react-intersection-observer';

const Home = () => {
    const pokemons = useSelector(({pokemons}: {pokemons:PokemonState[]}) => pokemons);
    const dispatch = useDispatch();
    const [rangePokemons, setRangePokemons] = useState({limit: 0, size: 9});

    const searchMorePokemons = (limit: number) => {
        getPokemons(9, limit)
            .then( (resp)=> {
                if(resp.status === 200 && resp.data){
                    dispatch(addPokemons(resp.data.results));
                }
            } )
            .catch( (error) => console.error(error))
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
                    pokemons.map( (item,index) => <ControllerCardPokemon key={index} item={item} />)
                }
                <InView as="div" onChange={(inView) => handleIntersectionObserver(inView)}/>
            </StyledContainerHome>
        </MainWrapper>
    )
}

export default Home