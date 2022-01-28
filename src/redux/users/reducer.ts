import * as Type from './types';
import { UsersState, Action, Reducer } from '../../constans/interfaces';

const initialState: UsersState = {
    users: [],
    currentPage: 1,
    isAuth: false,
    isLoading: false,
    error: null,
};

export const usersReducer = <T extends Reducer>(
    state: UsersState,
    action: Action<T>,
): UsersState => {
    state = state || initialState;
    switch (action.type) {
        case Type.FETCH_USER_LOGIN_REQUEST:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: true,
                error: null,
            };
        case Type.FETCH_USER_LOGOUT_REQUEST:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: true,
                error: null,
            };
        case Type.FETCH_USERS_REQUEST:
            return {
                ...state,
                currentPage: action.payload,
                isLoading: true,
                error: null,
            };
        case Type.FETCH_USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: false,
                error: null,
            };
        case Type.FETCH_USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                error: null,
            };

        case Type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users, ...action.payload],
                isLoading: false,
                error: null,
            };
        case Type.FETCH_USER_LOGIN_ERROR:
        case Type.FETCH_USER_LOGOUT_ERROR:
        case Type.FETCH_USERS_ERROR:

        default:
            return state;
    }
};
