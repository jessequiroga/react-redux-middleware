import { MARK_DONE, SELECT_FILTER, SET_KEYWORD, FETCH_TODO_BEGIN, FETCH_TODO_SUCCESS, FETCH_TODO_ERROR, FETCH_USER_BEGIN, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from "../actions/TodoPageAction";

const initialState = {
    user: {},
    todoList: [],
    selectedFilter: 'All',
    keyWord: '',
    loadingTodo: false,
    loadingUser: false,
    error: ''
};

export const todoPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_DONE:
            const temp = [...state.todoList];
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].id == action.todoId) {
                    temp[i].completed = true;
                }
            }
            return {
                ...state,
                todoList: temp
            };
        case SELECT_FILTER:
            return {
                ...state,
                selectedFilter: action.value
            };
        case SET_KEYWORD:
            return {
                ...state,
                keyWord: action.keyWord
            };
        case FETCH_TODO_BEGIN:
            return {
                ...state,
                loadingTodo: true
            };
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                todoList: action.payLoad,
                loadingTodo: false,
                error: ''
            };
        case FETCH_TODO_ERROR:
            return {
                ...state,
                loadingTodo: false,
                error: action.payLoad
            };
        case FETCH_USER_BEGIN:
            return {
                ...state,
                loadingUser: true
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payLoad,
                loadingUser: false,
                error: ''
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                loadingUser: false,
                error: action.payLoad
            };
        default:
            return state;
    };
};
