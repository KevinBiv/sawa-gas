import actionTypes from "../actions/types";

const initialState = {
  generalStatistics: {
    patients: 145,
    nurses: 210,
    payments: 450,
    reports: 12,
  },
  incomesStatistics: {
    labels: ["21", "22", "23", "24", "25", "26"],
    income_numbers: [1200, 190, 300, 500, 200, 300],
  },
  expensesStatistics: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    income_numbers: [500, 300, 450, 400, 500, 600, 300, 700, 600],
  },
  patientsStatistics: {
    total_patients: 145,
    labels: ["21", "22", "23", "24", "25", "26"],
    income_numbers: [200, 150, 200, 300, 100, 50],
  },
  isFetchingGeneralStatistics: false,
  isFetchingIncomesStatistics: false,
  isFetchingPatientsStatistics: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getGeneralStatistics:
      return {
        ...state,
        isFetchingGeneralStatistics: true,
        errors: null,
      };
    case actionTypes.getGeneralStatisticsSuccess:
      return {
        ...state,
        generalStatistics: action.payload,
        isFetchingGeneralStatistics: false,
      };
    case actionTypes.getGeneralStatisticsFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingGeneralStatistics: false,
      };

    case actionTypes.getIncomesStatistics:
      return {
        ...state,
        isFetchingIncomesStatistics: true,
        errors: null,
      };
    case actionTypes.getIncomesStatisticsSuccess:
      return {
        ...state,
        incomesStatistics: action.payload,
        isFetchingIncomesStatistics: false,
      };
    case actionTypes.getIncomesStatisticsFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingIncomesStatistics: false,
      };

    case actionTypes.getPatientsStatistics:
      return {
        ...state,
        isFetchingPatientsStatistics: true,
        errors: null,
      };
    case actionTypes.getPatientsStatisticsSuccess:
      return {
        ...state,
        patientsStatistics: action.payload,
        isFetchingPatientsStatistics: false,
      };
    case actionTypes.getPatientsStatisticsFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingPatientsStatistics: false,
      };

    default:
      return state;
  }
};
