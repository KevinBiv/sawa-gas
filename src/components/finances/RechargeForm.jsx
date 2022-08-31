import React from "react";
import { IoCloseCircle } from "react-icons/io5";

function RechargeForm({ handleClose }) {
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between">
        <div className="space-x-2 flex items-center">
          <h5 className="text-darkblue font-bold text-lg">Recharge</h5>
        </div>
        <button
          className="text-ligherdarkblue text-opacity-80 hover:text-opacity-100"
          onClick={() => handleClose()}
        >
          <IoCloseCircle className=" text-4xl" />
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default RechargeForm;
