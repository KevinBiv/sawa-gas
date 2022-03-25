import actionTypes from "../actions/types";

const initialState = {
  services: [
    {
      id: 1,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Bus Fare",
      staff_name: "Uwimana Jeanne",
      service_name: "Taxi Cab Payment",
      date: "03 June",
      status: "paid",
    },
    {
      id: 2,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Fuel",
      staff_name: "Uwimana Jeanne",
      service_name: "Motor ride Payment",
      date: "03 June",
      status: "unpaid",
    },
    {
      id: 3,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Taxi Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "paid",
    },
    {
      id: 4,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Bike Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "unpaid",
    },
    {
      id: 5,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Bike Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "paid",
    },
    {
      id: 6,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Bike Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "paid",
    },
  ],
  isFetchingServices: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getServices:
      return {
        ...state,
        isFetchingServices: true,
        errors: null,
      };
    case actionTypes.getServicesSuccess:
      return {
        ...state,
        services: action.payload,
        isFetchingServices: false,
      };
    case actionTypes.getServicesFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingServices: false,
      };
    default:
      return state;
  }
};
