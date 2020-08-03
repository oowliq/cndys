import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { withTheme } from 'theme';
import styled from 'styled-components';
import { ClearButton } from 'components/buttons';
import { SpotifyIcon } from 'components/icons';
import Head from 'next/head';
import { authService } from 'services';
import { useRouter } from 'next/router';

const PageWrapper = styled.div`
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
    position: relative;
    z-index: 40;
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
    const router = useRouter();
    const handleSignIn = (): void => authService.signIn();

    useEffect((): void => {
        if (authService.isLoggedIn || authService.saveToken()) router.replace('/app/manager');
    }, []);

    return !authService.isLoggedIn ? (
        <PageWrapper>
            <Head>
                <title>Authorization</title>
            </Head>
            <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                    <div
                        className="wave waveTop"
                        style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')" }}
                    ></div>
                </div>
                <div className="waveWrapperInner bgMiddle">
                    <div
                        className="wave waveMiddle"
                        style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')" }}
                    ></div>
                </div>
                <div className="waveWrapperInner bgBottom">
                    <div
                        className="wave waveBottom"
                        style={{ backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')" }}
                    ></div>
                </div>
            </div>
            <AuthWrapper>
                <AppName>cndys</AppName>
                <AppDescription>Keep your song library organized</AppDescription>
                <StartButton>
                    <SpotifyIcon size={30} />
                    <StartButtonText onClick={handleSignIn}>Get started now</StartButtonText>
                </StartButton>
            </AuthWrapper>
        </PageWrapper>
    ) : null;
};

export default withTheme(AuthPage);
