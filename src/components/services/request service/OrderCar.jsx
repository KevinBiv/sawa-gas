import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import carImg from "../../../assets/images/car 2.png";
function OrderCar({ handleClose, handleCloseOrder }) {
  const [ordercarDriver, setOrderCarDriver] = useState(false);
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
          <label htmlFor="staff" className="sr-only">
            Select Car Type
          </label>
          <select
            id="staff"
            className="text-xs px-3 py-3 border text-boldgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
          >
            <option className="text-xs text-boldgray" selected>
              Select Car Type
            </option>
            <option className="text-xs text-boldgray" value="blue">
              car1
            </option>
            <option className="text-xs text-boldgray" value="black">
              car2
            </option>
            <option className="text-xs text-boldgray" value="white">
              car3
            </option>
          </select>
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
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
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
              className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
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
              className="flex-1 appearance-none bg-white rounded-none relative block w-full px-3 py-3 placeholder-boldgray text-boldgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
              placeholder="End Date"
            />
          </div>
        </div>
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="provider" className="sr-only">
            select a car Provider
          </label>
          <select
            id="provider"
            className="text-xs px-3 py-3 border text-boldgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
          >
            <option className="text-xs text-boldgray" selected>
              select a car Provider
            </option>
            <option className="text-xs text-boldgray" value="blue">
              provider1
            </option>
            <option className="text-xs text-boldgray" value="black">
              provider2
            </option>
            <option className="text-xs text-boldgray" value="white">
              provider3
            </option>
          </select>
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

export default OrderCar;
