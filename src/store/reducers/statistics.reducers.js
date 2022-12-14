import actionTypes from "../actions/types";

const initialState = {
  generalStatistics: {
    balance: 145,
    people: 210,
    expenses: 450,
  },
  incomesStatistics: {
    labels: ["Bus", "Bike", "Taxi", "Fuel", "Cab", "Bicycle", "School Bus"],
    income_numbers: [56, 85, 28, 32, 9, 3, 27],
  },
  expensesStatistics: {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    income_numbers: [500, 300, 450, 400, 500, 600, 300],
  },

  totalExpensesStatistics: {
    total_expenses: 145,
    labels: ["cab", "taxi", "bus", "bike", "fuel", "taxi"],
    income_numbers: [20, 10, 20, 30, 10, 50],
  },

  isFetchingGeneralStatistics: false,
  isFetchingIncomesStatistics: false,
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

    default:
      return state;
  }
};
