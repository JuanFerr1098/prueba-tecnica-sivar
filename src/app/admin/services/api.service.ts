import { Injectable } from '@angular/core';
import * as ApiActions from '../store/api.actions';
import { Observable } from 'rxjs';
import { State } from '../store/api.reducer';
import { select, Store } from '@ngrx/store';
import { User } from '../../core/models/user.model';
import { getUsers, getcreatedUser } from '../store/api.selector';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private store: Store<State>) {}

  GetUsers(): void {
    this.store.dispatch(ApiActions.GetUsers());
  }

  getUsers(): Observable<User[]> {
    return this.store.select(getUsers);
  }

  CreateUser(user: User): void {
    this.store.dispatch(ApiActions.CreateUser({ user }));
  }
  
  getCreatedUser(): Observable<User> {
    return this.store.pipe(select(getcreatedUser));
  }
}
