import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { withLayout, AppLayout } from 'layout';
import { withTheme } from 'theme';
import Head from 'next/head';
import { PlaylistsViewer } from 'components/playlists';
import styled from 'styled-components';
import { SongsViewer } from 'components/songs';
import { withAuth } from 'utils/withAuth';
import { getPlaylists, selectPlaylist, getLikedSongs, getPlaylistSongs, changePlaylistPage } from 'store/manager';
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
    const pageSize = 10;

    const playlists = useSelector((state) => state.manager.playlists);

    const { currentPlaylist, playlistsData, fetching } = useSelector((state) => state.manager);

    const currentData = playlistsData.find((data) => data.id === currentPlaylist?.id);

    const dispatch = useDispatch();

    const currentSongs = !currentData
        ? []
        : currentData.tracks.slice((currentData.page - 1) * pageSize, currentData.page * pageSize);

    const maxPage = Math.ceil(!currentPlaylist ? 1 : currentPlaylist.tracks.total / pageSize);

    useEffect((): void => {
        dispatch(getPlaylists.request());
        dispatch(getLikedSongs.request());
    }, []);
    ``;

    const handleSelectPlaylist = (playlistId: string): void => {
        if (currentPlaylist?.id !== playlistId) {
            if (!playlistsData.find((p) => p.id === playlistId)) dispatch(getPlaylistSongs.request({ id: playlistId }));
            dispatch(selectPlaylist(playlistId));
        }
    };

    const handleChagnePage = (page: number): void => {
        if (currentPlaylist) dispatch(changePlaylistPage({ playlistId: currentPlaylist.id, page }));
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
                    {currentPlaylist && (
                        <SongsViewer
                            maxPage={maxPage}
                            page={currentData?.page || 1}
                            onChangePage={handleChagnePage}
                            id={currentPlaylist?.id || ''}
                            fetching={fetching.songs}
                            title={currentPlaylist?.name}
                            description={currentPlaylist?.description}
                            songsCount={currentPlaylist?.tracks.total}
                            image={currentPlaylist?.images[0]?.url}
                            songs={currentSongs}
                        />
                    )}
                </SongsContainer>
            </ManagerContainer>
        </div>
    );
};

export default withAuth(withTheme(withLayout(ManagerPage, AppLayout)));
