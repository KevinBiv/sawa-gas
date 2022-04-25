import { axiosInstance } from "./config";
//Aunthentication
export const registerRequest = (data) =>
  axiosInstance.post("/account/group/create", data);
export const loginRequest = (data) =>
  axiosInstance.put("/account/group/create", data);
export const getUserRequest = () => axiosInstance.get("/account/group/create");
export const updateUserRequest = (data) =>
  axiosInstance.post("/account/group/create", data);
