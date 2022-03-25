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
  isFetchingFinances: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getFinances:
      return {
        ...state,
        isFetchingFinances: true,
        errors: null,
      };
    case actionTypes.getFinancesSuccess:
      return {
        ...state,
        finances: action.payload,
        isFetchingFinances: false,
      };
    case actionTypes.getFinancesFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingFinances: false,
      };
    default:
      return state;
  }
};
