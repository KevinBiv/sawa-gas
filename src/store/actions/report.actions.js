import { fetchReportsRequest, sendReportRequest } from "../../api";
import AlertMessage from "../../components/alert/Alert";
import actionTypes from "./types";

export const sendReport = (data, alert) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.sendReport });
    sendReportRequest(data)
      .then((res) => {
        dispatch({
          type: actionTypes.sendReportSuccess,
          payload: res?.data,
        });
        alert.success(<AlertMessage message="Report successfully sent ." />);
      })
      .catch((err) => {
        if (err?.errors) {
          dispatch({ type: actionTypes.sendReportFail, payload: err?.errors });
        } else {
          dispatch({ type: actionTypes.sendReportFail, payload: err });
        }
      });
  };
};
export const getReport = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.getReport });
    fetchReportsRequest()
      .then((res) => {
        console.log("reports", res);
        dispatch({
          type: actionTypes.getReportSuccess,
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.getReportFail, payload: err });
      });
  };
};
export const onSetSelectedReport = (report) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setSelectedReport, payload: report });
  };
};
