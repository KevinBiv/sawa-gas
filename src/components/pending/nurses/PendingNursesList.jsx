import React, { useState } from "react";
import userImg from "../../../assets/images/nurse 3.png";
import { ImSearch } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { onSetSelectedNurse } from "../../../store/actions";
function PendingNursesList() {
  const { pendingNurses, isFetchingPendingNurses } = useSelector(
    ({ Nurses }) => Nurses
  );
  const [searchText, setSearchText] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="space-y-6">
      <div className="flex space-x-2">
        <div className="flex space-x-3 flex-1 items-center bg-white rounded-2xl">
          <ImSearch className="text-gray-700 ml-2 text-3xl" />
          <input
            id="searchtxt"
            name="searchtxt"
            type="searchtxt"
            onChange={(e) => setSearchText(e.target.value)}
            required
            placeholder="Search a nurse"
            className="appearance-none rounded-none relative block w-full  py-2 placeholder-darkblue text-gray-900 rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
          />
          <button className="text-sm bg-lightgreen hover:opacity-70 p-2 rounded-circle">
            Go
          </button>
        </div>
        <p className="text-sm text-white bg-lightgreen py-1 px-3 rounded-xl inline-flex items-center">
          80 pending
        </p>
      </div>
      <div className="bg-white p-4 rounded-xl">
        {[1, 2, 3].map((nurse, index) => (
          <div
            className={
              (index !== 0 ? "border-t-4 border-paleblue" : " ") +
              " flex justify-between items-center py-3"
            }
          >
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 flex items-center rounded-3xl">
                <img className="object-cover" src={userImg} alt="User" />
              </div>
              <p className="text-sm text-darkblue">Uwimana Jeanne</p>
            </div>
            <button
              onSubmit={() => {
                dispatch(onSetSelectedNurse(nurse));
              }}
              className="text-sm rounded-2xl bg-lightgreen py-1 px-2 text-white hover:opacity-70"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingNursesList;
