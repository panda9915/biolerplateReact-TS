import { IUser } from "../../models";
import { RST_AUTHORIZATION, SET_AUTHORIZATION } from "./authorization.actions";

export interface IState {
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: IUser;
}

export type TReducer = (state: IState, action: any) => IState;

const initialState: IState = {
  accessToken: "",
  refreshToken: "",
  user: {
    id: "",
    username: "",
    createdAt: new Date(),
    email: "",
  },
};

export const authorizationReducer: TReducer = (state: IState = initialState, action: any): IState => {
  switch (action.type) {
    case SET_AUTHORIZATION:
      return {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        user: action.user,
      };
    case RST_AUTHORIZATION:
      return { ...initialState };
    default:
      return state;
  }
};
