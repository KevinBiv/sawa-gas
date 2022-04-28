import React from "react";
import { IoCloseCircle } from "react-icons/io5";
function DeleteMember({ handleClose }) {
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between items-center">
        <h5 className="text-darkblue font-bold text-base"> Delete member</h5>
        <button type="button" className="" onClick={() => handleClose()}>
          <IoCloseCircle className="text-ligherdarkblue text-3xl" />
        </button>
      </div>
      <p className=" py-3  text-lightgray rounded-b-md  text-sm">
        Are you sure you want to delete this member?
      </p>
      <div className="flex justify-between items-center px-10">
        <button className="bg-red-400 hover:bg-red-500 py-2 px-3 text-white text-sm">
          Delete
        </button>
        <button className="bg-gray-400 hover:bg-gray-500 py-2 px-3 text-white text-sm">
          No, cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteMember;
