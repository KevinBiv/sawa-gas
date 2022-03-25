import { getUserRequest, loginRequest, updateUserRequest } from "../../api";
import actionTypes from "./types";
import { removeUserStorage, setUserStorage } from "../../utils/userUtils";
import { axiosInstance } from "../../api/config";
import AlertMessage from "../../components/alert/Alert";

export const loginUser = (data, history) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LogUserIn });
    loginRequest(data)
      .then((res) => {
        setUserStorage(res?.data);
        axiosInstance.defaults.headers.common = {
          Authorization: `Bearer ${res?.data.token}`,
        };
        dispatch({
          type: actionTypes.LogUserInSuccess,
          payload: res?.data?.user,
        });
        // history.push("/dashboard/completeprofile");
        // history.push("/dashboard/completeprofile");
      })
      .catch((err) => {
        if (err?.errors) {
          dispatch({ type: actionTypes.LogUserInFail, payload: err.errors });
        } else {
          dispatch({ type: actionTypes.LogUserInFail, payload: err });
        }
      });
  };
};
export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getUser });
    getUserRequest()
      .then((res) => {
        console.log("user:", res);
        dispatch({ type: actionTypes.getUserSuccess, payload: res });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.getUserFail, payload: err });
      });
  };
};
export const updateUser = (data, setEditProfile, activePane, alert) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.updateUser });
    updateUserRequest(data)
      .then((res) => {
        if (res && res.data) {
          if (activePane === "account-details") {
            const user = JSON.parse(localStorage.getItem("user"));
            var userInfo = { token: user?.token, user: res?.data[0] };

            setUserStorage(userInfo);
            dispatch({
              type: actionTypes.updateUserSuccess,
              payload: res?.data[0],
            });
            setEditProfile(false);
            alert.success(
              <AlertMessage message="Profile successfully updated !" />
            );
          } else {
            dispatch({
              type: actionTypes.updateUserSuccess,
              payload: res?.data[0],
            });
            setEditProfile(false);
            alert.success(
              <AlertMessage message="Password successfully updated !" />
            );
          }
        }
      })
      .catch((err) => {
        dispatch({ type: actionTypes.updateUserFail, payload: err });
      });
  };
};
export const onUserLogout = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.LogUserOut });
    removeUserStorage();
  };
};
