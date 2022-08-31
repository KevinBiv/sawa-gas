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
      status: "Completed",
    },
    {
      id: 2,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Fuel",
      staff_name: "Uwimana Jeanne",
      service_name: "Motor ride Payment",
      date: "03 June",
      status: "Processing",
    },
    {
      id: 3,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Taxi Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "Completed",
    },
    {
      id: 4,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Bike Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "Processing",
    },
    {
      id: 5,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Bike Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "Completed",
    },
    {
      id: 6,
      employee_name: "Ishimwe Kevin",
      amount: "100000",
      service: "Bike Ride",
      staff_name: "Uwimana Jeanne",
      service_name: "Pubilc Bus Payment",
      date: "03 June",
      status: "Completed",
    },
  ],
  carTypes: [
    { id: 1, name: "car type 1", value: "car type 1", label: "car type 1" },
    { id: 3, name: "car type 2", value: "car type 2", label: "car type 2" },
    { id: 3, name: "car type 3", value: "car type 3", label: "car type 3" },
  ],
  carProviders: [
    { id: 1, name: "car type 1", value: "car type 1", label: "car type 1" },
    { id: 2, name: "car type 2", value: "car type 2", label: "car type 2" },
    { id: 3, name: "car type 3", value: "car type 3", label: "car type 3" },
  ],

  isFetchingServices: false,
  errors: null,
  message: null,
  selectedService: null,
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

    case actionTypes.setSelectedService:
      return {
        ...state,
        selectedService: action.payload,
      };
    default:
      return state;
  }
};
