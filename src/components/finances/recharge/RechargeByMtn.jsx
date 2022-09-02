import React, { useState } from "react";
import Select from "react-select";
import momo from "../../../assets/images/momo.png";
function RechargeByMtn() {
  const [currencyOptions, setCurrencyOptions] = useState([
    { id: 1, value: "Rwf", label: "Rwf" },
    { id: 1, value: "USD", label: "USD" },
  ]);
  const [selectedCurrencyOption, setSelectedCurrencyOption] = useState({
    id: 1,
    value: "Rwf",
    label: "Rwf",
  });
  return (
    <div>
      <div className="flex space-x-3 items-center">
        <img className="" src={momo} />
        <h5 className="text-base text-lightgray font-bold">MOMO Payment</h5>
      </div>
      <form className="py-3.5 space-y-4">
        <div className="flex space-x-2">
          <div className="rounded-1 flex-1 border border-lightgray rounded-md">
            <label htmlFor="amount" className="sr-only">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              autoComplete="amount"
              className="flex-1 appearance-none rounded-none relative block w-full p-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
              placeholder="Enter amount to recharge with"
            />
          </div>
          <div className="rounded-1 border border-lightgray rounded-md">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <Select
              className="text-xs text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
              defaultValue={selectedCurrencyOption}
              onChange={setSelectedCurrencyOption}
              options={currencyOptions}
              id="currency"
              isSearchable={true}
              placeholder="currency"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-darkblue ">Paying Number</p>
          <label for="card-number" className="text-xs text-lightgray">
            Enter a number to use to pay with
          </label>
          <div className="rounded-1 flex space-x-3 flex-1 border border-lightgray rounded-md">
            <img className="" src={momo} />
            <input
              type="number"
              name="card-number"
              id="card-number"
              autoComplete="card-number"
              className="flex-1 appearance-none rounded-none relative block w-full p-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
              placeholder="**** - **** - **** - ****"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h5 className="text-xs text-gray-700 font-bold">N.B:</h5>
          <p className="text-xs text-lightgray">
            Confirm payment via a code sent to your phone or dial *182*7*1# to
            confirm this transaction your payment will be automatically updated
            in the sawa finances part.
          </p>
        </div>
        <button
          type="button"
          className="text-sm bg-ligherdarkblue bg-opacity-80 hover:bg-opacity-100 text-whitecolor py-2.5 w-full rounded-md "
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default RechargeByMtn;
