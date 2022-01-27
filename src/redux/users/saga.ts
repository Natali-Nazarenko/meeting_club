import { call, put, takeLatest } from '@redux-saga/core/effects';
import { fetchUsers } from '../../API/userService';
import {
    fetchUsersSuccess,
    fetchUsersError,
    authorizationSuccess,
    authorizationError,
    outAuthorizationError,
    outAuthorizationSuccess,
} from './actions';
import {
    FETCH_USERS_REQUEST,
    FETCH_USER_LOGIN_REQUEST,
    FETCH_USER_LOGOUT_REQUEST,
} from './types';

interface Params {
    type: string;
    payload: number;
}

interface ParamsIsLogin {
    type: string;
    payload: string;
}

function* fetchUsersSaga({ payload }: Params): Generator {
    try {
        const users = yield call(fetchUsers, payload);
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}
function* fetchIsLoginSaga({ payload }: ParamsIsLogin): Generator {
    localStorage.setItem('auth', `${payload}`);
    try {
        const isAuth = yield localStorage.getItem('auth');
        yield put(authorizationSuccess(isAuth));
    } catch (error) {
        yield put(authorizationError(error));
    }
}

function* fetchIsLogoutSaga({ payload }: ParamsIsLogin): Generator {
    localStorage.setItem('auth', `${payload}`);
    try {
        const isAuth = yield localStorage.getItem('auth');
        yield put(outAuthorizationSuccess(isAuth));
    } catch (error) {
        yield put(outAuthorizationError(error));
    }
}

export function* watchUsers(): Generator {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
export function* watchAuth(): Generator {
    yield takeLatest(FETCH_USER_LOGIN_REQUEST, fetchIsLoginSaga);
}

export function* watchAuthOut(): Generator {
    yield takeLatest(FETCH_USER_LOGOUT_REQUEST, fetchIsLogoutSaga);
}
