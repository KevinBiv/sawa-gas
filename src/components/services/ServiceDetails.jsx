import React from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function ServiceDetails() {
  const { selectedService } = useSelector(({ Services }) => Services);
  const history = useHistory();
  return (
    <div className="flex space-x-4 sm:space-x-10 flex-wrap p-10">
      <div className="flex justify-between items-center  w-100">
        <h5 className="text-xl font-bold text-darkblue mb-2">
          {selectedService?.service_name}
        </h5>
        <p className="text-sm text-lightblack font-normal">
          {selectedService?.date}
        </p>
      </div>
      <div className="space-y-2 ">
        <p className="text-sm text-darkblue font-bold ">
          Employee :{" "}
          <span className="text-sm text-lightblack font-normal">
            {selectedService?.employee_name}
          </span>
        </p>
        <p className="text-sm text-darkblue font-bold ">
          Service:{" "}
          <span className="text-sm text-lightblack font-normal">
            {selectedService?.service}
          </span>
        </p>
        <p className="text-sm text-darkblue font-bold  ">
          Amount:{" "}
          <span className=" text-sm text-lightblack font-normal">
            {selectedService?.amount}
          </span>
        </p>
        <p className="text-sm text-darkblue font-bold ">
          Status:{" "}
          <span className="text-sm text-lightblack font-normal">
            {selectedService?.status}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ServiceDetails;
