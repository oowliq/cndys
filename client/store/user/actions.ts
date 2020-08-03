import { createAsyncAction } from 'typesafe-actions';
import { Me } from 'interfaces/spotify';

export const getUser = createAsyncAction('GET_USER_REQUEST', 'GET_USER_SUCCESS', 'GET_USER_FAILURE')<
    undefined,
    Me,
    Error
>();

export default { getUser };
