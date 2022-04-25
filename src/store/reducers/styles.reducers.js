import actionTypes from "../actions/types";

const initialState = {
  showSidebar: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setShowSidebar:
      return {
        ...state,
        showSidebar: action.payload,
      };
    default:
      return state;
  }
};
