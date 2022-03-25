import actionTypes from "../actions/types";

const initialState = {
  people: [
    {
      id: "001",
      full_names: "Uwimana Jeanne",
      age: "28 Years",
      department: "Marketing",
      gender: "Female",
    },
    {
      id: "002",
      full_names: "Umwami George",
      age: "28 Years",
      department: "Marketing",
      gender: "Male",
    },
    {
      id: "003",
      full_names: "Kamikazi Sarah",
      age: "28 Years",
      department: "Marketing",
      gender: "female",
    },
    {
      id: "004",
      full_names: "Uwimana Jeanne",
      age: "28 Years",
      department: "Marketing",
      gender: "Female",
    },
    {
      id: "005",
      full_names: "Umwami George",
      age: "28 Years",
      department: "Marketing",
      gender: "Male",
    },
    {
      id: "006",
      full_names: "Kamikazi Sarah",
      age: "28 Years",
      department: "Marketing",
      gender: "female",
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
