import {
    StyledFooter,
    StyledContainerFooter,
    StyledFooterUL,
    StyledFooterCredits,
    StyledFooterText,
    StyledFooterIcon,

} from "./styles";

const Footer = () =>{
    return (
        <StyledFooter>
            <StyledContainerFooter>
                <nav>
                    <StyledFooterUL>
                        <StyledFooterIcon target="_blank" href="https://www.linkedin.com/in/joseph-silva-bendezu-2882a5211">
                            <i className="fa fa-linkedin"></i>
                        </StyledFooterIcon>
                        <StyledFooterIcon target="_blank" href="https://github.com/JosephSB">
                            <i className="fa fa-github"></i>
                        </StyledFooterIcon>
                        <StyledFooterIcon target="_blank" href="https://josephsb.vercel.app/">
                            <i className="fas fa-globe-americas"></i>
                        </StyledFooterIcon>
                    </StyledFooterUL>
                </nav>
                <StyledFooterCredits>
                    <StyledFooterText>©2022 Joseph Silva Bendezu. All Rights Reserved.</StyledFooterText>
                    <StyledFooterText> Made with ❤️ by JosephSB</StyledFooterText>
                </StyledFooterCredits>
            </StyledContainerFooter>
        </StyledFooter>
    )
}

export default Footer