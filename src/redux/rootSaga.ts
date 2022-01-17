import { all } from '@redux-saga/core/effects';
import { watchUsers } from './users';
import { watchUser } from './user';

export default function* rootSaga(): Generator {
    yield all([watchUsers(), watchUser()]);
}
