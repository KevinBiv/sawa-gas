import React from "react";
import { renderRoutes } from "react-router-config";

function AuthLayout({ route }) {
  return (
    <div className="grid grid-cols-2">
      <div className=" ">{renderRoutes(route.routes)}</div>
      <div></div>
    </div>
  );
}

export default AuthLayout;
