import React, { FC } from 'react';
import styled from 'styled-components';
import { Field } from 'components/layout';
import { Playlist } from './Playlist';
import { SearchIcon } from 'components/icons';
import { UserPlaylist } from 'interfaces/spotify';

interface PlaylistsViewerProps {
    playlists: UserPlaylist[];
}

const PlaylistsWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.main};
    padding: 1em;
    border-radius: 3px;
    min-width: 300px;
`;

const Playlists = styled.div`
    margin-top: 1em;
    max-height: 300px;
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
`;

const PlaylistsViewer: FC<PlaylistsViewerProps> = ({ playlists }) => {
    return (
        <PlaylistsWrapper>
            <Field placeholder="Search playlist">
                <SearchIcon size={15} />
            </Field>
            <Playlists>
                {playlists.map((playlist) => (
                    <Playlist name={playlist.name} key={playlist.id} />
                ))}
            </Playlists>
        </PlaylistsWrapper>
    );
};

export { PlaylistsViewer };
