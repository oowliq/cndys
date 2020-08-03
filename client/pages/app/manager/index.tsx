import React from 'react';
import { NextPage } from 'next';
import { withLayout, AppLayout } from 'layout';
import { withTheme } from 'theme';
import Head from 'next/head';
import { PlaylistsViewer } from 'components/playlists';
import styled from 'styled-components';
import { SongsViewer } from 'components/songs';

const ManagerContainer = styled.div`
    display: flex;
`;

const SongsContainer = styled.div`
    width: 100%;
    margin-left: 1em;
`;

const ManagerPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Manager</title>
            </Head>
            <ManagerContainer>
                <PlaylistsViewer />
                <SongsContainer>
                    <SongsViewer />
                </SongsContainer>
            </ManagerContainer>
        </div>
    );
};

export default withTheme(withLayout(ManagerPage, AppLayout));
