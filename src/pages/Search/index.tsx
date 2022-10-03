import { useEffect } from "react";
import CardPokemon from "../../components/cards/CardPokemon";
import MainWrapper from "../../components/wrappers/MainWrapper"
import { useAppDispatch, useAppSelector } from "../../store/pokemon.store";
import { StyledContainerSearchs } from "./styles"

const SectionSearch = () => {
    const dispatch = useAppDispatch();
    const Results = useAppSelector((state) => state.search.data);

    useEffect(() => {
        
    }, []);

    return (
        <MainWrapper>
            <StyledContainerSearchs>
                <div>search</div>
                {
                    Results.map((item, index) => <CardPokemon key={index} {...item} />)
                }
            </StyledContainerSearchs>
        </MainWrapper>
    )
}

export default SectionSearch