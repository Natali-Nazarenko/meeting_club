import { all } from '@redux-saga/core/effects';
import { watchUsers, watchAuth, watchAuthOut } from './users';

export default function* rootSaga(): Generator {
    yield all([watchUsers(), watchAuth(), watchAuthOut()]);
}
