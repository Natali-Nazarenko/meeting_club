interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    date: string;
}

interface State {
    usersReducer: {
        users: User[];
        isLoading: boolean;
    };
}

const usersSelector = (state: State): User[] => {
    console.log('usersSelector: ', state.usersReducer.users);

    return state.usersReducer.users;
};

export { usersSelector };
