import { IUser } from "../../interface";
import { IState } from "../../interface/State";
import { Action } from "../action";
import { ActionType } from "../action-types";

const initialState = {
    users: [],
    modalContent: '',
    isOpen: false,
    status: '',
    style: ''
}


const reducer = (state: IState = initialState, action: Action) => {
    switch(action.type){
        case ActionType.FETCH_ALL: 
          return {users: action.payload}
        case ActionType.CREATE_USER:
           const  newUser = [...state.users, action.payload]
           return {...state.users, users: newUser, modalContent: 'User Added', isOpen: true, status: 'OK', style: 'bg-green-600'}
        case ActionType.DELETE_USER:
        const removeUser =  state.users.filter((user) => user._id !== action.payload);   
        return {...state.users, users: removeUser}
        case ActionType.UPDATE_USER:     
        const updatedUser =  state.users.map((user) => (user._id === action.payload._id) ? action.payload : state.users)
        return {...state.users, users: updatedUser, modalContent: 'User Updated', isOpen: true, status: 'OK', style: 'bg-blue-600'}
        case ActionType.EMPTY: 
        return {...state, modalContent: 'Fields Empty', isOpen: true, status: 'Error', style: 'bg-red-600'}
        default:
            return state;
    }
    
}

export default reducer