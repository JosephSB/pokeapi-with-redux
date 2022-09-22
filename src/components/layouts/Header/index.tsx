import InputSearchPokemons from "../../InputSearchPokemons";
import {
    StyledHeader, StyledHeaderTop,StyledHeaderUl
} from "./styles";

const Header = () => {
    return(
        <StyledHeader>
            <StyledHeaderTop>
                <h1><i className="fab fa-react"></i> POKEDUX</h1>
                <nav>
                    <StyledHeaderUl>
                        <li>
                            <a href=""><i className="fas fa-heart"></i>&nbsp;favs</a>
                        </li>
                        <li>
                            <a href=""><i className="fas fa-gamepad"></i>&nbsp;play</a>
                        </li>
                        <li>
                            <a href=""><i className="fab fa-github"></i></a>
                        </li>
                    </StyledHeaderUl>
                </nav>
            </StyledHeaderTop>
            <InputSearchPokemons/>
        </StyledHeader>
    )
}

export default Header