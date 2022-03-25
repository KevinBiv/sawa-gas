import actionTypes from "./types";

export const onSetSelectedChart = (chart) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setSelectedChart, payload: chart });
  };
};
