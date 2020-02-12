import { combineReducers } from "redux";
import { userPageReducer } from "./UsersPageReducer";
import { todoPageReducer } from "./TodoPageReducer";

export const rootReducer = combineReducers({
    todoPage: todoPageReducer,
    userPage: userPageReducer
});
