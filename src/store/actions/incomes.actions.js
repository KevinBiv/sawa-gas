import actionTypes from "./types";

export const getIncomes = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getIncomes });
  };
};
