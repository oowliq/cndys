import { Me } from 'interfaces/spotify';
import { ActionType } from 'typesafe-actions';
import userActions from './actions';

export type User = Me;

export type UserActionTypes = ActionType<typeof userActions>;

export interface UserState {
    readonly user: User | null;
}
