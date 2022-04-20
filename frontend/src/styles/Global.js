import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
div  {
    color: green;
}

* {
    margin: 0;
    paddding: 0;
}
body{
    font-family: 'oswald', Sans-Serif;
    background-color: black;
}
`;


export default Global;
