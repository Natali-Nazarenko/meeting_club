import * as Type from './types';

interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    date: string;
}

interface UsersState {
    users: User[];
    isLoading: boolean;
    error: Error | null | string;
}

interface Action<T> {
    type: string;
    payload: T;
}

type Reducer = User & User[] & Error;

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};

export const usersReducer = <T extends Reducer>(
    state: UsersState,
    action: Action<T>,
) => {
    state = state || initialState;
    console.log('usersReducer: ', action.payload);
    switch (action.type) {
        case Type.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: null,
            };

        case Type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                error: null,
            };
        case Type.FETCH_USERS_ERROR:

        default:
            return state;
    }
};
