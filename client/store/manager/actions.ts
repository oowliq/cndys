import { createAsyncAction, createAction } from 'typesafe-actions';
import { UserPlaylist, UserSong } from 'interfaces/spotify';

export const getPlaylists = createAsyncAction(
    '@@manager/GET_PLAYLISTS_REQUEST',
    '@@manager/GET_PLAYLISTS_SUCCESS',
    '@@manager/GET_PLAYLISTS_FAILURE'
)<undefined, UserPlaylist[], Error>();

export const getLikedSongs = createAsyncAction(
    '@@manager/GET_LIKED_SONGS_REQUEST',
    '@@manager/GET_LIKED_SONGS_SUCCESS',
    '@@manager/GET_LIKED_SONGS_FAILURE'
)<undefined, UserSong[], Error>();

export const getPlaylistSongs = createAsyncAction(
    '@@manager/GET_PLAYLIST_SONGS_REQUEST',
    '@@manager/GET_PLAYLIST_SONGS_SUCCESS',
    '@@manager/GET_PLAYLIST_SONGS_FAILURE'
)<{ id: string }, { tracks: SpotifyApi.PlaylistTrackObject[]; page: number; id: string }, Error>();

export const selectPlaylist = createAction('@@manager/SELECT_PLAYLIST')<string>();

export const inputSearchField = createAction('@@manager/INPUT_SEARCH_FIELD')<string>();

export default { getPlaylists, selectPlaylist, getLikedSongs, inputSearchField, getPlaylistSongs };
