import { useDispatch } from "react-redux";
import { useStore } from "./useStore";
import { RST_AUTHORIZATION, SET_AUTHORIZATION } from "../store/authorization/authorization.actions";
import { useLoader } from "./useLoader";
import { JWT } from "../utils";
import { IUser } from "../models";

type TUseAuthorization = () => {
  isAuthorized: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUser;
  setAuthorization: (token: string, user: IUser, refresh?: string) => void;
  resetAuthorization: () => void;
};

export const useAuthorization: TUseAuthorization = () => {
  const loader = useLoader();
  const dispatch = useDispatch();
  const { accessToken, refreshToken, user } = useStore((store) => store.authorization);

  const { isValid, isActive } = JWT.parseAndValidateToken(accessToken);

  const setAuthorization = (token: string, user: IUser, refresh: string | undefined): void => {
    dispatch({ type: SET_AUTHORIZATION, jsonWebToken: token, refreshToken: refresh, user });
  };

  const resetAuthorization = (): void => {
    const logout = loader.create("Processing logout...");

    logout.start();

    const ref = setTimeout(() => {
      dispatch({ type: RST_AUTHORIZATION });

      logout.stop();

      clearTimeout(ref);
    }, 1000);
  };

  return {
    isAuthorized: isValid() && isActive(),
    accessToken,
    refreshToken,
    user,
    setAuthorization,
    resetAuthorization,
  };
};
