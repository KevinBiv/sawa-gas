import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReport } from "../../store/actions";
import ReportDocument from "./ReportDocument";
import userImg from "../../assets/images/nurse 2.png";
function ReportsList() {
  const { reports, isFetchingReport, selectedReport } = useSelector(
    ({ Reports }) => Reports
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReport());
  }, []);
  return (
    <div className=" py-16 px-10 md:h-screen md:sticky md:top-0  overflow-auto">
      <div className="flex space-x-3 items-center">
        <h2 className="font-bold text-base text-darkblue  my-3">Reports</h2>
        <p className=" bg-lightgreen px-4 text-white text-sm rounded-xl py-2">
          9 New
        </p>
      </div>

      <ul className="space-y-3">
        {[1, 2, 3].map((report, index) => (
          <div className="p-2 flex space-x-3 bg-white rounded-2">
            <div className="relative  flex items-center w-14 h-14">
              <img src={userImg} alt="Profile" className="" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-darkblue font-bold">Uwase Jeanne</p>
              <span className="text-xs text-gray-700">10 Minutes ago</span>
              <button className="text-sm text-lightgreen hover:opacity-70 w-100 text-end flex items-center space-x-3">
                <p>Read Report</p>
                <svg
                  width="9"
                  height="10"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.37967 4.17163L8.55903 1.47442C8.98176 0.951241 8.60939 0.171631 7.93677 0.171631L1.59054 0.171631C0.917925 0.171631 0.545558 0.951243 0.968287 1.47442L3.14765 4.17163H1.59054C0.917925 4.17163 0.545558 4.95124 0.968287 5.47442L4.1414 9.40152C4.4616 9.7978 5.06572 9.7978 5.38592 9.40152L8.55903 5.47442C8.98176 4.95124 8.60939 4.17163 7.93677 4.17163H6.37967Z"
                    fill="#34BEB9"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ReportsList;
