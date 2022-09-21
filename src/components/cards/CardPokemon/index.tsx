import { Pokemon } from "../../../interfaces/Pokemon"
import { PokemonTypeColors } from "../../../resources/ColorPokemons"
import FavButton from "../../buttons/FavButton"
import {StyledCard, StyledCardBody, StyledCardCircle, StyledCardFooter, 
    StyledCardFooterTypes, StyledCardImg,StyledCardFooterType} from "./styles"

const CardPokemon = ({name,urlImg, id, types}:Pokemon) => {

    return(
        <StyledCard>
            <StyledCardBody color={PokemonTypeColors[types[0]].medium} >
                <FavButton/>
                <p># {id}</p>
                <StyledCardCircle color={PokemonTypeColors[types[0]].light}/>
                <StyledCardImg src={urlImg} alt={name} />
            </StyledCardBody>
            <StyledCardFooter>
                <p> {name} </p>
                <StyledCardFooterTypes>
                    {
                        types.map( (type,index) => <StyledCardFooterType key={index} color={PokemonTypeColors[type].medium}> {type} </StyledCardFooterType>  )
                    }
                </StyledCardFooterTypes>
            </StyledCardFooter>
        </StyledCard>
    )
}

export default CardPokemon