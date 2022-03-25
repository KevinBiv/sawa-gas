import { axiosInstance } from "./config";
//Aunthentication
export const registerRequest = (data) => axiosInstance.post("/nurse", data);
export const loginRequest = (data) => axiosInstance.put("/auth/login", data);
export const getUserRequest = () => axiosInstance.get("/account");
export const updateUserRequest = (data) =>
  axiosInstance.post("/nurse/update", data);
//Profile
export const createProfileRequest = (data) =>
  axiosInstance.post("/nurse/profile", data);
export const fetchProfileRequest = () => axiosInstance.get("/nurse/profile");
export const updateProfileRequest = (data) =>
  axiosInstance.post("/nurse/profile/update", data);

export const createAvailabilityRequest = (data, subscription_plan_id) =>
  axiosInstance.post(
    "/nurse/availability?subscription_plan_id=" + subscription_plan_id,
    data
  );
export const fetchAvailabilityRequest = () =>
  axiosInstance.get("/nurse/availability");
export const updateAvailabilityRequest = (data) =>
  axiosInstance.put("/nurse/availability", data);
//Subscriptions
export const fetchSubscriptionsRequest = () => axiosInstance.get("/plan");
//Reports
export const sendReportRequest = (data) =>
  axiosInstance.post("/nurse/report", data);
export const fetchReportsRequest = () => axiosInstance.get("/nurse/report");
//Charts
