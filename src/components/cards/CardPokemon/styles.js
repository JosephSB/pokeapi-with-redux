import styled from "styled-components";
import { Load } from "../../../styled-components/animates"

export const StyledCard = styled.div`
    width: 240px;
    border-radius: 10px;
    background-color: white;
    display: grid;
    grid-template-rows: 70% 30%;
    box-shadow: 0 4px 13px #e9e9f9;
    cursor: pointer;
    min-height: 240px;
    transition: transform 0.2s, background-color 0.3s;
    &:hover{
        transform: scale(1.06);
    }
`

export const StyledCardBody = styled.div`
    width: 100%;
    background-color: ${ props  =>   props.color ? props.color : "#78C850" };
    position: relative;
    display: flex;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    justify-content: center;
    align-items: center;
    position: relative;
    p{
        margin: 0;
        padding-left: 0.5rem;
        text-align: start;
        font-size: 2rem;
        position: absolute;
        color: rgba(0, 0, 0, 0.43);
        font-weight: bold;
        top: 0;
        left: 0;
    }
    span{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 20;
    }
`
export const StyledCardCircle = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    position: absolute;
    background-color: ${ props  =>   props.color ? props.color : "#78C850" };
`
export const StyledCardImg = styled.img`
    width: 220px;
    height: 220px;
    padding: 1rem;
    z-index: 10;
`


export const StyledCardFooter= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
        text-transform: capitalize;
        font-weight: 700;
        font-size: 24px;
        margin: 5px 0;
    }
`

export const StyledCardFooterTypes= styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const StyledCardFooterType= styled.div`
    text-transform: uppercase;
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${ props  =>   props.color ? props.color : "black" };
`


export const StyledCardBodySkeleton = styled(StyledCardBody)`
    background-color: #ccc;
    ${Load()}
`

export const StyledCardFooterSkeleton = styled(StyledCardFooter)`
    p{
        width: 100px;
        height: 20px;
        margin: 10px auto;
        ${Load()}
    }
`