import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../state/user/user.interface';
import * as fromStore from '../state/app.reducer';
import { getAllUsers, getAUser } from '../state/user';
import * as fromUser from '../state/user/user.actions';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  options: string[] = ['One', 'Two', 'Three'];
  users$: Observable<Array<User>>;
  user$: Observable<User>;
  search: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromStore.AppState>
  ) {
    this.search = this.route.snapshot.paramMap.get('user');
    this.users$ = this.store.select(getAllUsers);
    this.user$ = this.store.select(getAUser);
  }

  ngOnInit() {
    this.getUsers();
    if (this.search) {
      this.searchUser(this.search);
    }
  }

  getUsers() {
    let pagination = `?since=1&per_page=100}`;
    this.store.dispatch(new fromUser.GetAllUsers(pagination));
  }

  searchUser(userLogin) {
    this.store.dispatch(new fromUser.GetUser(userLogin));
    console.log(this.user$);
  }
}
