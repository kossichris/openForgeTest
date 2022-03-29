import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './user.reducers';
import { State as UserState } from './user.reducers';

export const getUsersState = createFeatureSelector<UserState>('user');

export const getAllUsers = createSelector(getUsersState, fromUsers.getAllUsers);

export const getLoading = createSelector(getUsersState, fromUsers.getLoading);

export const getError = createSelector(getUsersState, fromUsers.getError);

export const getAUser = createSelector(getUsersState, fromUsers.getUser);

export const getUserLoading = createSelector(
  getUsersState,
  fromUsers.getUserLoading
);

export const getUserError = createSelector(
  getUsersState,
  fromUsers.getUserError
);
