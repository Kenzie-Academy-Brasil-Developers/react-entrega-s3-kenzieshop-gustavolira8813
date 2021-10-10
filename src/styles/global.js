import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body, ol, li,ul, p{
        box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }

`;

export default GlobalStyles;
