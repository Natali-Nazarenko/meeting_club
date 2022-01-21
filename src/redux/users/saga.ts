import { call, put, takeLatest } from '@redux-saga/core/effects';
import { fetchUsers } from '../../API/userService';
import { fetchUsersSuccess, fetchUsersError } from './actions';
import { FETCH_USERS_REQUEST } from './types';

interface Params {
    type: string;
    payload: number;
}

function* fetchUsersSaga({ payload }: Params): Generator {
    try {
        const users = yield call(fetchUsers, payload);
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersError(error));
    }
}

export function* watchUsers(): Generator {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
