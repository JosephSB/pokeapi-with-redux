import { createGlobalStyle } from "styled-components";
import { BG_COLOR } from "./variables";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${BG_COLOR};
        height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        width: 100%;
        position: relative;
    }
`;