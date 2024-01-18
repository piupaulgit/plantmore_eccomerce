import axios from 'axios';

const API_URL = 'http://localhost:8000/api'
const url = "products"

export const getProducts = (payload:any) => {
   let filterString = '?'; let completeUrl;
   Object.keys(payload.filters.filters).forEach((key:string) => {
    if(payload.filters.filters[key]){
        filterString = `${filterString}${key}=${payload.filters.filters[key]}&`
    }
   });
   filterString=filterString.slice(0,-1);

   if(payload.category){
    completeUrl = `${API_URL}/${url}/category/${payload.category}`
    if(payload.category === 'all'){
        completeUrl = `${API_URL}/${url}/all${filterString}`
    }
   }else{
    completeUrl = `${API_URL}/${url}/all${filterString}`
   }

    return axios
        .get(completeUrl)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};

export const getSingleProduct = (payload:any) => {
     return axios
         .get(`${API_URL}/${url}/${payload}`)
         .then((res) => res.data)
         .catch((err) => err.response.data);
 };