import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../state/user/user.interface';

import * as fromStore from '../state/app.reducer';
import * as fromUser from '../state/user/user.actions';
import { getAllUsers, getError } from '../state/user';
import { getLoading } from '../state/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  users$: Observable<Array<User>>;
  user$: Observable<User>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromStore.AppState>) {
    this.users$ = this.store.select(getAllUsers);
    this.loading$ = this.store.select(getLoading);
    this.error$ = this.store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(new fromUser.GetAllUsers());
  }

  getId(id) {
    this.store.dispatch(new fromUser.GetUser(id));
  }
}
