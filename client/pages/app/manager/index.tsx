import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { withLayout, AppLayout } from 'layout';
import { withTheme } from 'theme';
import Head from 'next/head';
import { PlaylistsViewer } from 'components/playlists';
import styled from 'styled-components';
import { SongsViewer } from 'components/songs';
import { withAuth } from 'utils/withAuth';
import { getPlaylists, selectPlaylist } from 'store/manager';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';

const ManagerContainer = styled.div`
    display: flex;
`;

const SongsContainer = styled.div`
    width: 100%;
    margin-left: 1em;
`;

const ManagerPage: NextPage = () => {
    const playlists = useSelector((state) => state.manager.playlists);
    const selectedPlaylist = useSelector((state) => state.manager.selectedPlaylist);

    const dispatch = useDispatch();

    useEffect((): void => {
        dispatch(getPlaylists.request());
    }, []);
    ``;

    const handleSelectPlaylist = (playlistId: string): void => {
        if (selectedPlaylist !== playlistId) dispatch(selectPlaylist(playlistId));
    };

    return (
        <div>
            <Head>
                <title>Manager</title>
            </Head>
            <ManagerContainer>
                <PlaylistsViewer
                    playlists={playlists}
                    selectedPlaylist={selectedPlaylist}
                    onSelectPlaylist={handleSelectPlaylist}
                />
                <SongsContainer>
                    <SongsViewer />
                </SongsContainer>
            </ManagerContainer>
        </div>
    );
};

export default withAuth(withTheme(withLayout(ManagerPage, AppLayout)));
