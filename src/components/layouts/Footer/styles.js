import styled from "styled-components";
import { BG_COLOR, TEXT_COLOR,PRIMARY_COLOR } from "../../../styled-components/variables";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: ${BG_COLOR};
    padding: 1rem 0;
    margin-top: auto;
    border-top: 1px solid ${PRIMARY_COLOR};
`
export const StyledContainerFooter = styled.footer`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
`
export const StyledFooterUL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`
export const StyledFooterCredits = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const StyledFooterIcon = styled.a`
    margin: 0 0.5rem;
    color: ${TEXT_COLOR};
`

export const StyledFooterText = styled.p`
    color: ${TEXT_COLOR};
    font-size: 10px;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;;
`