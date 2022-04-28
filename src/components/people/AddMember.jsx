import React from "react";
import { IoCloseCircle } from "react-icons/io5";
function AddMember({ handleClose }) {
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between items-center">
        <h5 className="text-darkblue font-bold text-base"> Add a member</h5>
        <button type="button" className="" onClick={() => handleClose()}>
          <IoCloseCircle className="text-ligherdarkblue text-4xl" />
        </button>
      </div>
      <form className="space-y-2">
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="employee_name" className="sr-only">
            Employee Name
          </label>
          <input
            type="text"
            name="employee_name"
            id="employee_name"
            autoComplete="employee_name"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Employee Name"
          />
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="age" className="sr-only">
            Age
          </label>
          <input
            type="text"
            name="age"
            id="age"
            autoComplete="age"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Age"
          />
        </div>
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="sex" className="sr-only">
            sex
          </label>
          <select
            id="sex"
            className="text-xs px-7 py-3 border text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
          >
            <option className="text-xs text-lightgray" selected>
              Sex
            </option>
            <option className="text-xs text-lightgray" value="blue">
              Male
            </option>
            <option className="text-xs text-lightgray" value="black">
              Female
            </option>
            <option className="text-xs text-lightgray" value="white">
              Other
            </option>
          </select>
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="sawa_id" className="sr-only">
            Sawa ID
          </label>
          <input
            type="text"
            name="sawa_id"
            id="sawa_id"
            autoComplete="sawa_id"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Sawa ID"
          />
        </div>
        <button className="bg-ligherdarkblue py-2 w-100 text-white text-sm">
          Add Member
        </button>
      </form>
    </div>
  );
}

export default AddMember;
