import { ActionType } from 'typesafe-actions';
import managerActions from './actions';
import { UserPlaylist } from 'interfaces/spotify';

export type ManagerActionTypes = ActionType<typeof managerActions>;

export interface ManagerState {
    readonly playlists: UserPlaylist[];
}
