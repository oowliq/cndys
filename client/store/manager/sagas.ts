import { all, take, put, takeEvery } from 'redux-saga/effects';
import { getPlaylists } from './actions';
import { httpClient } from 'utils';
import { UserPlaylists } from 'interfaces/spotify';

function* getPlaylistsSaga() {
    try {
        yield take('GET_USER_SUCCESS');
        const { data } = yield httpClient.get<UserPlaylists>(`/me/playlists`);
        yield put(getPlaylists.success(data.items));
    } catch (err) {
        yield put(getPlaylists.failure(err));
    }
}

function* userRootSaga() {
    yield all([takeEvery(getPlaylists.request, getPlaylistsSaga)]);
}

export default userRootSaga;
