import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: Roboto;
        background-color: #f5f8fa; 
        color: ${(props) => props.theme.fontColors.main};
    }`;

export { GlobalStyle };
