import actionTypes from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
console.log("user:", user);
const initialState = {
  userInfo: user?.user ?? null,
  loggedIn: user ? true : false,

  isFetchingUser: false,
  isUpdatingUser: false,
  errors: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LogUserIn:
      return {
        ...state,
        isFetchingUser: true,
      };
    case actionTypes.LogUserInSuccess:
      return {
        ...state,
        userInfo: action.payload,
        loggedIn: true,
        isFetchingUser: false,
        errors: null,
      };

    case actionTypes.LogUserInFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingUser: false,
      };
    case actionTypes.LogUserOut:
      return {
        ...state,
        loggedIn: false,
        userInfo: null,
      };
    case actionTypes.getUser:
      return {
        ...state,
        isFetchingUser: true,
      };
    case actionTypes.getUserSuccess:
      return {
        ...state,
        userInfo: action.payload,
        isFetchingUser: false,
        errors: null,
      };

    case actionTypes.getUserFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingUser: false,
      };
    case actionTypes.updateUser:
      return {
        ...state,
        isUpdatingUser: true,
      };
    case actionTypes.updateUserSuccess:
      return {
        ...state,
        userInfo: action.payload,
        isUpdatingUser: false,
        errors: null,
      };

    case actionTypes.updateUserFail:
      return {
        ...state,
        errors: action.payload,
        isUpdatingUser: false,
      };
    default:
      return state;
  }
};
