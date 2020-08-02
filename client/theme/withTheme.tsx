import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyles';

const withTheme = <P extends object>(Component: React.ComponentType<P>) =>
    class WithTheme extends React.Component<P> {
        render() {
            const { ...props } = this.props;
            return (
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Component {...(props as P)} />
                </ThemeProvider>
            );
        }
    };

export { withTheme };
