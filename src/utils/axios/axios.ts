import axios from 'axios';
import { getDataStorage } from '../storage/handle-get-storage';
import { EXPO_PUBLIC_API_URL } from "@env";


export const api = axios.create({
  baseURL: EXPO_PUBLIC_API_URL
});

getDataStorage({key: '@iforth_login'}).then(result => {
  console.log(result)
  if(result){ 

    const token = JSON.parse(result)?.token
    return api.defaults.headers['Authorization'] = `Bearer ${token}`
  } 
});
