export const ON_SEARCH = 'ON_SEARCH';

export const onSearch = (keyWord) => {
    return {
        type: 'ON_SEARCH',
        keyWord
    };
};

// Fetch User
export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersBegin());
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchUsersSuccess(data));
            })
            .catch(error => {
                alert(error);
                dispatch(fetchUsersError(error));
            });
    };
};

export const fetchUsersBegin = () => {
    return {
        type: FETCH_USERS_BEGIN
    };
};

export const fetchUsersSuccess = (user) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payLoad: user
    };
};

export const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payLoad: error
    };
};
