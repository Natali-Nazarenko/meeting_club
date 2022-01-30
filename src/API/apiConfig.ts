export const apiConfig = {
    baseUrl: process.env.REACT_APP_BASE_URL as string,
};

export const parameters = (currentPage: number) => {
    let amountUsers = 20;
    if (currentPage > 1) {
        amountUsers = 10;
    }
    return {
        page: currentPage,
        results: amountUsers,
        inc: 'dob,gender,location,name,phone,picture,registered,login',
        seed: 'abc',
    };
};
