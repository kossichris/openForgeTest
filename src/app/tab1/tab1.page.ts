import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../state/user/user.interface';

import * as fromStore from '../state/app.reducer';
import * as fromUser from '../state/user/user.actions';
import { getAllUsers, getError } from '../state/user';
import { getLoading } from '../state/user';
import { Router } from '@angular/router';

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

  term: string = '';

  page_number = 1;
  page_limit = 10;
  max_pages = 15;

  constructor(
    private store: Store<fromStore.AppState>,
    private router: Router
  ) {
    this.users$ = this.store.select(getAllUsers);
    this.loading$ = this.store.select(getLoading);
    this.error$ = this.store.select(getError);
  }

  ngOnInit() {
    this.getUsers();
  }
  doRefresh(event) {
    this.page_number = 0;
    this.getUsers(event);
  }

  getUsers(event?) {
    let pagination = `?since=${this.page_number}&per_page=${this.page_limit}`;
    this.store.dispatch(new fromUser.GetAllUsers(pagination));
    if (event) {
      event.target.complete();
    }
  }

  loadMoreUsers(event) {
    this.page_number++;
    this.getUsers(event);
    if (this.page_number === this.max_pages) {
      event.target.disabled = true;
    }
  }

  goToSearch(login: string) {
    this.router.navigate(['tabs/tab2', { user: login }]);
  }
  getId(id) {
    this.store.dispatch(new fromUser.GetUser(id));
  }
}
