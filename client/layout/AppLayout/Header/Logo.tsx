import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const LogoSource = styled.a`
    text-transform: uppercase;
    font-size: 40px;
    font-weight: ${(props) => props.theme.fontWeights.light};
    &:hover {
        cursor: pointer;
    }
`;

const Logo: FC = () => {
    return (
        <Link href="/">
            <LogoSource>cndys</LogoSource>
        </Link>
    );
};

export { Logo };
