import React, { FC } from 'react';
import { Container } from 'components/layout';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Profile } from './Profile';
import { TopMenu } from './TopMenu';

const HeaderWrap = styled.div`
    background-color: ${(props) => props.theme.colors.main};
    position: relative;
    z-index: 10;
`;

const HeaderContainer = styled(Container)`
    display: flex;
    background-color: ${(props) => props.theme.colors.main};
    align-items: center;
    justify-content: space-between;
    padding: 1em;
`;

const LeftSide = styled.div`
    width: 300px;
`;

const RightSide = styled.div`
    width: 300px;
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Header: FC = () => {
    return (
        <HeaderWrap>
            <HeaderContainer>
                <LeftSide>
                    <TopMenu />
                </LeftSide>
                <Center>
                    <Logo />
                </Center>
                <RightSide>
                    <Profile />
                </RightSide>
            </HeaderContainer>
        </HeaderWrap>
    );
};

export { Header };
