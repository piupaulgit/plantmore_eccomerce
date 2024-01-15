import axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const url = "banner"

export const getAllBanners = () => {
    return axios
        .get(`${API_URL}/${url}/all`)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};