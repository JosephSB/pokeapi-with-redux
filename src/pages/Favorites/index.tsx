import { useEffect } from "react";
import CardPokemon from "../../components/cards/CardPokemon";
import LoaderCards from "../../components/loaders/LoaderCards";
import MainWrapper from "../../components/wrappers/MainWrapper"
import { setFavPokemons } from "../../slices/FavPokemons.slice";
import { useAppDispatch, useAppSelector } from "../../store/pokemon.store";
import { getFavPokemonInLS } from "../../utils/handleFavPokemonsInLS";
import {StyledContainerFavs} from "./styles"

const SectionFavorites = () => {
    const dispatch = useAppDispatch();
    const FavPokemons = useAppSelector((state) => state.favorites.data);
    const loading = useAppSelector((state) => state.favorites.loading);


    useEffect(() => {
        dispatch(setFavPokemons(getFavPokemonInLS()))
    }, []);


    return(
        <MainWrapper>
            <StyledContainerFavs>
                {FavPokemons.length === 0 && <p>No tienes pokemones favoritos</p>}
                {
                    FavPokemons.map( (item,index) => <CardPokemon key={index} {...item} />)
                }
                {loading && <LoaderCards long={9} /> }
            </StyledContainerFavs>
        </MainWrapper>
    )
}

export default SectionFavorites