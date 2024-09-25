import { createAction, props } from '@ngrx/store';
import { User } from '../../core/models/user.model';

export const GetUsers = createAction(
    '[API] Get Users'
)
export const GetUsersSuccess = createAction(
    '[API] Get Users Success',
    props<{ users: User[] }>()
)

export const CreateUser = createAction(
    '[API] Create User',
    props<{ user: User }>()
)
export const CreateUserSuccess = createAction(
    '[API] Create User Success',
    props<{ savedUser: User }>()
)