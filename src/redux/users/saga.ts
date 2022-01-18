import { call, put, takeLatest } from '@redux-saga/core/effects';
import { usersApi } from '../../API/userService';
import { fetchUsersSuccess, fetchUsersError } from './actions';
import { FETCH_USERS_REQUEST } from './types';

function* fetchUsersSaga(): Generator {
    try {
        const users = yield call(usersApi.fetchUsers);
        console.log('usersSaga: ', users);
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}

export function* watchUsers(): Generator {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
