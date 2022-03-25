import actionTypes from "./types";

export const getPatients = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getPatients });
  };
};
