import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import * as ApiActions from './api.actions';
import { ApiService } from '../../core/api-service/api.service';
import { ResultModel } from '../../core/api-service/result.model';
import { User } from '../../core/models/user.model';
import { RequestType } from '../../core/api-service/requesType';
import { UserUrls } from '../../core/api-service/api.urls';

@Injectable()
export class ApiServiceEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.GetUsers),
      concatMap(
        () => this.apiService.get<ResultModel<User[]>>(
            'http://localhost:5959',
            UserUrls.USERS,
                RequestType.GET
              )
              .pipe(
                map((response) =>
                  ApiActions.GetUsersSuccess({ users: response.body?.response || [] })
                )
              )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApiActions.CreateUser),
      concatMap(
        (action) => this.apiService.post<ResultModel<User>>(
            'http://localhost:5959',
            UserUrls.USERS,
                action.user,
                RequestType.POST
              )
              .pipe(
                map((response) =>
                  ApiActions.CreateUserSuccess({ savedUser: response.body?.response || {} })
                )
              )
      )
    )
  );
}
