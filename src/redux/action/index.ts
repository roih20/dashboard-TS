import { IUser } from "../../interface";
import { ActionType } from "../action-types";


export interface FetchAllAction {
  type: ActionType.FETCH_ALL;
  payload: any;

}

export interface CreateUserAction {
    type: ActionType.CREATE_USER;
    payload: any
}

export interface UpdateUserAction {
    type: ActionType.UPDATE_USER;
    payload: IUser
}

export interface DeleteUserAction {
    type: ActionType.DELETE_USER;
    payload: any;
}

export interface EmptyFieldAction {
    type: ActionType.EMPTY;
}

export interface ILogin {
   type: ActionType.LOGIN;
   data: any;
}

export interface IRegister {
    type: ActionType.REGISTER;
    data: any;
}

export interface ILogOut {
    type: ActionType.LOG_OUT;
    data: any
}

export type Action = FetchAllAction | CreateUserAction | UpdateUserAction | DeleteUserAction | EmptyFieldAction | ILogin | IRegister | ILogOut