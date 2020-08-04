import { ActionType } from 'typesafe-actions';
import managerActions from './actions';
import { UserPlaylist, UserSong } from 'interfaces/spotify';

export type ManagerActionTypes = ActionType<typeof managerActions>;

interface PlaylistData {
    id: string;
    page: number;
    tracks: SpotifyApi.PlaylistTrackObject[];
}

export interface ManagerState {
    readonly playlists: UserPlaylist[];
    readonly searchFieldValue: string;
    readonly currentPlaylist: null | UserPlaylist;
    readonly likedSongs: UserSong[];
    readonly playlistsData: PlaylistData[];
    readonly fetching: {
        playlists: boolean;
        songs: boolean;
    };
}
