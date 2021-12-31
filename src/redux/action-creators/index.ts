import {Dispatch } from 'redux'
import {Action} from '../action';
import * as api from '../../api//index'
import { ActionType } from '../action-types';
import { IFormLogin, IFormRegistration, IUser } from '../../interface';
import { NavigateFunction } from 'react-router-dom';

export const getUser = () => async (dispatch: Dispatch<Action>) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({type: ActionType.FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createUser = (user: any) => async (dispatch: Dispatch<Action>) => {
    try {
        const {data} = await api.createUser(user);
        dispatch({type: ActionType.CREATE_USER, payload: data})

    } catch (error) {
        console.log(error)
    }
    
}

export const updateUser = (id: string, updatedUser: any) => async (dispatch: Dispatch<Action>) => {
   
    try {
        const  { data } = await api.updateUser(id, updatedUser);
        dispatch({type: ActionType.UPDATE_USER, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
         await api.deleteUser(id);
        dispatch({type: ActionType.DELETE_USER, payload: id});
    } catch (error) {
        console.log(error)
    }
    
}

export const emptyField = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({type: ActionType.EMPTY})
    }
}


export const logUser = (formData: IFormLogin, navigate: NavigateFunction) =>async (dispatch: Dispatch<Action>) => {
    try {
        const { data }  = await api.logInUser(formData);

        dispatch({type: ActionType.LOGIN, data})
        
        navigate('/dashboard/get-users');

    } catch (error) {
        console.log(error)
    }
    
}

export const registerUser = (formData: IFormRegistration) => async (dispatch: Dispatch<Action>) => {
    try {
       const { data } = await api.registerUser(formData)
       dispatch({type: ActionType.REGISTER, data})
    } catch (error) {
        console.log(error);
    }
}