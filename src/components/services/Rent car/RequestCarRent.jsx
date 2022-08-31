import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import carImg from "../../../assets/images/car 2.png";
import Select from "react-select";
function RequestCarRent({ handleClose, handleCloseOrder }) {
  const [ordercarDriver, setOrderCarDriver] = useState(false);
  const { carProviders, carTypes } = useSelector(({ Services }) => Services);
  const [selectedCarType, setSelectedCarType] = useState(null);
  const [selectedCarProvider, setSelectedCarProvider] = useState(null);
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between">
        <div className="space-x-2 flex items-center">
          <img src={carImg} className="object-cover h-6 w-6" alt="Car" />
          <h5 className="text-darkblue font-bold text-lg">Rent a car</h5>
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
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className={
              (!ordercarDriver
                ? " bg-ligherdarkblue text-whitecolor"
                : " bg-whitecolor text-boldgray") +
              " text-sm w-100 rounded-md py-3"
            }
            onClick={() => setOrderCarDriver(false)}
          >
            Without a driver
          </button>
          <button
            type="button"
            className={
              (ordercarDriver
                ? " bg-ligherdarkblue text-whitecolor"
                : " bg-whitecolor text-boldgray") +
              " text-sm w-100 rounded-md py-2"
            }
            onClick={() => setOrderCarDriver(true)}
          >
            With a driver
          </button>
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="going-to" className="sr-only">
            Going to
          </label>
          <input
            type="text"
            name="going-to"
            id="going-to"
            autoComplete="going-to"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
            placeholder="Going to"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col rounded-1">
            <label htmlFor="start-date" className="text-xs text-boldgray">
              Start Date
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
          <div className="flex flex-col   rounded-1">
            <label htmlFor="end-date" className="text-xs text-boldgray">
              End Date
            </label>
            <input
              type="date"
              name="end-date"
              id="end-date"
              autoComplete="end-date"
              className="flex-1 appearance-none bg-white rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
              placeholder="End Date"
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
            Receive Proposals
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

export default RequestCarRent;
