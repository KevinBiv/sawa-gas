import actionTypes from "./types";

export const getServices = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getServices });
  };
};

export const setSelectedService = (service) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setSelectedService, payload: service });
  };
};
