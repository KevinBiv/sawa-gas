import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSelectedService } from "../../../store/actions";
import useTable from "../../../utils/useTable";
import TablePageFilter from "../../filters/TablePageFilter";
import TableRowShimmers from "../../loaders/TableRowShimmers";
import ServiceDetails from "../ServiceDetails";

function BusRentRequests() {
  const { services, isFetchingServices } = useSelector(
    ({ Services }) => Services
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(services, page, 5);
  const handleClose = () => {
    setShowModal(false);
    setShowDetailsModal(false);
  };
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" rounded-1">
        <div className="  overflow-auto p-3">
          <table className="services table table-borderless  space-y-2 ">
            <thead className="bg-white rounded-2 border-white ">
              <tr>
                <td className="text-darkblue font-bold text-sm py-4">ID</td>
                <td className="text-darkblue font-bold text-sm py-4">
                  Staff Name
                </td>
                <td className="text-darkblue font-bold text-sm py-4">
                  Service{" "}
                </td>
                <td className="text-darkblue font-bold text-sm py-4">Amount</td>
                <td className="text-darkblue font-bold text-sm py-4">Status</td>
                <td className="text-darkblue font-bold text-sm py-4">Action</td>
              </tr>
            </thead>
            <tbody className="bg-white rounded-2 border-whitecolor relative top-3">
              {isFetchingServices ? (
                <TableRowShimmers cols={6} />
              ) : (
                services &&
                services.length !== 0 &&
                slice.map((service, index) => (
                  <tr
                    // className={
                    //   (index % 2 == 0
                    //     ? " bg-whitecolor "
                    //     : " bg-paleblue rounded-xl ") + "items-center"
                    // }
                    className="bg-whitecolor  hover:bg-paleblue rounded-xl items-center"
                    key={index}
                  >
                    {/* <td className="font-bold text-xs  py-4 text-blue-500"> {(payment.created_at&&payment.created_at.substring(0, 10))??"-"}</td> */}
                    <td className="font-semibold text-xs py-3 text-boldgray">
                      00{service?.id}
                    </td>
                    <td className="font-semibold text-xs py-3 text-boldgray">
                      {service?.staff_name}
                    </td>
                    <td className="font-semibold text-xs py-3 text-boldgray">
                      {service?.service}
                    </td>

                    <td className="font-semibold text-xs py-3 text-boldgray">
                      {service?.amount} Rwf
                    </td>
                    <td
                      className={
                        (service?.status === "Completed"
                          ? " text-lightgreen "
                          : " text-red-500 ") + "font-bold text-xs py-3"
                      }
                    >
                      {service?.status}
                    </td>
                    <td className="font-bold text-xs pt-3 text-darkblue w-52">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            dispatch(setSelectedService(service));
                            setShowDetailsModal(true);
                          }}
                          className=" text-sm bg-ligherdarkblue text-white opacity-80 hover:opacity-100 rounded-sm py-1 px-3"
                        >
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {services && services.length === 0 && !isFetchingServices ? (
            <p className=" my-20 bg-gray-300 py-3 text-sm  text-center w-100">
              no service yet !
            </p>
          ) : null}
        </div>
      </div>
      {services?.length > 5 && (
        <TablePageFilter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      )}
      <Modal show={showDetailsModal} onHide={handleClose}>
        <ServiceDetails handleClose={handleClose} />
      </Modal>
    </div>
  );
}

export default BusRentRequests;
