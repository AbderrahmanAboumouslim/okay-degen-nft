import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter';
import '@fontsource/rubik-wet-paint';

const MainStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding:0;
}
body{
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
    line-height: 1.5;
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
