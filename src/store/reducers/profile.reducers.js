import actionTypes from "../actions/types";

const initialState = {
  profile: null,

  creatingProfile: false,
  fetchingProfile: true,
  updatingProfile: false,
  accountApproved: false,

  availability: null,
  creatingAvailability: false,
  fetchingAvailability: false,
  updatingAvailability: false,

  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.createProfile:
      return {
        ...state,
        errors: null,
        creatingProfile: true,
      };
    case actionTypes.createProfileSuccess:
      return {
        ...state,
        message: action.payload,
        creatingProfile: false,
      };
    case actionTypes.createProfileFail:
      return {
        ...state,
        errors: action.payload,
        creatingProfile: false,
      };
    case actionTypes.getProfile:
      return {
        ...state,
        errors: null,
        fetchingProfile: true,
      };
    case actionTypes.getProfileSuccess:
      return {
        ...state,
        profile: action.payload,
        fetchingProfile: false,
      };
    case actionTypes.getProfileFail:
      return {
        ...state,
        errors: action.payload,
        fetchingProfile: false,
      };
    case actionTypes.updateProfile:
      return {
        ...state,
        errors: null,
        updatingProfile: true,
      };
    case actionTypes.updateProfileSuccess:
      return {
        ...state,
        message: action.payload,
        updatingProfile: false,
      };
    case actionTypes.updateProfileFail:
      return {
        ...state,
        errors: action.payload,
        updatingProfile: false,
      };

    case actionTypes.createAvailability:
      return {
        ...state,
        errors: null,
        creatingAvailability: true,
      };
    case actionTypes.createAvailabilitySuccess:
      return {
        ...state,
        message: action.payload,
        creatingAvailability: false,
      };
    case actionTypes.createAvailabilityFail:
      return {
        ...state,
        errors: action.payload,
        creatingAvailability: false,
      };
    case actionTypes.getAvailability:
      return {
        ...state,
        errors: null,
        fetchingAvailability: true,
      };
    case actionTypes.getAvailabilitySuccess:
      return {
        ...state,
        availability: action.payload,
        fetchingAvailability: false,
      };
    case actionTypes.getAvailabilityFail:
      return {
        ...state,
        errors: action.payload,
        fetchingAvailability: false,
      };
    case actionTypes.updateAvailability:
      return {
        ...state,
        errors: null,
        updatingAvailability: true,
      };
    case actionTypes.updateAvailabilitySuccess:
      return {
        ...state,
        message: action.payload,
        updatingAvailability: false,
      };
    case actionTypes.updateAvailabilityFail:
      return {
        ...state,
        errors: action.payload,
        updatingAvailability: false,
      };

    default:
      return state;
  }
};
