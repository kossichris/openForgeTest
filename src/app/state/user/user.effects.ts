import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as UserActions from './user.actions';
import { UserService } from '../../core/services/user.service';
import { User } from './user.interface';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getAllUsers$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.GET_ALL_USERS),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(
            (users: User[]) => new UserActions.GetAllUsersSuccess(users),
            catchError((err) => of(new UserActions.GetAllUsersFail(err)))
          )
        )
      )
    );
  });

  getUser: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.GET_USER),
      map((action: UserActions.GetUser) => action.payload),
      switchMap((id) =>
        this.userService.getUser(id).pipe(
          map((user: User) => new UserActions.GetUserSuccess(user)),
          catchError((err) => of(new UserActions.GetAllUsersFail(err)))
        )
      )
    );
  });
}
