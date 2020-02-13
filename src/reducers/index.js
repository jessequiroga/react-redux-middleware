import { combineReducers } from "redux";
import { userPageReducer } from "./UsersPageReducer";
import { todoPageReducer } from "./TodoPageReducer";
import { LoginPageReducer } from "./LoginPageReducer";

export const rootReducer = combineReducers({
    todoPage: todoPageReducer,
    userPage: userPageReducer,
    loginPage: LoginPageReducer
});
