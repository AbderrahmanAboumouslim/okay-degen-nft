import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter';

const MainStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding:0;
}
body{
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}
a{
    color:inherit;
    text-decoration: none;
}

img{
    width: 100%;
    height: 100%;
}
`;

export default MainStyle;
