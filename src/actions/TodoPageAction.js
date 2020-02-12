export const MARK_DONE = 'MARK_DONE';
export const SELECT_FILTER = 'SELECT_FILTER';
export const SET_KEYWORD = 'SET_KEYWORD';

export const markAsDone = (todoId) => {
    return {
        type: MARK_DONE,
        todoId
    };
};

export const selectFilter = (value) => {
    return {
        type: 'SELECT_FILTER',
        value
    };
};

export const setKeyWord = (keyWord) => {
    return {
        type: 'SET_KEYWORD',
        keyWord
    };
};

// Fetch Todo
export const FETCH_TODO_BEGIN = 'FETCH_TODO_BEGIN';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR';

export const fetchTodo = (userId) => {
    return dispatch => {
        dispatch(fetchTodoBegin());
        fetch('https://jsonplaceholder.typicode.com/todos?userId=' + userId)
            .then(response => response.json())
            .then(data => {
                dispatch(fetchTodoSuccess(data));
            })
            .catch(error => dispatch(fetchTodoError(error)));
    }
};

export const fetchTodoBegin = () => {
    return {
        type: FETCH_TODO_BEGIN
    };
};

export const fetchTodoSuccess = (todo) => {
    return {
        type: FETCH_TODO_SUCCESS,
        payLoad: todo
    };
};

export const fetchTodoError = (error) => {
    return {
        type: FETCH_TODO_ERROR,
        payLoad: error
    };
};

// Fetch User
export const FETCH_USER_BEGIN = 'FETCH_USER_BEGIN';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const fetchUser = (userId) => {
    return dispatch => {
        dispatch(fetchUserBegin());
        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(response => response.json())
            .then(data => {
                dispatch(fetchUserSuccess(data));
            })
            .catch(error => dispatch(fetchUserError(error)));
    }
};

export const fetchUserBegin = () => {
    return {
        type: FETCH_USER_BEGIN
    };
};

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payLoad: user
    };
};

export const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payLoad: error
    };
};
