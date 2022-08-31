import actionTypes from "../actions/types";

const initialState = {
  people: [
    {
      id: "001",
      full_names: "Uwimana Jeanne",
      age: "28 Years",
      department: "Marketing",
      gender: "Female",
      label: "Uwimana Jeanne",
      value: "Uwimana Jeanne",
    },
    {
      id: "002",
      full_names: "Umwami George",
      age: "28 Years",
      department: "Marketing",
      gender: "Male",
      label: "Umwami George",
      value: "Umwami George",
    },
    {
      id: "003",
      full_names: "Kamikazi Sarah",
      age: "28 Years",
      department: "Marketing",
      gender: "female",
      label: "Kamikazi Sarah",
      value: "Kamikazi Sarah",
    },
    {
      id: "004",
      full_names: "Uwimana Jeanne",
      age: "28 Years",
      department: "Marketing",
      gender: "Female",
      label: "Uwimana Jeanne",
      value: "Uwimana Jeanne",
    },
    {
      id: "005",
      full_names: "Umwami George",
      age: "28 Years",
      department: "Marketing",
      gender: "Male",
      label: "Umwami George",
      value: "Umwami George",
    },
    {
      id: "006",
      full_names: "Kamikazi Sarah",
      age: "28 Years",
      department: "Marketing",
      gender: "female",
      label: "Kamikazi Sarah",
      value: "Kamikazi Sarah",
    },
    {
      id: "007",
      full_names: "Kamikazi Sarah",
      age: "28 Years",
      department: "Marketing",
      gender: "female",
      label: "Kamikazi Sarah",
      value: "Kamikazi Sarah",
    },
  ],
  isFetchingPeople: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getPeople:
      return {
        ...state,
        isFetchingPeople: true,
        errors: null,
      };
    case actionTypes.getPeopleSuccess:
      return {
        ...state,
        people: action.payload,
        isFetchingPeople: false,
      };
    case actionTypes.getPeopleFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingPeople: false,
      };
    default:
      return state;
  }
};
