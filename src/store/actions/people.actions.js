import actionTypes from "./types";

export const getPeople = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getPeople });
  };
};
