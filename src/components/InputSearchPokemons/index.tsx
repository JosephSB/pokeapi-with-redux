import {
    StyledContainer,
    StyledButton,
    StyledSelect,
    StyledInput
} from "./styles";

const InputSearchPokemons = () => {
    return (
        <StyledContainer>
            <StyledInput type="text" placeholder="Buscar Pokemon"/>
            <StyledSelect name="" id="" value="">
                <option value="" disabled>
                    Tipo
                </option>
                <option value="2">Agua</option>
            </StyledSelect>
            <StyledButton>
                <i className="fas fa-search"></i>
            </StyledButton>
        </StyledContainer>
    )
}

export default InputSearchPokemons