import axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const url = "cart";


export const getTotalNumbersOfItemsInCart = (userId: string, accessToken: string) => {
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    };
    return axios
        .get(`${API_URL}/${url}/totalNumberOfItemsInCart/${userId}`, {headers})
        .then((res) => res.data)
        .catch((err) => err.response.data);
};

export const getAllItemsInCart = (userId: string, accessToken: string) => {
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    };
    return axios
        .get(`${API_URL}/${url}/all/${userId}`, {headers})
        .then((res) => res.data)
        .catch((err) => err.response.data);
};