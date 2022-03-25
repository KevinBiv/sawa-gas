import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import carImg from "../../../assets/images/car 2.png";
function OrderCar({ handleCloseOrder }) {
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between">
        <div className="space-x-2 flex items-center">
          <img src={carImg} className="object-cover -mr-4" alt="Car" />
          <h5 className="text-darkblue font-bold text-lg"> Top up a card</h5>
        </div>
        <button className="" onClick={() => handleCloseOrder()}>
          <IoCloseCircle className="text-ligherdarkblue text-4xl" />
        </button>
      </div>
    </div>
  );
}

export default OrderCar;
