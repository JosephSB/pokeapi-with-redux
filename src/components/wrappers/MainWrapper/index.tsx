import { Fragment } from "react"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import {StyledWrapper} from "./styles"

interface props {
    children: JSX.Element | JSX.Element[]
}

const MainWrapper = ({children}:props) => {
    return(
        <Fragment>
            <Header/>
            <StyledWrapper>
                {children}
            </StyledWrapper>
            <Footer/>
        </Fragment>
    )
}

export default MainWrapper