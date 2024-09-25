import { createFeatureSelector, createSelector} from "@ngrx/store";
import { apiFeatureKey, State } from "./api.reducer";

const getApiState = createFeatureSelector<State>(apiFeatureKey);

export const getUsers = createSelector(
    getApiState,
    (state: State) => state.users
)

export const getcreatedUser = createSelector(
    getApiState,
    (state: State) => state.savedUser
)