import { combineReducers } from 'redux';
import { UserState, userReducer } from './user';
import { ManagerState, managerReducer } from './manager';
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

export interface ApplicationState {
    user: UserState;
    manager: ManagerState;
}

export const createRootReducer = () =>
    combineReducers({
        user: userReducer,
        manager: managerReducer,
    });

export const useSelector: TypedUseSelectorHook<ApplicationState> = useReduxSelector;

export default null;
