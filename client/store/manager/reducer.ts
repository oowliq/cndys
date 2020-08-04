import { ManagerState, ManagerActionTypes } from './types';
import { createReducer } from 'typesafe-actions';
import { getPlaylists, selectPlaylist, inputSearchField, getLikedSongs, getPlaylistSongs } from './actions';

const reducer = createReducer<ManagerState, ManagerActionTypes>({
    playlists: [],
    searchFieldValue: '',
    currentPlaylist: null,
    likedSongs: [],
    playlistsData: [],
    fetching: {
        playlists: false,
        songs: false,
    },
})
    .handleAction(getPlaylists.request, (state) => {
        const newState = { ...state };
        newState.fetching.playlists = true;
        return newState;
    })
    .handleAction(getPlaylists.failure, (state) => {
        const newState = { ...state };
        newState.fetching.playlists = false;
        return newState;
    })
    .handleAction(getPlaylists.success, (state, action) => {
        const newState = {
            ...state,
            playlists: action.payload,
        };
        newState.fetching.playlists = false;
        return newState;
    })
    .handleAction(getLikedSongs.request, (state) => {
        const newState = { ...state };
        newState.fetching.songs = true;
        return newState;
    })
    .handleAction(getLikedSongs.failure, (state) => {
        const newState = { ...state };
        newState.fetching.songs = false;
        return newState;
    })
    .handleAction(getLikedSongs.success, (state, action) => {
        const newState = {
            ...state,
            likedSongs: action.payload,
        };
        newState.fetching.songs = false;
        return newState;
    })
    .handleAction(selectPlaylist, (state, action) => ({
        ...state,
        currentPlaylist: state.playlists.find((playlist) => playlist.id === action.payload) || null,
    }))
    .handleAction(inputSearchField, (state, action) => ({
        ...state,
        searchFieldValue: action.payload,
    }))
    .handleAction(getPlaylistSongs.request, (state) => {
        const newState = { ...state };
        newState.fetching.songs = true;
        return newState;
    })
    .handleAction(getPlaylistSongs.success, (state, action) => {
        const newState = {
            ...state,
            playlistsData: [...state.playlistsData.filter((data) => data.id !== action.payload.id), action.payload],
        };
        newState.fetching.songs = false;
        return newState;
    });

export { reducer as managerReducer };
