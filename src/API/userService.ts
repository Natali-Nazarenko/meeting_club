import Axios from 'axios';
import { apiConfig } from './apiConfig';

Axios.defaults.baseURL = apiConfig.baseUrl;

async function fetchUsers() {
    const response = await Axios.get(
        '?results=20&inc=dob,gender,location,name,phone,picture,registered&seed=abc',
    );
    const { results } = response.data;
    console.log('usersService: ', results);
    return results;
}

export const usersApi = {
    fetchUsers,
};
