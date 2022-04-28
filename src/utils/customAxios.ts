import axios from 'axios'
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import CONFIG from '../config'

const customAxios = axios.create({
    baseURL: CONFIG.cafeAPI.baseURL,
    timeout: CONFIG.cafeAPI.timeout,
    // headers: { Authorization: "Bearer " + localStorage.getItem("Bearer") || "qwe123" }
});

customAxios.interceptors.request.use(
    (config) => {
        config.headers = {
            Authorization: "Bearer " + localStorage.getItem("Bearer") || "unlogged"
        }
        console.log(config)
        return config;
    },
    (error) => console.log(error),
);

const responseBody = (res:any) => res.body;

const requests = {
    del: (url: string) =>
        customAxios.delete(url),
    get: (url: string) =>
        customAxios.get(url),
    put: (url: string, body: any) =>
        customAxios.put(url, body),
    post: (url: string, body: any) =>
        customAxios.post(url, body)
};

const authService = {
    current: () =>
        requests.get('/user/getname'),
    login: (userName: string, password: string) =>{
        requests.post('/user/login', { userName, password }).then(response => {
            localStorage.setItem("Bearer", response.data)
        });
    },
    isLogged: ()=>{
        return localStorage.getItem("Bearer") != "unlogged";
    }
    // register: (username: any, email: any, password: any) =>
    //     requests.post('/users', { user: { username, email, password } })
};

export {requests, authService}
