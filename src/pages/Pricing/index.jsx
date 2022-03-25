import { Tab } from "bootstrap";
import React from "react";
import PlanForm from "../../components/pricing/PlanForm";
import PlansList from "../../components/pricing/PlansList";
function Pricing() {
  return (
    <div className="pt-20 pb-6  mx-10 space-y-6  ">
      <div>
        <h5 className="text-lg text-darkblue font-bold">Pricing</h5>
        <p className="text-sm text-gray-500">All Pricing information</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 plan">
        <PlanForm />
        <PlansList />
      </div>
    </div>
  );
}

export default Pricing;
