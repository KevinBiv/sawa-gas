import React, { useState } from "react";
import NurseReport from "../../components/report/NurseReport";
import ReportsList from "../../components/report/ReportsList";

function Reports() {
  return (
    <div className="min-h-screen  grid grid-cols-1 md:grid-cols-3 md:gap-4">
      <ReportsList />
      <NurseReport />
    </div>
  );
}

export default Reports;
