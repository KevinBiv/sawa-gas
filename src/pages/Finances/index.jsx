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
function Finances() {
  const { finances, isFetchingFinances } = useSelector(
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
    <div className="md:pt-14 pb-6 mx-6 sm:mx-10 ">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-3xl text-darkblue font-bold">Finances</h5>
          <p className="text-sm text-lightergray font-semibold mb-3.5 xl:mb-0">
            Team Consuptions
          </p>
        </div>
        <div className="sm:flex items-center sm:space-x-3 space-y-2 md:space-y-0 ">
          <DayFilter
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <div>
            <select className=" rounded-sm relative block w-full px-3 py-2 placeholder-lightgray text-lightgray rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 text-xs">
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
      </div>

      <div className=" rounded-1 grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gay-y-0 lg:gap-x-4">
        <TotalExpenses />

        <div className="col-span-2 ">
          <div className=" px-3 py-3.5 lg:py-4 overflow-auto ">
            <table className="table table-borderless  space-y-2 ">
              <thead className="bg-darkblue rounded-md  border-darkblue ">
                {/* relative */}
                <tr className=" rounded-md border-paleblue">
                  <td className="text-white text-sm py-4">Date</td>
                  <td className="text-white text-sm py-4">Expense</td>
                  <td className="text-white text-sm py-4">Volume</td>
                  <td className="text-white text-sm py-4">Amount</td>
                  <td className="text-white text-sm py-4"></td>
                </tr>
              </thead>
              <tbody className="bg-white rounded-2 border-white relative w-100 top-5">
                {/* relative z-30 w-100 top-8 */}
                {isFetchingFinances ? (
                  <TableRowShimmers cols={6} />
                ) : (
                  finances &&
                  finances.length !== 0 &&
                  finances.map((finance, index) => (
                    <tr
                      // className={
                      //   (index === 0
                      //     ? " border-t-8 border-paleblue "
                      //     : " border-l-15 border-r-15  ") +
                      //   (index % 2 == 0
                      //     ? " bg-whitecolor "
                      //     : " bg-paleblue rounded-xl ") +
                      //   "items-center"
                      // }
                      className={
                        (index === 0 ? " border-paleblue " : " border-t-2 ") +
                        // (index % 2 == 0
                        //   ? " bg-whitecolor "
                        //   : "  bg-whitecolor") +
                        "items-center bg-whitecolor rounded-xl"
                      }
                      key={index}
                    >
                      {/* <td className="font-bold text-xs  py-4 text-blue-500"> {(payment.created_at&&payment.created_at.substring(0, 10))??"-"}</td> */}

                      <td className="font-bold text-xs py-3 text-gray-700 ">
                        {finance?.date}
                      </td>
                      <td className="font-bold text-xs py-3 text-boldgray ">
                        {finance?.expense}
                      </td>
                      <td className="font-bold text-xs py-3 text-boldgray ">
                        {finance?.volume}
                      </td>

                      <td className="font-bold text-xs py-3 text-ligherdarkblue">
                        {finance?.amount} Rwf
                      </td>

                      <td className="font-bold text-xs pt-2 text-darkblue ">
                        <button
                          // onClick={() => {
                          //   // dispatch(onSetSelectedNurse(finance));
                          //   // history.push("/dashboard/finances/" + finance?.id);
                          // }}
                          className=" flex items-center justify-center px-6 text-sm text-white bg-ligherdarkblue opacity-80 hover:opacity-100  rounded-md py-1 "
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.4 0H3.99759C3.26241 0 2.66425 0.598125 2.66425 1.33334V12.2648L0.802375 12.2643C0.36 12.2643 0 12.6243 0 13.0667V14.4C0 15.2824 0.717594 16 1.6 16H11.7333C11.7352 16 11.7368 15.9989 11.7387 15.9989C12.1333 15.9968 12.5166 15.8504 12.8096 15.584C13.1424 15.2813 13.3333 14.8499 13.3333 14.4V3.73572H15.1976C15.64 3.73572 16 3.37572 16 2.93331V1.6C16 0.717594 15.2824 0 14.4 0ZM6.4 1.6H9.6C9.74719 1.6 9.86666 1.71919 9.86666 1.86666C9.86666 2.01413 9.74719 2.13331 9.6 2.13331H6.4C6.25281 2.13331 6.13334 2.01413 6.13334 1.86666C6.13334 1.71919 6.25281 1.6 6.4 1.6ZM4.53334 3.2H11.4667C11.6139 3.2 11.7333 3.31919 11.7333 3.46666C11.7333 3.61413 11.6139 3.73331 11.4667 3.73331H4.53334C4.38616 3.73331 4.26669 3.61413 4.26669 3.46666C4.26669 3.31919 4.38613 3.2 4.53334 3.2ZM4.53334 4.8H11.4667C11.6139 4.8 11.7333 4.91919 11.7333 5.06666C11.7333 5.21412 11.6139 5.33331 11.4667 5.33331H4.53334C4.38616 5.33331 4.26669 5.21412 4.26669 5.06666C4.26669 4.91919 4.38613 4.8 4.53334 4.8ZM1.6 15.4667C1.01172 15.4667 0.533344 14.9882 0.533344 14.4V13.0667C0.533344 12.9181 0.654156 12.7976 0.802156 12.7976L10.1333 12.8V14.3427V14.4C10.1333 14.4192 10.1379 14.4373 10.1387 14.4563C10.1406 14.4861 10.1435 14.5157 10.1469 14.5453C10.1792 14.8968 10.3187 15.2176 10.5419 15.4667H1.6ZM9.33334 11.7333C8.19628 11.7333 7.21041 11.0816 6.72375 10.1333H4.53334C4.38616 10.1333 4.26669 10.0142 4.26669 9.86669C4.26669 9.71922 4.38616 9.60003 4.53334 9.60003H6.51363C6.44134 9.34538 6.40003 9.07763 6.40003 8.80003C6.40003 8.70991 6.40562 8.62138 6.41362 8.53337H4.53334C4.38616 8.53337 4.26669 8.41419 4.26669 8.26672C4.26669 8.11925 4.38616 8.00006 4.53334 8.00006H6.51363C6.62616 7.60459 6.81709 7.24219 7.07228 6.93341H4.53334C4.38616 6.93341 4.26669 6.81422 4.26669 6.66675C4.26669 6.51928 4.38616 6.40009 4.53334 6.40009H7.652C8.12881 6.06516 8.70772 5.86675 9.33334 5.86675C10.9507 5.86675 12.2667 7.18275 12.2667 8.80009C12.2667 10.4173 10.9507 11.7333 9.33334 11.7333ZM15.4667 2.93334C15.4667 3.08187 15.3458 3.20241 15.1976 3.20241H13.3333V1.6C13.3333 1.01172 13.8117 0.533344 14.4 0.533344C14.9883 0.533344 15.4666 1.01175 15.4666 1.6V2.93334H15.4667Z"
                              fill="white"
                            />
                            <path
                              d="M9.33311 6.3999C8.00992 6.3999 6.93311 7.47643 6.93311 8.7999C6.93311 10.1234 8.00992 11.1999 9.33311 11.1999C10.6563 11.1999 11.7331 10.1234 11.7331 8.7999C11.7331 7.47646 10.6563 6.3999 9.33311 6.3999ZM10.8883 7.88125L9.28829 10.2812C9.24401 10.3477 9.17201 10.3908 9.09282 10.3986C9.08376 10.3994 9.07523 10.3999 9.06642 10.3999C8.99601 10.3999 8.92801 10.3722 8.87789 10.3218L7.81123 9.25515C7.70698 9.15115 7.70698 8.98234 7.81123 8.87809C7.91551 8.77409 8.08404 8.77409 8.18829 8.87809L9.02511 9.7149L10.4446 7.58556C10.5264 7.46315 10.6918 7.42984 10.8144 7.51143C10.9368 7.59325 10.9699 7.75859 10.8883 7.88125Z"
                              fill="white"
                            />
                          </svg>

                          <p> Invoice</p>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {finances && finances.length === 0 && !isFetchingFinances ? (
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
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body className="bg-indigo-100 ">
          <FilterReport handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Finances;
