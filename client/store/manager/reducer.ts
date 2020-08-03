import { ManagerState, ManagerActionTypes } from './types';
import { createReducer } from 'typesafe-actions';
import { getPlaylists, selectPlaylist, inputSearchField } from './actions';

const reducer = createReducer<ManagerState, ManagerActionTypes>({
    playlists: [],
    selectedPlaylist: null,
    searchFieldValue: '',
})
    .handleAction(getPlaylists.success, (state, action) => ({
        ...state,
        playlists: action.payload,
    }))
    .handleAction(selectPlaylist, (state, action) => ({
        ...state,
        selectedPlaylist: action.payload,
    }))
    .handleAction(inputSearchField, (state, action) => ({
        ...state,
        searchFieldValue: action.payload,
    }));

export { reducer as managerReducer };
