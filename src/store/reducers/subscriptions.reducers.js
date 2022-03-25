import actionTypes from "../actions/types";

const initialState = {
  subscriptions: [],
  isCreatingSubscription: false,
  isFetchingSubscriptions: false,
  isUpdatingSubscription: false,
  isDeletingSubscription: false,
  selectedSubscription: null,
  errors: null,
  message: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getSubscriptions:
      return {
        ...state,
        errors: null,
        isFetchingSubscriptions: true,
      };
    case actionTypes.getSubscriptionsSuccess:
      return {
        ...state,
        subscriptions: action.payload,
        isFetchingSubscriptions: false,
      };
    case actionTypes.getSubscriptionsFail:
      return {
        ...state,
        errors: action.payload,
        isFetchingSubscriptions: false,
      };
    case actionTypes.setSelectedSubscriptions:
      return {
        ...state,
        selectedSubscription: action.payload,
      };
    default:
      return state;
  }
};
