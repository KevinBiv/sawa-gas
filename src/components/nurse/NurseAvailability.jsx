import React from "react";

function NurseAvailability() {
  return (
    <div>
      <div className="md:flex md:space-x-4 ">
        <h5 className="text-xl font-bold text-darkblue">Availability</h5>
        <div className="flex-1 space-y-3 sm:space-y-0 space-x-3 sm:flex">
          <p className="bg-lightgreen  px-3 py-1.5 text-white text-sm rounded-xl">
            {" "}
            3 days
          </p>
          <p className="bg-lightgreen  px-3 py-1.5 text-white text-sm rounded-xl">
            18:00PM - 8:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}

export default NurseAvailability;
