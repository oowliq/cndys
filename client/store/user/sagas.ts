import { all, put, takeEvery } from 'redux-saga/effects';
import { getUser } from './actions';
import { httpClient } from 'utils';
import { Me } from 'interfaces/spotify';

function* getUserSaga() {
    try {
        const { data } = yield httpClient.get<Me>('/me');
        yield put(getUser.success(data));
    } catch (err) {
        yield put(getUser.failure(err));
    }
}

function* userRootSaga() {
    yield all([takeEvery(getUser.request, getUserSaga)]);
}

export default userRootSaga;
