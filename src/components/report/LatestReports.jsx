import React from "react";
import userImg from "../../assets/images/nurse 2.png";
function LatestReports() {
  return (
    <div>
      {" "}
      <h2 className="font-bold text-darkblue text-base my-2">Reports</h2>
      {[1, 2, 3].map((report, index) => (
        <div className="p-2 flex space-x-3 bg-white rounded-2">
          <div className="relative  flex items-center w-14 h-14">
            <img src={userImg} alt="Profile" className="" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-darkblue font-bold">Uwase Jeanne</p>
            <span className="text-xs text-gray-700">10 Minutes ago</span>
            <button className="text-sm text-lightgreen hover:opacity-70 block w-100 text-end">
              Read Report
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestReports;
