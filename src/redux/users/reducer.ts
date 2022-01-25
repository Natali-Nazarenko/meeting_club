import * as Type from './types';

interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    date: string;
    location: {
        postcode: string;
        state: string;
        city: string;
        street: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        date: string;
    };
    login: {
        uuid: string;
    };
}

interface UsersState {
    users: User[];
    currentPage: number;
    isAuth: boolean;
    isLoading: boolean;
    error: Error | null | string;
}

interface Action<T> {
    type: string;
    payload: T;
}

const initialState: UsersState = {
    users: [],
    currentPage: 1,
    isAuth: false,
    isLoading: false,
    error: null,
};
type Reducer = User & User[] & Error & boolean;

export const usersReducer = <T extends Reducer>(
    state: UsersState,
    action: Action<T>,
): UsersState => {
    state = state || initialState;
    switch (action.type) {
        case Type.FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case Type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
                isLoading: false,
                error: null,
            };
        case Type.FETCH_USERS_ERROR:
        case Type.FETCH_USER_LOGIN:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                error: null,
            };
        case Type.FETCH_USER_LOGIN:
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                error: null,
            };

        default:
            return state;
    }
};
