import React, { FC } from 'react';
import styled from 'styled-components';
import { Field } from 'components/layout';
import { Playlist } from './Playlist';
import { SearchIcon, NotFoundIcon } from 'components/icons';
import { UserPlaylist } from 'interfaces/spotify';
import { useSelector } from 'store';
import { useDispatch } from 'react-redux';
import { inputSearchField } from 'store/manager';
import posed, { PoseGroup } from 'react-pose';
import Skeleton from 'react-loading-skeleton';

interface PlaylistsViewerProps {
    playlists: UserPlaylist[];
    selectedPlaylistId: string | null;
    fetching: boolean;
    onSelectPlaylist: (playlistId: string) => void;
}

const PlaylistsWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.main};
    padding: 1em;
    border-radius: 3px;
    min-width: 300px;
    position: sticky;
    top: 1em;
`;

const PlaylistsNotFound = styled.div`
    height: 316px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        fill: ${(props) => props.theme.colors.primary};
    }
`;

const PlaylistsFetching = styled.div`
    height: 316px;
`;

const PlaylistsNotFoundTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.primary};
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Playlists = posed(styled.div`
    margin-top: 1em;
    height: 300px;
    overflow: auto;
    padding-right: 0.5em;

    & {
        &::-webkit-scrollbar-track {
            background-color: ${(props) => props.theme.colors.background};
        }

        &::-webkit-scrollbar {
            width: 3px;
            background-color: ${(props) => props.theme.colors.primary};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.colors.primary};
        }
    }
`)({ enter: { x: 1 }, exit: { x: ({ delta }: { delta: number }) => -delta * 100 + 'vw' } });

const Box = posed.div();

const PlaylistsViewer: FC<PlaylistsViewerProps> = ({ fetching, playlists, selectedPlaylistId, onSelectPlaylist }) => {
    const searchFieldValue = useSelector((state) => state.manager.searchFieldValue);

    const disaptch = useDispatch();

    const handleSearchFieldInput = (e: React.ChangeEvent<HTMLInputElement>) =>
        disaptch(inputSearchField(e.target.value));

    const filteredPlaylists = playlists.filter((playlist) =>
        playlist.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );

    return (
        <PlaylistsWrapper>
            <Field placeholder="Search playlist" value={searchFieldValue} onChange={handleSearchFieldInput}>
                <SearchIcon size={15} />
            </Field>
            {fetching && (
                <PlaylistsFetching>
                    <Skeleton count={5} height={40} style={{ marginTop: '1em' }} />
                </PlaylistsFetching>
            )}

            {!fetching && !filteredPlaylists.length && (
                <PlaylistsNotFound>
                    <NotFoundIcon size={100} />
                    <PlaylistsNotFoundTitle>Not found :(</PlaylistsNotFoundTitle>
                </PlaylistsNotFound>
            )}

            {!fetching && !!filteredPlaylists.length && (
                <Playlists>
                    <PoseGroup delta={1}>
                        {filteredPlaylists.map((playlist) => (
                            <Box key={playlist.id}>
                                <Playlist
                                    name={playlist.name}
                                    selected={playlist.id === selectedPlaylistId}
                                    image={playlist.images[0]?.url}
                                    key={playlist.id}
                                    id={playlist.id}
                                    onSelect={onSelectPlaylist}
                                />
                            </Box>
                        ))}
                    </PoseGroup>
                </Playlists>
            )}
        </PlaylistsWrapper>
    );
};

export { PlaylistsViewer };
