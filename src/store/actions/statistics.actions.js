import actionTypes from "./types";

export const getGeneralStatistics = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getGeneralStatistics });
  };
};
export const getIncomesStatistics = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getIncomesStatistics });
  };
};
