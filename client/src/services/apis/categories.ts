import axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const url = "category"

export const getAllCategories = () => {
    return axios
        .get(`${API_URL}/${url}/all`)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};