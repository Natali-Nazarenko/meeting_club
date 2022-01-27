import * as Type from './types';
import { createAction } from '../../helpers/createAction';

const fetchUsersRequest = createAction(Type.FETCH_USERS_REQUEST);
const fetchUsersSuccess = createAction(Type.FETCH_USERS_SUCCESS);
const fetchUsersError = createAction(Type.FETCH_USERS_ERROR);
const authorizationRequest = createAction(Type.FETCH_USER_LOGIN_REQUEST);
const authorizationSuccess = createAction(Type.FETCH_USER_LOGIN_SUCCESS);
const authorizationError = createAction(Type.FETCH_USER_LOGIN_ERROR);

const outAuthorizationRequest = createAction(Type.FETCH_USER_LOGOUT_REQUEST);
const outAuthorizationSuccess = createAction(Type.FETCH_USER_LOGOUT_SUCCESS);
const outAuthorizationError = createAction(Type.FETCH_USER_LOGOUT_ERROR);

export {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersError,
    authorizationRequest,
    authorizationSuccess,
    authorizationError,
    outAuthorizationRequest,
    outAuthorizationSuccess,
    outAuthorizationError,
};
