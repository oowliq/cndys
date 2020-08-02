import React from 'react';
import { NextPage } from 'next';
import { withTheme } from 'theme';
import styled from 'styled-components';
import { ClearButton } from 'components/buttons';
import { SpotifyIcon } from 'components/icons';
import Head from 'next/head';

const PageWrapper = styled.div`
    background-image: url(/images/hero.jpg);
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AuthWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const AppName = styled.h1`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.main};
    font-weight: ${(props) => props.theme.fontWeights.light};
    font-size: 60px;
    letter-spacing: 6px;
`;

const AppDescription = styled.h2`
    color: ${(props) => props.theme.colors.main};
    font-weight: ${(props) => props.theme.fontWeights.light};
    font-size: 14px;
    margin-top: 1em;
    letter-spacing: 2px;
`;

const StartButton = styled(ClearButton)`
    background-color: ${(props) => props.theme.colors.main};
    border-radius: 20em;
    padding: 0.5em 3em;
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-top: 2em;
    transition: all 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.95);
    }
`;

const StartButtonText = styled.span`
    margin-left: 0.5em;
    letter-spacing: 1px;
    font-weight: 300;
`;

const AuthPage: NextPage = () => {
    return (
        <PageWrapper>
            <Head>
                <title>Authorization</title>
            </Head>
            <AuthWrapper>
                <AppName>cndys</AppName>
                <AppDescription>Keep your song library organized</AppDescription>
                <StartButton>
                    <SpotifyIcon size={30} />
                    <StartButtonText>Get started now</StartButtonText>
                </StartButton>
            </AuthWrapper>
        </PageWrapper>
    );
};

export default withTheme(AuthPage);
