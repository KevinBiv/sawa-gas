import actionTypes from "../actions/types";

const initialState = {
  people: [
    {
      id: "001",
      full_names: "Uwimana Jeanne",
      department: "100,000",
      age: "Marketing",
      sex: "Marketing",
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
