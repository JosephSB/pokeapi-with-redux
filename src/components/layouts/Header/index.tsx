import InputSearchPokemons from "../../InputSearchPokemons";
import {
    StyledHeader
} from "./styles";

const Header = () => {
    return(
        <StyledHeader>
            <h1>POKEAPI</h1>
            <InputSearchPokemons/>
        </StyledHeader>
    )
}

export default Header