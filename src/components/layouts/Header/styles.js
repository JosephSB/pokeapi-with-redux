import styled from "styled-components";
import { PRIMARY_COLOR,TEXT_COLOR_CONTRAST,SECONDARY_COLOR ,TERCIARY_COLOR} from "../../../styled-components/variables";

export const StyledHeader = styled.header`
    width: 100%;
    height: 200px;
    padding: 1rem;
    background-color: ${TERCIARY_COLOR};
    border-bottom: 1px solid ${PRIMARY_COLOR};
`

export const StyledHeaderTop = styled.div`
    width: 100%;
    height: 100px;
    h1{
        margin: 5px 0; 
        color: ${TEXT_COLOR_CONTRAST};
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const StyledHeaderUl = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        padding: 0.5rem 1rem;
        font-size: 18px;
        color: ${TEXT_COLOR_CONTRAST};
        text-decoration: none;
        &:hover{
            border-bottom: 0.15rem solid ${SECONDARY_COLOR};
            color: ${SECONDARY_COLOR};
        }
    }
`