import { UserState, UserActionTypes } from './types';
import { createReducer } from 'typesafe-actions';
import { getUser } from './actions';

export const initialState: UserState = {
    user: null,
};

const reducer = createReducer<UserState, UserActionTypes>({ user: null }).handleAction(
    getUser.success,
    (state, action) => ({
        ...state,
        user: action.payload,
    })
);

export { reducer as userReducer };
