import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableRowShimmers from "../loaders/TableRowShimmers";
function LatestPatients() {
  const { patients, isFetchingPatients } = useSelector(
    ({ Patients }) => Patients
  );
  return (
    <div>
      {" "}
      <h2 className="font-bold text-darkblue text-base my-2">
        Latest Patients
      </h2>
      <div className=" rounded-1">
        <div className="  overflow-auto ">
          <table className="table table-borderless  space-y-2 ">
            <thead className="bg-white rounded-2 border-r-15 border-white border-l-15">
              <tr>
                <td className="text-gray-600 text-sm py-4">Date</td>
                <td className="text-gray-600 text-sm py-4">Patient Name</td>
                <td className="text-gray-600 text-sm py-4">Nurse Name</td>
                <td className="text-gray-600 text-sm py-4">Duration</td>
                <td className="text-gray-600 text-sm py-4">Hospital</td>
                <td className="text-gray-600 text-sm py-4">Guardian</td>
              </tr>
            </thead>
            <tbody className="bg-white rounded-2 border-r-15 border-white border-l-15 border-b-15">
              {isFetchingPatients ? (
                <TableRowShimmers cols={6} />
              ) : (
                patients &&
                patients.length !== 0 &&
                patients.map((patient, index) => (
                  <tr
                    className={
                      (index === 0 ? " border-t-8 border-paleblue " : " ") +
                      (index % 2 == 0
                        ? " bg-whitecolor "
                        : " bg-paleblue rounded-xl ") +
                      "items-center"
                    }
                    key={index}
                  >
                    {/* <td className="font-bold text-xs  py-4 text-blue-500"> {(payment.created_at&&payment.created_at.substring(0, 10))??"-"}</td> */}
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {patient?.date}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {patient?.patient_name}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {patient?.nurse_name}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {patient?.duration}
                    </td>

                    <td className="font-bold text-xs py-4 text-darkblue">
                      {patient?.hospital}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {patient?.guardian}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {patients && patients.length === 0 && !isFetchingPatients ? (
            <p className=" my-20 bg-gray-300 py-3 text-sm  text-center w-100">
              no patients yet !
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default LatestPatients;
