import actionTypes from "./types";

export const getNurses = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getNurses });
  };
};
export const getPendingNurses = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getPendingNurses });
  };
};
export const onSetSelectedNurse = (nurse) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setSelectedNurse, payload: nurse });
  };
};
