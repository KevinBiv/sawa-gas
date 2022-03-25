import { fetchSubscriptionsRequest } from "../../api";
import actionTypes from "./types";

export const getSubscriptions = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getSubscriptions });
    fetchSubscriptionsRequest()
      .then((res) => {
        dispatch({
          type: actionTypes.getSubscriptionsSuccess,
          payload: res?.data,
        });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.getSubscriptionsFail });
      });
  };
};
export const onSetSelectedSubscription = (subscription) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.setSelectedSubscriptions,
      payload: subscription,
    });
  };
};
