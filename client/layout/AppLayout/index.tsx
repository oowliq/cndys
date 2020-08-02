import React, { FC } from 'react';
import { Header } from './Header';
import { Container } from 'components/layout';
import styled from 'styled-components';

const LayoutContainer = styled(Container)`
    margin-top: 1em;
`;

const AppLayout: FC = ({ children }) => {
    return (
        <div>
            <Header />
            <LayoutContainer>{children}</LayoutContainer>
        </div>
    );
};

export { AppLayout };
