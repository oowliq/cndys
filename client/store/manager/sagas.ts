import { all, put, takeEvery } from 'redux-saga/effects';
import { getPlaylists, getLikedSongs, getPlaylistSongs } from './actions';
import { httpClient } from 'utils';
import { UserPlaylists, UserSongs } from 'interfaces/spotify';

function* getPlaylistsSaga() {
    try {
        const { data } = yield httpClient.get<UserPlaylists>(`/me/playlists`);
        yield put(getPlaylists.success(data.items));
    } catch (err) {
        yield put(getPlaylists.failure(err));
    }
}

function* getLikedSongsSaga() {
    try {
        const { data } = yield httpClient.get<UserSongs>(`/me/tracks`);
        yield put(getLikedSongs.success(data.items));
    } catch (err) {
        yield put(getLikedSongs.failure(err));
    }
}

function* getPlaylistSongsSaga(action: ReturnType<typeof getPlaylistSongs.request>) {
    try {
        const { data } = yield httpClient.get<UserSongs>(`/playlists/${action.payload.id}/tracks`);
        yield put(getPlaylistSongs.success({ id: action.payload.id, tracks: data.items, page: 1 }));
    } catch (err) {
        yield put(getPlaylistSongs.failure(err));
    }
}

function* userRootSaga() {
    yield all([
        takeEvery(getPlaylists.request, getPlaylistsSaga),
        takeEvery(getLikedSongs.request, getLikedSongsSaga),
        takeEvery(getPlaylistSongs.request, getPlaylistSongsSaga),
    ]);
}

export default userRootSaga;
