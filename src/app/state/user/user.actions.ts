import { Action } from '@ngrx/store';
import { User } from './user.interface';

export const GET_ALL_USERS = '[USER] Get All Users';
export const GET_ALL_USERS_SUCCESS = '[USER] Get All Users Success';
export const GET_ALL_USERS_FAIL = '[USER] Get All Users Fail';

export const GET_USER = '[USER] Get User';
export const GET_USER_SUCCESS = '[USER] Get User Success';
export const GET_USER_FAIL = '[USER] Get User Fail';

//Get User List
export class GetAllUsers implements Action {
  readonly type = GET_ALL_USERS;
}

export class GetAllUsersSuccess implements Action {
  readonly type = GET_ALL_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetAllUsersFail implements Action {
  readonly type = GET_ALL_USERS_FAIL;
  constructor(public payload: any) {}
}

//Get User
export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class GetUserFail implements Action {
  readonly type = GET_USER_FAIL;
  constructor(public payload: any) {}
}

export type UserActions =
  | GetAllUsers
  | GetAllUsersSuccess
  | GetAllUsersFail
  | GetUser
  | GetUserSuccess
  | GetUserFail;
