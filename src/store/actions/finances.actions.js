import actionTypes from "./types";

export const getFinances = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getFinances });
  };
};
