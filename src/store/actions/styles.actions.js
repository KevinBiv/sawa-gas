import actionTypes from "./types";

export const setShowSidebar = (state) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setShowSidebar, payload: state });
  };
};
