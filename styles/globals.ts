import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: SFU Futura_07;
        src: url("/fonts/SFUFutura_07.woff2") format("woff2");
        font-weight: bold;
        font-display: optional;
    }

    @font-face {
        font-family: SFU Futura_03;
        src: url("/fonts/SFUFutura_03.woff2") format("woff2");
        font-weight: normal;
        font-display: optional;
    }
    
    :root {
        --color-red: #DB202D;
        --color-green: #0AB396;
        --color-blue: #1F376B;
        --color-yellow: #ECA821;
        --color-text: #414042;
        --color-neutral: #DCDCDC;
        --color-white: white;
        --color-black: black;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
    }

    body, html {
        overflow: hidden;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
