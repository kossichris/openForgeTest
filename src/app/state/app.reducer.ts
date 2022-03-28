import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromUser from './user/user.reducers';

export interface AppState {
  user: fromUser.State;
}
export const appReducer: ActionReducerMap<AppState> = {
  user: fromUser.UserReducer,
};
