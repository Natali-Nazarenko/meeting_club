import * as Type from './types';
import { createAction } from '../../helpers/createAction';

const featchUsersRequest = createAction(Type.FEATCH_USERS_REQUEST);

export { featchUsersRequest };
