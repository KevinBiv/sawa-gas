import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import visa from "../../assets/images/visa.png";
import momo from "../../assets/images/momo.png";
import airtelMoney from "../../assets/images/airtel money.png";
import mastercard from "../../assets/images/mastercard.png";
import { useState } from "react";
import RechargeByVisa from "./recharge/RechargeByVisa";
import RechargeByMtn from "./recharge/RechargeByMtn";
import RechargeByAirtel from "./recharge/RechargeByAirtel";
import RechargeByMastercard from "./recharge/RechargeByMastercard";
function RechargeForm({ handleClose }) {
  const [selectedRechargeOption, setSelectedRechargeOption] = useState("Visa");
  return (
    <div className="bg-white space-y-4 p-6 sm:p-10">
      <div className="flex justify-end">
        <button
          className="text-ligherdarkblue text-opacity-80 hover:text-opacity-100"
          onClick={() => handleClose()}
        >
          <IoCloseCircle className=" text-4xl" />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-4 md:gap-x-10 sm:grid-cols-3">
        <div className=" ">
          <div className="mb-3.5">
            <h5 className="text-darkblue font-bold text-xl">Add Balance</h5>
          </div>
          <div className=" bg-paleindigo rounded-md p-3.5 space-y-6">
            <h5 className="text-sm text-lightgray">Recharge Via..</h5>
            <div className="flex flex-col justify-between space-y-10">
              <div>
                <div className="flex justify-between p-1.5 rounded-md items-center">
                  <div className="flex space-x-3 items-center">
                    <img className="" src={visa} />
                    <p className="text-xs text-lightgray">Visa Card</p>
                  </div>
                  <input
                    type="radio"
                    value="Visa"
                    checked={selectedRechargeOption === "Visa"}
                    onChange={() => setSelectedRechargeOption("Visa")}
                  />
                </div>
                <div className="flex justify-between p-1.5 rounded-md items-center">
                  <div className="flex space-x-3 items-center">
                    <img className="" src={momo} />
                    <p className="text-xs text-lightgray">MTN Mobile Money</p>
                  </div>
                  <input
                    type="radio"
                    value="MTN"
                    checked={selectedRechargeOption === "MTN"}
                    onChange={() => setSelectedRechargeOption("MTN")}
                  />
                </div>
                <div className="flex justify-between p-1.5 rounded-md items-center">
                  <div className="flex space-x-3 items-center">
                    <img className="" src={airtelMoney} />
                    <p className="text-xs text-lightgray">
                      Airtel Mobile Money
                    </p>
                  </div>
                  <input
                    type="radio"
                    value="Airtel"
                    checked={selectedRechargeOption === "Airtel"}
                    onChange={() => setSelectedRechargeOption("Airtel")}
                  />
                </div>
                <div className="flex justify-between p-1.5 rounded-md items-center">
                  <div className="flex space-x-3 items-center">
                    <img className="" src={mastercard} />
                    <p className="text-xs text-lightgray">Master Card</p>
                  </div>
                  <input
                    type="radio"
                    value="Master Card"
                    checked={selectedRechargeOption === "Master Card"}
                    onChange={() => setSelectedRechargeOption("Master Card")}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-xs text-gray-700 font-bold">N.B:</h5>
              <p className="text-xs text-lightgray">
                Doing a top up via one of the methods mentioned above will
                automatically update your current funds on sawa.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 charge">
          {(() => {
            switch (selectedRechargeOption) {
              case "Visa":
                return <RechargeByVisa />;
              case "MTN":
                return <RechargeByMtn />;
              case "Airtel":
                return <RechargeByAirtel />;
              case "Master Card":
                return <RechargeByMastercard />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default RechargeForm;
