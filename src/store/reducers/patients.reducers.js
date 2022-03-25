import actionTypes from "../actions/types";

const initialState = {
  patients: [
    {
      id: 1,
      patient_name: "Ishimwe Kevin",
      nurse_name: "uwase Jane",
      duration: "1 Month",
      hospital: "King Faisal",
      guardian: "John Doe",
      date: "03 June",
    },
    {
      id: 1,
      patient_name: "Uwase Derice",
      nurse_name: "Umwiza Ange",
      duration: "1 Month",
      hospital: "CHUK",
      guardian: "Kalisa James",
      date: "03 June",
    },
    {
      id: 2,
      patient_name: "Ishimwe Kevin",
      nurse_name: "uwase Jane",
      duration: "1 Month",
      hospital: "King Faisal",
      guardian: "John Doe",
      date: "03 June",
    },
    {
      id: 3,
      patient_name: "Uwase Derice",
      nurse_name: "Umwiza Ange",
      duration: "1 week",
      hospital: "CHUK",
      guardian: "Kalisa James",
      date: "03 June",
    },
    {
      id: 1,
      patient_name: "Ishimwe Kevin",
      nurse_name: "uwase Jane",
      duration: "1 Month",
      hospital: "King Faisal",
      guardian: "John Doe",
      date: "03 June",
    },
    {
      id: 1,
      patient_name: "Uwase Derice",
      nurse_name: "Umwiza Ange",
      duration: "1 week",
      hospital: "CHUK",
      guardian: "Kalisa James",
      date: "03 June",
    },
  ],
  isFetchingPatients: false,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getPatients:
      return {
        ...state,
        isFetchingPatients: true,
        errors: null,
      };
    case actionTypes.getPatientsSuccess:
      return {
        ...state,
        patients: action.payload,
        isFetchingPatients: false,
      };
    case actionTypes.getPatientsFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingPatients: false,
      };
    default:
      return state;
  }
};
