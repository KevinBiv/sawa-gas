import React from "react";
import { renderRoutes } from "react-router-config";
import Sidebar from "./Sidebar";

function DashboardLayout({ route }) {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 w-100 ">
        <main className="bg-paleblue min-h-screen">
          {renderRoutes(route.routes)}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
