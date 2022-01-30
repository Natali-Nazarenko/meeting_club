import { User } from '../../constans/interfaces';

interface State {
    usersReducer: {
        users: User[];
        currentPage: number;
        isAuth: boolean;
        isLoading: boolean;
    };
}

const usersSelector = (state: State): User[] => state.usersReducer.users;
const loadingSelector = (state: State): boolean => state.usersReducer.isLoading;
const authorizationSelector = (state: State): boolean =>
    state.usersReducer.isAuth;
export { usersSelector, loadingSelector, authorizationSelector };
