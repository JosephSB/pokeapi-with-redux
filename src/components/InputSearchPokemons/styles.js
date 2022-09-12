import styled from "styled-components";
import { BG_COLOR, PRIMARY_COLOR,SECONDARY_COLOR } from "../../styled-components/variables";

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 500px;
    display: grid;
    grid-template-columns: 2fr 0.8fr 0.3fr;
    gap: 0.2rem;
    padding: 0.5rem;
    margin: 0 auto;
`

export const StyledInput = styled.input`
    border: 1px solid ${PRIMARY_COLOR};
    outline: none;
    padding: 0.5rem;
    border-radius: 5px;
`

export const StyledSelect = styled.select`
    border: 1px solid ${PRIMARY_COLOR};
    outline: none;
    padding: 0.5rem;
    border-radius: 5px;
`

export const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    outline: none;
    color: ${BG_COLOR};
    background-color: ${SECONDARY_COLOR};
    cursor: pointer;
    padding: 0.5rem;
`