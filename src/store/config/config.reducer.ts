import { UPD_CONFIG_VERSION, UPD_CONFIG_BRAND } from "./config.actions";

export interface IAction {
  readonly type: string;
  readonly value: string;
}

export interface IState {
  version: string;
  brand: string;
}

export type TReducer = (state: IState, action: IAction) => IState;

const initialState: IState = {
  version: "0.1.0",
  // TODO: UPDATE
  brand: "JWP | Project",
};

export const configReducer: TReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case UPD_CONFIG_VERSION:
      return {
        ...state,
        version: action.value,
      };
    case UPD_CONFIG_BRAND:
      return {
        ...state,
        brand: action.value,
      };
    default:
      return state;
  }
};
