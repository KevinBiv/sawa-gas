import React from "react";
import { useAlert } from "react-alert";
import AlertMessage from "../components/alert/Alert";
export function useErrorMessage() {
  const alert = useAlert();

  return alert.error(
    <AlertMessage message="You seem to be offline, Check your network connection !" />
  );
}
