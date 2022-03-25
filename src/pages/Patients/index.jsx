import React, { useState } from "react";
import { useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
function Patients() {
  const { patients, isFetchingPatients } = useSelector(
    ({ Patients }) => Patients
  );
  const [searchText, setSearchText] = useState(null);
  return (
    <div className="pt-20 pb-6  mx-10 space-y-6">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-lg text-darkblue font-bold">Patients</h5>
          <p className="text-sm text-gray-500">All active patients</p>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap ">
          <p className="text-white py-2 px-3 bg-lightgreen font-bold text-sm">
            145 Patients
          </p>
          <NameFilter searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>

      <div className=" rounded-1">
        <div className="  overflow-auto ">
          <table className="table table-borderless  space-y-2 ">
            <thead className="bg-lightgreen rounded-2 ">
              <tr className="border-b-15 border-paleblue">
                <td className="text-white text-sm py-4">Date</td>
                <td className="text-white text-sm py-4">Patient Name</td>
                <td className="text-white text-sm py-4">Nurse Name</td>
                <td className="text-white text-sm py-4">Duration</td>
                <td className="text-white text-sm py-4">Hospital</td>
                <td className="text-white text-sm py-4">Guardian</td>
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
                      (index === 0
                        ? " border-t-8 border-paleblue "
                        : " border-l-25 border-r-25  ") +
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

export default Patients;
