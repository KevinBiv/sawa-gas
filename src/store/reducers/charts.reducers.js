import actionTypes from "../actions/types";

const initialState = {
  charts: [
    {
      id: 1,
      client_name: "Uwase Daniella",
      client_about: "Anne’s Guardian",
      conversations: [
        {
          id: 1,
          date: "2 Feb 2021",
          latestMessage: "Hey there how’s anne !",
          messages: [{ message: "Hey there how’s anne !", reply: "" }],
        },
      ],
    },
    {
      id: 2,
      client_name: "Care Connect",
      client_about: "Paul’s Guardian",
      conversations: [
        {
          id: 1,
          date: "10 Feb 2021",
          latestMessage: "Hey how’s your work today!",
          messages: [{ message: "Hey how’s your work today!", reply: "" }],
        },
      ],
    },
    {
      id: 3,
      client_name: "John Doe",
      client_about: "Charlie’s Guardian",
      conversations: [
        {
          id: 1,
          date: "22 Feb 2021",
          latestMessage: "Hey there how’s anne !",
          messages: [{ message: "Hey there how’s anne !", reply: "" }],
        },
      ],
    },
  ],
  isFetching: false,
  isSending: false,
  isUpdating: false,
  errors: null,
  selectedChart: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getCharts:
      return {
        ...state,
        isFetching: true,
        errors: null,
      };
    case actionTypes.getChartsSuccess:
      return {
        ...state,
        charts: action.payload,
        isFetching: false,
      };
    case actionTypes.getChartsFail:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      };
    case actionTypes.sendChart:
      return {
        ...state,
        isSending: true,
        errors: null,
      };
    case actionTypes.sendChartSuccess:
      return {
        ...state,
        isSending: false,
        message: action.payload,
      };
    case actionTypes.sendChartFail:
      return {
        ...state,
        isSending: false,
        errors: action.payload,
      };
    case actionTypes.setSelectedChart:
      return {
        ...state,
        selectedChart: action.payload,
      };
    default:
      return state;
  }
};
