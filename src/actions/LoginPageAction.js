export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const login = () => {
    return {
        type: USER_LOGIN
    }
}

export const logout = () => {
    return {
        type: USER_LOGOUT
    }
}
