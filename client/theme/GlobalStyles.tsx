import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: Roboto;
        background-color: ${(props) => props.theme.colors.background}; 
        color: ${(props) => props.theme.fontColors.main};
    }`;

export { GlobalStyle };
