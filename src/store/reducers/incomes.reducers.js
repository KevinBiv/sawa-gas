import actionTypes from "../actions/types";

const initialState = {
  incomes: [
    {
      id: 1,
      payer_name: "Johnathan Doe",
      nurse_name: "Uwimana Jeanne",
      subscription: "1 Month",
      paymentMode: "MTN Mobile Money",
      amount: "100,000",
    },
    {
      id: 2,
      payer_name: "Johnathan Doe",
      nurse_name: "Uwimana Jeanne",
      subscription: "1 Month",
      paymentMode: "MTN Mobile Money",
      amount: "100,000",
    },
  ],

  isFetchingIncomes: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getIncomes:
      return {
        ...state,
        isFetchingIncomes: true,
        errors: null,
      };
    case actionTypes.getIncomesSuccess:
      return {
        ...state,
        incomes: action.payload,
        isFetchingIncomes: false,
      };
    case actionTypes.getIncomesFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingIncomes: false,
      };
    default:
      return state;
  }
};
