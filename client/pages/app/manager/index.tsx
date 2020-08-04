import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { withLayout, AppLayout } from 'layout';
import { withTheme } from 'theme';
import Head from 'next/head';
import { PlaylistsViewer } from 'components/playlists';
import styled from 'styled-components';
import { SongsViewer } from 'components/songs';
import { withAuth } from 'utils/withAuth';
import { getPlaylists, selectPlaylist, getLikedSongs, getPlaylistSongs } from 'store/manager';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';

const ManagerContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

const SongsContainer = styled.div`
    width: 100%;
    margin-left: 1em;
`;

const ManagerPage: NextPage = () => {
    const playlists = useSelector((state) => state.manager.playlists);
    const { currentPlaylist, playlistsData, fetching } = useSelector((state) => state.manager);

    const currentData = playlistsData.find((data) => data.id === currentPlaylist?.id);

    const dispatch = useDispatch();

    useEffect((): void => {
        dispatch(getPlaylists.request());
        dispatch(getLikedSongs.request());
    }, []);
    ``;

    const handleSelectPlaylist = (playlistId: string): void => {
        if (currentPlaylist?.id !== playlistId) {
            dispatch(getPlaylistSongs.request({ id: playlistId }));
            dispatch(selectPlaylist(playlistId));
        }
    };

    return (
        <div>
            <Head>
                <title>Manager</title>
            </Head>
            <ManagerContainer>
                <PlaylistsViewer
                    fetching={fetching.playlists}
                    playlists={playlists}
                    selectedPlaylistId={currentPlaylist ? currentPlaylist.id : null}
                    onSelectPlaylist={handleSelectPlaylist}
                />
                <SongsContainer>
                    <SongsViewer
                        id={currentPlaylist?.id || ''}
                        fetching={fetching.songs}
                        title={currentPlaylist?.name}
                        description={currentPlaylist?.description}
                        songsCount={currentPlaylist?.tracks.total}
                        image={currentPlaylist?.images[0]?.url}
                        songs={currentData?.tracks || []}
                    />
                </SongsContainer>
            </ManagerContainer>
        </div>
    );
};

export default withAuth(withTheme(withLayout(ManagerPage, AppLayout)));
