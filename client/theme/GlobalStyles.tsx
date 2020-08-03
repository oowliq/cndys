import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *,*::before,*::after {
        box-sizing: border-box;
    }
    body {
        font-family: Roboto;
        background-color: ${(props) => props.theme.colors.background}; 
        color: ${(props) => props.theme.fontColors.main};
    }`;

export { GlobalStyle };
