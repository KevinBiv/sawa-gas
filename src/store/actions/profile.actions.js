import {
  createAvailabilityRequest,
  createProfileRequest,
  fetchAvailabilityRequest,
  fetchProfileRequest,
  updateAvailabilityRequest,
  updateProfileRequest,
} from "../../api";
import actionTypes from "./types";
import AlertMessage from "../../components/alert/Alert";
export const createProfile = (data, alert, next) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.createProfile });
    createProfileRequest(data)
      .then((res) => {
        dispatch({ type: actionTypes.createProfileSuccess });
        next();
        alert.success(<AlertMessage message="Documents saved !" />);
      })
      .catch((err) => {
        if (err?.errors) {
          dispatch({
            type: actionTypes.createProfileFail,
            payload: err?.errors,
          });
        } else {
          dispatch({ type: actionTypes.createProfileFail, payload: err });
        }
      });
  };
};
export const getProfile = (history, alert) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getProfile });
    fetchProfileRequest()
      .then((res) => {
        dispatch({
          type: actionTypes.getProfileSuccess,
          payload: (res?.data && res?.data[0]) || null,
        });
        // if (history && alert && !res?.data[0]) {
        //   history.push("/dashboard/completeprofile");
        //   alert.info(<AlertMessage message="Please complete your profile" />);
        // }
      })
      .catch((err) => {
        dispatch({ type: actionTypes.getProfileFail, payload: err });
      });
  };
};
export const updateProfile = (data, setEditProfile, alert) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.updateProfile });
    updateProfileRequest(data)
      .then((res) => {
        dispatch({
          type: actionTypes.updateProfileSuccess,
          payload: res,
        });
        setEditProfile(false);
        alert.success(
          <AlertMessage message="Personal details successfully updated." />
        );
      })
      .catch((err) => {
        dispatch({ type: actionTypes.updateProfileFail, payload: err });
      });
  };
};
export const createAvailability = (
  data,
  subscription_plan_id,
  alert,
  history
) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.createAvailability });
    createAvailabilityRequest(data, subscription_plan_id)
      .then((res) => {
        dispatch({ type: actionTypes.createAvailabilitySuccess, payload: res });
        history.push("/dashboard/profile");
        alert.success(
          <AlertMessage message="Availability successfully registered." />
        );
      })
      .catch((err) => {
        if (err?.errors) {
          dispatch({
            type: actionTypes.createAvailabilityFail,
            payload: err.errors,
          });
        } else {
          dispatch({ type: actionTypes.createAvailabilityFail, payload: err });
        }
      });
  };
};
export const getAvailability = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getAvailability });
    fetchAvailabilityRequest()
      .then((res) => {
        dispatch({
          type: actionTypes.getAvailabilitySuccess,
          payload: (res?.data && res?.data[0]) || null,
        });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.getAvailabilityFail, payload: err });
      });
  };
};
export const updateAvailability = (data, setEditProfile, alert) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.updateAvailability });
    updateAvailabilityRequest(data)
      .then((res) => {
        dispatch({
          type: actionTypes.updateAvailabilitySuccess,
          payload: res,
        });
        setEditProfile(false);
        alert.success(
          <AlertMessage message="Availability successfully updated !" />
        );
      })
      .catch((err) => {
        dispatch({ type: actionTypes.updateAvailabilityFail, payload: err });
      });
  };
};
