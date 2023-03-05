import { useQuery } from "react-query";
import { ListType } from "../interfaces/common";
import {
  fetchGetBrands,
  fetchGetInfringement,
  fetchGetModels,
  fetchGetVehicles,
} from "./request";

const querys = {
  brands: () => ["brands"],
  vehicles: () => ["vehicles"],
  infringements: () => ["infringements"],
  models: () => ["models"],
};

export const useBrands = () => {
  return useQuery<ListType[]>(querys.brands(), fetchGetBrands);
};

export const useVehicle = () => {
  return useQuery<ListType[]>(querys.vehicles(), fetchGetVehicles);
};

export const useInfringement = () => {
  return useQuery<ListType[]>(querys.infringements(), fetchGetInfringement);
};

export const useModel = () => {
  return useQuery<ListType[]>(querys.models(), fetchGetModels);
};

export const useListForm = () => {
  const brands = useBrands();
  const vehicles = useVehicle();
  const infring = useInfringement();
  const models = useModel();
  return { brands, vehicles, infring, models };
};
