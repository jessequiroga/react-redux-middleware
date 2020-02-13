import { USER_LOGIN, USER_LOGOUT } from "../actions/LoginPageAction"

const initialState = {
    isLogin: false
}

export const LoginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                isLogin: true
            };
        case USER_LOGOUT:
            return {
                isLogin: false
            };
        default:
            return state;
    }
}
