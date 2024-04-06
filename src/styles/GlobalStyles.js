/* eslint-disable no-unused-vars */
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
html, body, #root, *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: .875rem;
    font-family: 'Roboto', sans-serif; // Áp dụng font Roboto
}

html, body{
    height: 100%;
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.2;
}

body{
    background-color: #f5f5f5;
    display: block;
}


`

export default GlobalStyles
