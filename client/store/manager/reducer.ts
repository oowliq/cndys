import { ManagerState, ManagerActionTypes } from './types';
import { createReducer } from 'typesafe-actions';
import { getPlaylists } from './actions';

const reducer = createReducer<ManagerState, ManagerActionTypes>({ playlists: [] }).handleAction(
    getPlaylists.success,
    (state, action) => ({
        ...state,
        playlists: action.payload,
    })
);

export { reducer as managerReducer };
