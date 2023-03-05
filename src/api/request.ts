import { ListType } from "../interfaces/common";
import { AxiosConfig } from "./axios-config";

//GET BRANDS
export const fetchGetBrands = async () => {
  const { data } = await AxiosConfig.get<ListType[]>("/brands");
  return data;
};

//GET VEHICLES
export const fetchGetVehicles = async () => {
  const { data } = await AxiosConfig.get<ListType[]>("/vehicle-types");
  return data;
};

//GET INFRINGMENT
export const fetchGetInfringement = async () => {
  const { data } = await AxiosConfig.get<ListType[]>("/infraction-types");
  return data;
};

//GET MODELS
export const fetchGetModels = async () => {
  const { data } = await AxiosConfig.get<ListType[]>("/models");
  return data;
};
