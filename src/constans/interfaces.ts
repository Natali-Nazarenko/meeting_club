interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    dob: {
        date: string;
    };
    location: {
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
    login: {
        uuid: string;
    };
}

interface UsersState {
    users: User[];
    currentPage: number;
    isAuth: boolean;
    isLoading: boolean;
    error: Error | null | string;
}

interface Action<T> {
    type: string;
    payload: T;
}

type Reducer = User & User[] & Error & boolean & number;

export type { User, UsersState, Action, Reducer };
