export interface StyledTheme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        main: string;
    };
    fontWeights: {
        bold: number;
        medium: number;
        regular: number;
        light: number;
    };
    fontColors: {
        main: string;
    };
    container: {
        width: string;
    };
}

declare module 'styled-components' {
    export interface DefaultTheme extends StyledTheme {
        _null?: null;
    }
}
