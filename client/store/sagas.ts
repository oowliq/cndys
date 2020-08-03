import { all } from '@redux-saga/core/effects';
import userRootSagas from './user/sagas';
import managerRootSagas from './manager/sagas';

export default function* rootSaga() {
    yield all([userRootSagas(), managerRootSagas()]);
}
