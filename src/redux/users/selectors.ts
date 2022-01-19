interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    date: string;
    lolcation: {
        postcode: string;
        state: string;
        city: string;
        street: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        date: string;
    };
}

interface State {
    usersReducer: {
        users: User[];
        isLoading: boolean;
    };
}

const usersSelector = (state: State): User[] => state.usersReducer.users;

export { usersSelector };
