import React from "react";
import { TypePokemons } from "../../resources/TypePokemons";
import {
    StyledContainer,
    StyledButton,
    StyledSelect,
    StyledInput
} from "./styles";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../store/pokemon.store";
import { setFilter } from "../../slices/SearchPokemon.slice";

const InputSearchPokemons = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const filter = useAppSelector((state) => state.search.filter);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilter({...filter, [e.currentTarget.name]: e.currentTarget.value}))
    }

    const Search = () => {
        let url = "/search"
        let op = "?"
        if(filter.value) {
            url+= op+"q="+filter.value
            op = "&"
        }
        if(filter.type) {
            url+= op+"type="+filter.type
        }
        navigate(url)
    }

    return (
        <StyledContainer>
            <StyledInput onChange={handleChange} name="value" value={filter.value} 
            type="text" placeholder="Buscar Pokemon" autoComplete="off"/>
            <StyledSelect onChange={handleChange} name="type" value={filter.type}>
                <option value="" disabled>
                    Tipo
                </option>
                {
                    TypePokemons.map( type => <option value={type.id}>{type.label}</option> )
                }
            </StyledSelect>
            <StyledButton onClick={Search}>
                <i className="fas fa-search"></i>
            </StyledButton>
        </StyledContainer>
    )
}

export default InputSearchPokemons