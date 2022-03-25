import actionTypes from "./types";

export const getServices = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getServices });
  };
};
