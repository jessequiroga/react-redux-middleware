import { ON_SEARCH, FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../actions/UsersPageAction";

const initialState = {
    keyWord: '',
    users: [],
    loading: false,
    error: ''
};

export const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_SEARCH:
            return {
                ...state,
                keyWord: action.keyWord
            };
        case FETCH_USERS_BEGIN:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payLoad,
                loading: false
            };
        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payLoad
            };
        default:
            return state;
    };
};
