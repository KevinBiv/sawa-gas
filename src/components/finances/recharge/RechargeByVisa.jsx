import React from "react";
import { useState } from "react";
import Select from "react-select";
import visa from "../../../assets/images/visa.png";

function RechargeByVisa() {
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
        <img className="" src={visa} />
        <h5 className="text-base text-lightgray font-bold">Visa Payment</h5>
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
          <p className="text-sm font-bold text-darkblue ">Card Number</p>
          <label for="card-number" className="text-xs text-lightgray">
            Enter 16 digit card number on the card
          </label>
          <div className="rounded-1 flex space-x-3 flex-1 border border-lightgray rounded-md">
            <img className="" src={visa} />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <p className="text-sm font-bold text-darkblue ">Card Number</p>
            <label for="card-number" className="text-xs text-lightgray">
              Enter 16 digit card number on the card
            </label>
          </div>
          <div className="rounded-1 flex space-x-3 flex-1 border border-lightgray rounded-md">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <p className="text-sm font-bold text-darkblue ">Expiry Date</p>
            <label for="card-number" className="text-xs text-lightgray">
              Enter expiration date of your card
            </label>
          </div>
          <div className="sm:flex items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex-1 rounded-1  border border-lightgray rounded-md">
              <input
                type="time"
                name="start-date"
                id="start-date"
                autoComplete="start-date"
                className="w-full appearance-none rounded-none p-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder=""
              />
            </div>

            <svg
              width="7"
              height="16"
              viewBox="0 0 7 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.535762"
                y1="15.8143"
                x2="6.53576"
                y2="0.814304"
                stroke="#1E355C"
              />
            </svg>

            <div className="flex-1 rounded-1 border border-lightgray rounded-md">
              <input
                type="time"
                name="end-date"
                id="end-date"
                autoComplete="end-date"
                className="w-full appearance-none rounded-none p-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <p className="text-sm font-bold text-darkblue ">Password</p>
            <label for="password" className="text-xs text-lightgray">
              Enter your Dynamic Password
            </label>
          </div>
          <div className="rounded-1 flex space-x-3 flex-1 border border-lightgray rounded-md">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              className="flex-1 appearance-none rounded-none relative block w-full p-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
              placeholder=" ****"
            />
          </div>
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

export default RechargeByVisa;
