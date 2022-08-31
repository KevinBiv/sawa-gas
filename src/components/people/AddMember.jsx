import React from "react";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import Select from "react-select";
function AddMember({ handleClose }) {
  const [genderOptions, setGenderOptions] = useState([
    { value: "Male", label: "Male", id: 1 },
    { value: "Female", label: "Female", id: 2 },
    { value: "Other", label: "Other", id: 3 },
  ]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [sawaIdExist, setSawaIdExist] = useState(false);
  const [sawaIdExistChecked, setSawaIdExistChecked] = useState(
    sawaIdExist === true ? true : false
  );
  console.log("sawaIdExist:", sawaIdExist);
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between items-center">
        <h5 className="text-darkblue font-bold text-base"> Add a member</h5>
        <button type="button" className="" onClick={() => handleClose()}>
          <IoCloseCircle className="text-ligherdarkblue text-4xl" />
        </button>
      </div>
      <form className="space-y-2">
        {/* <div className=" text-sm mx-3  text-blue-500">
            <p>{sawaIdExist ? "Free course" : "Paid course"}</p>
          </div> */}
        <div class="form-check" className="border-0 text-sm  space-x-2">
          <input
            type="checkbox"
            class="form-check-input"
            id="freecourse"
            value={sawaIdExist}
            checked={sawaIdExist === true && sawaIdExistChecked ? true : false}
            onChange={() => {
              setSawaIdExist(!sawaIdExist);
              setSawaIdExistChecked(!sawaIdExistChecked);
            }}
          />
          <label class="form-check-label" for="freecourse">
            Sawa ID exists
          </label>
        </div>
        {sawaIdExist ? (
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
        ) : null}
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="employee_name" className="sr-only">
            Employee Name
          </label>
          <input
            type="text"
            name="employee_name"
            id="employee_name"
            disabled={sawaIdExist ? true : false}
            autoComplete="employee_name"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Employee Name"
          />
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="department" className="sr-only">
            Department
          </label>
          <input
            type="text"
            name="department"
            id="department"
            autoComplete="department"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Department"
            disabled={sawaIdExist ? true : false}
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
            disabled={sawaIdExist ? true : false}
          />
        </div>
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="sex" className="sr-only">
            sex
          </label>
          <Select
            className="text-xs text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={genderOptions}
            id="sex"
            isDisabled={sawaIdExist ? true : false}
            isSearchable={true}
            placeholder="sex"
          />
        </div>

        <button
          type="button"
          onClick={() => handleClose()}
          className="bg-ligherdarkblue py-2 w-100 text-white text-sm"
        >
          Add Member
        </button>
      </form>
    </div>
  );
}

export default AddMember;
