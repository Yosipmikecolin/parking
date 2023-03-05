import axios from "axios";

export const AxiosConfig = axios.create({
  baseURL: "https://parking-wchn.onrender.com/api/vehicle",
});
