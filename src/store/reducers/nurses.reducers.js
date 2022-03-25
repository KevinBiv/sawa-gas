import actionTypes from "../actions/types";

const initialState = {
  nurses: [
    {
      id: 1,
      nurse_name: "uwase Jane",
      rating: "4.2",
      status: "available",
      age: "28 Years",
      gender: "Female",
      patients: "32",
    },
    {
      id: 2,
      nurse_name: "Umwali Georgia",
      rating: "4.5",
      status: "Available",
      age: "28 Years",
      gender: "Female",
      patients: "32",
    },
    {
      id: 2,
      nurse_name: "Kamikazi Sarah",
      rating: "4.2",
      status: "Available",
      age: "28 Years",
      gender: "Female",
      patients: "32",
    },
  ],
  pendingNurses: [
    {
      id: 1,
      phone: "12507856345",
      email: "Available",
      age: "28 Years",
      gender: "Female",
      bachelorsdegree: "",
      nationalidcard: "",
      criminalRecord: "",
      biography:
        "Fugiat anim ullamco esse reprehenderit. Consequat amet nostrud nulla irure nostrud labore id dolore Lorem id cupidatat ad cupidatat. Culpa elit Lorem aliquip incididunt quis incididunt dolore proident officia officia dore in. Laborum eu nostrud consectetur velit sunt proident dolor. Quis amet eu cillum veniam veniam Lorem eu aute laborum sunt tempor dolore ex. Laboris id labore magna ipsum ullamco id irure esse.",
    },
    {
      id: 2,
      nurse_name: "Umwali Georgia",
      phone: "12507856345",
      email: "Available",
      age: "28 Years",
      gender: "Female",
      bachelorsdegree: "",
      nationalidcard: "",
      criminalRecord: "",
      biography:
        "Fugiat anim ullamco esse reprehenderit. Consequat amet nostrud nulla irure nostrud labore id dolore Lorem id cupidatat ad cupidatat. Culpa elit Lorem aliquip incididunt quis incididunt dolore proident officia officia dore in. Laborum eu nostrud consectetur velit sunt proident dolor. Quis amet eu cillum veniam veniam Lorem eu aute laborum sunt tempor dolore ex. Laboris id labore magna ipsum ullamco id irure esse.",
    },
    {
      id: 3,
      nurse_name: "Kamikazi Sarah",
      phone: "12507856345",
      email: "Available",
      age: "28 Years",
      gender: "Female",
      bachelorsdegree: "",
      nationalidcard: "",
      criminalRecord: "",
      biography:
        "Fugiat anim ullamco esse reprehenderit. Consequat amet nostrud nulla irure nostrud labore id dolore Lorem id cupidatat ad cupidatat. Culpa elit Lorem aliquip incididunt quis incididunt dolore proident officia officia dore in. Laborum eu nostrud consectetur velit sunt proident dolor. Quis amet eu cillum veniam veniam Lorem eu aute laborum sunt tempor dolore ex. Laboris id labore magna ipsum ullamco id irure esse.",
    },
  ],
  selectedNurse: null,
  isFetchingNurses: false,
  isFetchingPendingNurses: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getNurses:
      return {
        ...state,
        isFetchingNurses: true,
        errors: null,
      };
    case actionTypes.getNursesSuccess:
      return {
        ...state,
        nurses: action.payload,
        isFetchingNurses: false,
      };
    case actionTypes.getNursesSuccess:
      return {
        ...state,
        errors: action.payload,
        isFetchingNurses: false,
      };
    case actionTypes.getPendingNurses:
      return {
        ...state,
        isFetchingPendingNurses: true,
        errors: null,
      };
    case actionTypes.getPendingNursesSuccess:
      return {
        ...state,
        pendingNurses: action.payload,
        isFetchingPendingNurses: false,
      };
    case actionTypes.getPendingNursesFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingPendingNurses: false,
      };
    case actionTypes.setSelectedNurse:
      return {
        ...state,
        selectedNurse: action.payload,
      };

    default:
      return state;
  }
};
