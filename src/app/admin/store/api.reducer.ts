import { createReducer, on } from "@ngrx/store";
import { User } from "../../core/models/user.model";
import * as Actions from "../store/api.actions";

export const apiFeatureKey = 'api';

export interface State {
    users: User[];
    savedUser: User;
}

export const initialState: State = {
    users: [],
    savedUser: {},
};

export const reducer = createReducer(
    initialState, 
    on(Actions.GetUsers, (state) => ({
        ...state,
    })),
    on(Actions.GetUsersSuccess, (state, { users }) => ({
        ...state,
        users
    })),
    on(Actions.CreateUser, (state) => ({
        ...state,
    })),
    on(Actions.CreateUserSuccess, (state, { savedUser }) => ({
        ...state,
        savedUser
    })),
)