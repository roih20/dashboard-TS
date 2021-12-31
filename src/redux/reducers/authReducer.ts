import { IAuth } from "../../interface/State";
import { Action } from "../action";
import { ActionType } from "../action-types";


const initialState = {
    authData: null,
    isOpen: false,
    modalContent: '',
    style: '',
    status: ''
}

const authReducer = (state: IAuth = initialState, action: Action) => {
    switch(action.type){
        case ActionType.LOGIN: 
        localStorage.setItem('profile', JSON.stringify({...action?.data}))
        return {...state.authData , authData: action.data}
        case ActionType.REGISTER: 
        return {...state.authData, authData: action.data, isOpen: true, modalContent: 'User created', style: 'bg-green-500', status: 'OK' };
        case ActionType.LOG_OUT:
        localStorage.clear()
        
        return {...state.authData, authData: null}
     default: 
         return state;
    }

}



export default authReducer;