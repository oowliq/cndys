import { createAsyncAction } from 'typesafe-actions';
import { UserPlaylist } from 'interfaces/spotify';

export const getPlaylists = createAsyncAction(
    '@@manager/GET_PLAYLISTS_REQUEST',
    '@@manager/GET_PLAYLISTS_SUCCESS',
    '@@manager/GET_PLAYLISTS_FAILURE'
)<string, UserPlaylist[], Error>();

export default { getPlaylists };
