import actionTypes from "../actions/types";

const initialState = {
  reports: [],
  isFetchingReport: false,
  isSendingReport: false,
  isUpdatingReport: false,
  errors: null,
  selectedReport: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getReport:
      return {
        ...state,
        isFetchingReport: true,
        errors: null,
      };
    case actionTypes.getReportSuccess:
      return {
        ...state,
        reports: action.payload,
        isFetchingReport: false,
      };
    case actionTypes.getReportFail:
      return {
        ...state,
        isFetchingReport: false,
        errors: action.payload,
      };
    case actionTypes.sendReport:
      return {
        ...state,
        isSendingReport: true,
        errors: null,
      };
    case actionTypes.sendReportSuccess:
      return {
        ...state,
        isSendingReport: false,
        message: action.payload,
      };
    case actionTypes.sendReportFail:
      return {
        ...state,
        isSendingReport: false,
        errors: action.payload,
      };
    case actionTypes.setSelectedReport:
      return {
        ...state,
        selectedReport: action.payload,
      };
    default:
      return state;
  }
};
