import { ADD_USER, SELECT_USER } from "../constants/action-types";

export const addUser = user => ({ type: ADD_USER, payload: user });
export const selectUser = userIndex => ({ type: SELECT_USER, payload: userIndex });