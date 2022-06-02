import React from "react";

import RecentServices from "../../components/services/RecentServices";
import GeneralStatistics from "../../components/statistics/GeneralStatistics";

import LatestExpenses from "../../components/statistics/LatestExpenses";
import ServiceUsage from "../../components/statistics/ServiceUsage";

function Home() {
  return (
    <div className=" min-h-screen">
      <div className="col-span-2 md:pt-14 pb-6 space-y-6 mx-6 sm:mx-10">
        <h2 className="font-bold text-darkblue text-2xl ">Dashboard</h2>
        <GeneralStatistics />
        <LatestExpenses />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-4 ">
          <RecentServices />
          <ServiceUsage />
        </div>
      </div>
    </div>
  );
}

export default Home;
