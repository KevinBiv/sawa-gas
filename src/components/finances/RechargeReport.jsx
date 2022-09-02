import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { Modal } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import DayFilter from "../../components/filters/DayFilter";
import TotalExpenses from "../../components/statistics/TotalExpenses";
import FilterReport from "../../components/finances/FilterReport";
function RechargeReport() {
  const { rechargeReport, isFetchingRechargeReport } = useSelector(
    ({ Finances }) => Finances
  );
  const [searchText, setSearchText] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <div className="sm:flex items-center sm:space-x-3 space-y-2 md:space-y-0 ">
        <DayFilter
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <div>
          <select className="bg-white rounded-sm relative block w-full px-3 py-2 placeholder-lightgray text-lightgray rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 text-xs">
            <option selected className="text-xs text--lightgray">
              Sort Department
            </option>
            <option className="text-xs text-lightgray" value="Marketing">
              Marketing
            </option>
            <option className="text-xs text-lightgray" value="Production">
              Production
            </option>
          </select>
        </div>
        <NameFilter searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className=" px-3 py-3.5 lg:py-4 overflow-auto ">
        <table className="table table-borderless  space-y-2 ">
          <thead className="bg-darkblue rounded-md  border-darkblue ">
            <tr className=" rounded-md border-paleblue">
              <td className="text-white text-sm py-4">Date</td>
              <td className="text-white text-sm py-4">Recharge by</td>
              <td className="text-white text-sm py-4">Amount</td>
            </tr>
          </thead>
          <tbody className="bg-white rounded-2 border-white relative w-100 top-5">
            {isFetchingRechargeReport ? (
              <TableRowShimmers cols={6} />
            ) : (
              rechargeReport &&
              rechargeReport !== 0 &&
              rechargeReport.map((report, index) => (
                <tr
                  className={
                    (index === 0 ? " border-paleblue " : " border-t-2 ") +
                    "items-center bg-whitecolor  hover:bg-paleblue  rounded-xl"
                  }
                  key={index}
                >
                  <td className="font-bold text-xs py-3 text-gray-700 ">
                    {report?.date ?? "-"}
                  </td>
                  <td className="font-bold text-xs py-3 text-boldgray ">
                    {report?.method ?? "-"}
                  </td>
                  <td className="font-bold text-xs py-3 text-ligherdarkblue">
                    {report?.amount ?? "-"} Rwf
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {rechargeReport &&
        rechargeReport.length === 0 &&
        !isFetchingRechargeReport ? (
          <p className=" my-20 bg-boldgray py-3 text-sm  text-center w-100">
            no finances yet !
          </p>
        ) : null}
      </div>
      <div className="bg-white rounded-md p-3 flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          className="px-10 py-2 bg-ligherdarkblue opacity-80 hover:opacity-100  text-white text-sm rounded-md "
        >
          {" "}
          Generate Report
        </button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body className="bg-paleindigo ">
          <FilterReport handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RechargeReport;
