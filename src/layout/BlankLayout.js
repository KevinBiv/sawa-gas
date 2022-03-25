import React from "react";
import { renderRoutes } from "react-router-config";

function BlankLayout({ route }) {
  return <>{renderRoutes(route.routes)}</>;
}

export default BlankLayout;
