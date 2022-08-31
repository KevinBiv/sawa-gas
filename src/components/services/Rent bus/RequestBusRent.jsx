import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import vanImg from "../../../assets/images/van.png";
import Select from "react-select";
function RequestBusRent({ handleCloseOrder, handleClose }) {
  const { carProviders, carTypes } = useSelector(({ Services }) => Services);
  const [selectedCarType, setSelectedCarType] = useState(null);
  const [selectedCarProvider, setSelectedCarProvider] = useState(null);
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between">
        <div className="space-x-2 flex items-center">
          <img src={vanImg} className="object-cover h-6 w-6" alt="bus" />
          <h5 className="text-darkblue font-bold text-lg"> Rent a bus</h5>
        </div>
        <button
          className="text-ligherdarkblue text-opacity-80 hover:text-opacity-100"
          onClick={() => handleCloseOrder()}
        >
          <IoCloseCircle className=" text-4xl" />
        </button>
      </div>
      <form className="space-y-2">
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="car-type" className="sr-only">
            Car Type
          </label>
          <Select
            className="text-xs text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
            defaultValue={selectedCarType}
            onChange={setSelectedCarType}
            options={carTypes}
            id="car-type"
            isSearchable={true}
            placeholder="Select Car Type"
          />
        </div>

        <div className=" flex items-center bg-white rounded- ">
          <label htmlFor="people" className="sr-only">
            Number of people to tranport
          </label>
          <input
            type="number"
            name="Number-of-people"
            id="Number-of-people"
            autoComplete="Number of  people to tranport"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
            placeholder="Number of  people to tranport"
          />
        </div>
        <div className="flex items-end rounded-1">
          <label htmlFor="start-date" className="text-sm text-darkblue pt-1">
            when do you need it
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center space-x-3 pl-5 bg-white rounded-1">
            <label htmlFor="from" className="text-xs text-boldgray">
              From
            </label>

            <input
              type="date"
              name="start-date"
              id="start-date"
              autoComplete="start-date"
              className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
              placeholder="Start Date"
            />
          </div>
          <div className="flex items-center pl-5 space-x-3 bg-white rounded-1">
            <label htmlFor="to" className="text-xs text-boldgray">
              to
            </label>

            <input
              type="date"
              name="start-date"
              id="start-date"
              autoComplete="start-date"
              className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
              placeholder="Start Date"
            />
          </div>
        </div>
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="car-provider" className="sr-only">
            Car Provider
          </label>
          <Select
            className="text-xs text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
            defaultValue={selectedCarProvider}
            onChange={setSelectedCarProvider}
            options={carProviders}
            id="car-provider"
            isSearchable={true}
            placeholder="Select Car Provider"
          />
        </div>
        <div className="flex items-center justify-between bg-white px-3 py-3 rounded-1">
          <label class="text-xs text-boldgray py-0.5" for="exampleCheck1">
            Accept quotations
          </label>
          <input type="checkbox" className="" id="exampleCheck1" />
        </div>
        <button
          type="button"
          onClick={() => {
            handleCloseOrder();
            handleClose();
          }}
          className="bg-ligherdarkblue opacity-80 hover:opacity-100 rounded-sm py-3 w-100 text-white text-sm"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default RequestBusRent;
