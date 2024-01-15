import axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const url = "products"

export const getProducts = (payload:any) => {
   let filterString = '?';
   Object.keys(payload.filters).forEach((key:string) => {
    if(payload.filters[key]){
        filterString = `${filterString}${key}=${payload.filters[key]}&`
    }
   });
   filterString=filterString.slice(0,-1);

    return axios
        .get(`${API_URL}/${url}/all${filterString}`)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};

export const getSingleProduct = (payload:any) => {
     return axios
         .get(`${API_URL}/${url}/${payload}`)
         .then((res) => res.data)
         .catch((err) => err.response.data);
 };