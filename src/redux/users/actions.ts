import * as Type from './types';
import { createAction } from '../../helpers/createAction';

const fetchUsersRequest = createAction(Type.FETCH_USERS_REQUEST);
const fetchUsersSuccess = createAction(Type.FETCH_USERS_SUCCESS);
const fetchUsersError = createAction(Type.FETCH_USERS_ERROR);
const setAuthorization = createAction(Type.FETCH_USER_LOGIN);
const outAuthorization = createAction(Type.FETCH_USER_LOGOUT);

export {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    setAuthorization,
    outAuthorization,
};
