import { createAsyncAction, createAction } from 'typesafe-actions';
import { UserPlaylist } from 'interfaces/spotify';

export const getPlaylists = createAsyncAction(
    '@@manager/GET_PLAYLISTS_REQUEST',
    '@@manager/GET_PLAYLISTS_SUCCESS',
    '@@manager/GET_PLAYLISTS_FAILURE'
)<undefined, UserPlaylist[], Error>();

export const selectPlaylist = createAction('@@manager/SELECT_PLAYLIST')<string>();

export const inputSearchField = createAction('@@manager/INPUT_SEARCH_FIELD')<string>();

export default { getPlaylists, selectPlaylist, inputSearchField };
