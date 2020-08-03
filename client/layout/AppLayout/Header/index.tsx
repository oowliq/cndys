import React, { FC, useEffect } from 'react';
import { Container } from 'components/layout';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Profile } from './Profile';
import { TopMenu } from './TopMenu';
import { useSelector } from 'store';
import { useDispatch } from 'react-redux';
import { getUser } from 'store/user';

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
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    useEffect((): void => {
        dispatch(getUser.request());
    }, []);

    return (
        <HeaderWrap>
            <HeaderContainer>
                <LeftSide>
                    <TopMenu />
                </LeftSide>
                <Center>
                    <Logo />
                </Center>
                <RightSide>{user && <Profile profile={user} />}</RightSide>
            </HeaderContainer>
        </HeaderWrap>
    );
};

export { Header };
