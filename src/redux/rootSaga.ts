import { all } from '@redux-saga/core/effects';
import { watchUsers } from './users';

export default function* rootSaga(): Generator {
    yield all([watchUsers()]);
}
