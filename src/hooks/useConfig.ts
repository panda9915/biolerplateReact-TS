import { shallowEqual, useDispatch } from "react-redux";
import { UPD_CONFIG_BRAND, UPD_CONFIG_VERSION } from "../store/config/config.actions";
import { useStore } from "./useStore";

type TSetVersion = (value: string) => void;
type TSetBrand = (value: string) => void;

type TUseConfig = () => {
  version: string;
  setVersion: TSetVersion;
  brand: string;
  setBrand: TSetBrand,
};

export const useConfig: TUseConfig = () => {
  const dispatch = useDispatch();
  const { version, brand } = useStore((store) => store.config, shallowEqual);

  const setVersion: TSetVersion = (value: string): void => {
    dispatch({ type: UPD_CONFIG_VERSION, value });
  };

  const setBrand: TSetBrand = (value: string): void => {
    dispatch({ type: UPD_CONFIG_BRAND, value });
  };

  return { version, setVersion, brand, setBrand };
};
