import Axios from 'axios';
import { apiConfig, parameters } from './apiConfig';

const URL = apiConfig.baseUrl;

export async function fetchUsers(number: number) {
    const response = await Axios.get(URL, {
        params: parameters(number),
    });

    const { results } = response.data;
    return results;
}
