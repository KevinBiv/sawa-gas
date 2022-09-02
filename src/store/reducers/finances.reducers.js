import actionTypes from "../actions/types";

const initialState = {
  finances: [
    {
      id: 1,
      volume: "5 Top Ups",
      amount: "100,000",
      expense: "Tap and Go",
      date: "01-01-2022",
    },
    {
      id: 2,
      volume: "5 Top Ups",
      amount: "50,000",
      expense: "Car Rental",
      date: "03-01-2022",
    },
    {
      id: 3,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Fuel Card",
      date: "06-01-2022",
    },
    {
      id: 4,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Taxi Fare",
      date: "06-01-2022",
    },
    {
      id: 5,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Bike Fare",
      date: "06-01-2022",
    },
    {
      id: 6,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Bike Fare",
      date: "06-01-2022",
    },
  ],
  expensesReport: [
    {
      id: 1,
      volume: "5 Top Ups",
      amount: "100,000",
      expense: "Tap and Go",
      date: "01-01-2022",
    },
    {
      id: 2,
      volume: "5 Top Ups",
      amount: "50,000",
      expense: "Car Rental",
      date: "03-01-2022",
    },
    {
      id: 3,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Fuel Card",
      date: "06-01-2022",
    },
    {
      id: 4,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Taxi Fare",
      date: "06-01-2022",
    },
    {
      id: 5,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Bike Fare",
      date: "06-01-2022",
    },
    {
      id: 6,
      volume: "4 Top Ups",
      amount: "80,000",
      expense: "Bike Fare",
      date: "06-01-2022",
    },
  ],
  rechargeReport: [
    {
      id: 1,
      amount: "100,000",
      method: "Mtn money",
      date: "01-01-2022",
    },
    {
      id: 2,
      amount: "50,000",
      method: "Visa card",
      date: "03-01-2022",
    },
    {
      id: 3,
      amount: "80,000",
      method: "Mtn money",
      date: "06-01-2022",
    },
    {
      id: 4,
      amount: "80,000",
      method: "Airtel money",
      date: "06-01-2022",
    },
    {
      id: 5,
      amount: "80,000",
      method: "Master card",
      date: "06-01-2022",
    },
    {
      id: 6,
      amount: "80,000",
      method: "Airtel money",
      date: "06-01-2022",
    },
  ],
  isFetchingFinances: false,
  isFetchingExpensesReport: false,
  isFetchingRechargeReport: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getExpensesReport:
      return {
        ...state,
        isFetchingRechargeReport: true,
        errors: null,
      };
    case actionTypes.getExpensesReportSuccess:
      return {
        ...state,
        expensesReport: action.payload,
        isFetchingExpensesReport: false,
      };
    case actionTypes.getExpensesReportFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingExpensesReport: false,
      };

    case actionTypes.getRechargeReport:
      return {
        ...state,
        isFetchingRechargeReport: true,
        errors: null,
      };
    case actionTypes.getRechargeReportSuccess:
      return {
        ...state,
        rechargeReport: action.payload,
        isFetchingRechargeReport: false,
      };
    case actionTypes.getRechargeReportFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingRechargeReport: false,
      };
    default:
      return state;
  }
};
