import React from "react";

function AlertMessage(props) {
  return (
    <div className="text-xs text-white text-capitalize">{props.message}</div>
  );
}

export default AlertMessage;
