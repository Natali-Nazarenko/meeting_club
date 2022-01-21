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

interface State {
    usersReducer: {
        users: User[];
        currentPage: number;
        isLoading: boolean;
    };
}

const usersSelector = (state: State): User[] => state.usersReducer.users;
const currentPageSelector = (state: State): number => {
    console.log(state.usersReducer.currentPage);

    return state.usersReducer.currentPage;
};

export { usersSelector, currentPageSelector };
