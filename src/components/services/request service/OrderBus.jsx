import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import vanImg from "../../../assets/images/van 1.png";
function OrderBus({ handleCloseOrder, handleClose }) {
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between">
        <div className="space-x-2 flex items-center">
          <img src={vanImg} className="object-cover" alt="bus" />
          <h5 className="text-darkblue font-bold text-lg"> Top up a card</h5>
        </div>
        <button className="" onClick={() => handleCloseOrder()}>
          <IoCloseCircle className="text-ligherdarkblue text-4xl" />
        </button>
      </div>
      <form className="space-y-2">
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="bus-type" className="sr-only">
            Select bus Type
          </label>
          <select
            id="bus-type"
            className="text-xs px-3 py-2 border text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
          >
            <option className="text-xs text-lightgray" selected>
              Select bus Type
            </option>
            <option className="text-xs text-lightgray" value="blue">
              bus 1
            </option>
            <option className="text-xs text-lightgray" value="black">
              bus 2
            </option>
            <option className="text-xs text-lightgray" value="white">
              bus 3
            </option>
          </select>
        </div>
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="people" className="sr-only">
            Select people to tranport
          </label>
          <select
            id="people"
            className="text-xs px-3 py-2 border text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
          >
            <option className="text-xs text-lightgray" selected>
              Select people to tranport
            </option>
            <option className="text-xs text-lightgray" value="blue">
              person 1
            </option>
            <option className="text-xs text-lightgray" value="black">
              person 2
            </option>
            <option className="text-xs text-lightgray" value="white">
              person 3
            </option>
          </select>
        </div>
        <div className="flex items-end bg-white pl-3 rounded-1">
          <label htmlFor="start-date" className="text-sm text-lightgray pt-1">
            when do you need it
          </label>
          <input
            type="date"
            name="start-date"
            id="start-date"
            autoComplete="start-date"
            className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Start Date"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col rounded-1">
            <label htmlFor="from" className="text-xs sr-only">
              From
            </label>
            <input
              type="text"
              name="from"
              id="from"
              autoComplete="from"
              className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
              placeholder="From"
            />
          </div>
          <div className="flex flex-col   rounded-1">
            <label htmlFor="to" className="sr-only">
              to
            </label>
            <input
              type="text"
              name="to"
              id="to"
              autoComplete="to"
              className="flex-1 appearance-none bg-white rounded-none relative block w-full px-3 py-2 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
              placeholder="To"
            />
          </div>
        </div>
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="provider" className="sr-only">
            select a bus Provider
          </label>
          <select
            id="provider"
            className="text-xs px-3 py-2 border text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
          >
            <option className="text-xs text-lightgray" selected>
              select a bus Provider
            </option>
            <option className="text-xs text-lightgray" value="blue">
              provider1
            </option>
            <option className="text-xs text-lightgray" value="black">
              provider2
            </option>
            <option className="text-xs text-lightgray" value="white">
              provider3
            </option>
          </select>
        </div>
        <div className="flex items-center justify-between bg-white px-3 rounded-1">
          <label class="text-xs text-lightgray py-0.5" for="exampleCheck1">
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
          className="bg-ligherdarkblue py-2 w-100 text-white text-sm"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default OrderBus;
