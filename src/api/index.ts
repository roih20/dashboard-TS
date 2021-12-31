import axios, {AxiosRequestConfig, AxiosRequestHeaders} from "axios";
import { IFormLogin, IFormRegistration, IUser } from "../interface";



const token = localStorage.getItem('profile') as string



const API = axios.create({baseURL: 'http://localhost:5000', headers: {
   
}})


API.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
 if(token){
     config.headers.Authorization =  `Bearer ${JSON.parse(token).token}` 
 }
    console.log(config);
    return config
}, error => {
    return Promise.reject((error))
}) 




export const fetchUsers = () => API.get('/users');
export const createUser = (newUser: any) => API.post('/users', newUser);
export const updateUser = (id:string, updateUser: any) => API.patch(`/users/${id}`, updateUser);
export const deleteUser = (id: string) => API.delete(`/users/${id}`);

export const logInUser = (formData: IFormLogin) => API.post('/auth/login', formData);
export const registerUser = (formData: IFormRegistration) => API.post('/auth/register', formData)