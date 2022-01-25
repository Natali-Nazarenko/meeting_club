import Axios from 'axios';
import { apiConfig } from './apiConfig';

Axios.defaults.baseURL = apiConfig.baseUrl;

export async function fetchUsers(number: number) {
    let response;
    if (number > 1) {
        response = await Axios.get(
            `?page=${number}&results=10&inc=dob,gender,location,name,phone,picture,registered,login&seed=abc`,
        );
    } else {
        response = await Axios.get(
            `?page=1&results=20&inc=dob,gender,location,name,phone,picture,registered,login&seed=abc`,
        );
    }
    const { results } = response.data;
    return results;
}
