import actionTypes from "./types";

export const getExpensesReport = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getExpensesReport });
  };
};
export const getRechargeReport = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getRechargeReport });
  };
};
