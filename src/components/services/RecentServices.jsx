import React from "react";
import { useSelector } from "react-redux";
import TableRowShimmers from "../loaders/TableRowShimmers";

function RecentServices() {
  const { services, isFetchingServices } = useSelector(
    ({ Services }) => Services
  );
  return (
    <div className="col-span-2">
      {" "}
      <h2 className="font-bold text-darkblue text-base my-2">
        Recent used services
      </h2>
      <div className=" rounded-1">
        <div className="overflow-auto p-3">
          <table className="expenses table table-borderless  space-y-2 ">
            <thead className="bg-white rounded-2  border-white  ">
              <tr>
                <td className="text-gray-600 text-sm py-2">Date</td>
                <td className="text-gray-600 text-sm py-2">Employee Name</td>
                <td className="text-gray-600 text-sm py-2">Amount</td>
                <td className="text-gray-600 text-sm py-2">Service</td>
              </tr>
            </thead>
            <tbody className="bg-white rounded-2  relative top-5">
              {isFetchingServices ? (
                <TableRowShimmers cols={4} />
              ) : (
                services &&
                services.length !== 0 &&
                services.map((service, index) => (
                  <tr
                    className={
                      (index % 2 == 0
                        ? " "
                        : " bg-whitecolor border-t-2 border-paleblue rounded-xl ") +
                      " bg-whitecolor items-center"
                    }
                    key={index}
                  >
                    {/* <td className="font-bold text-xs  py-4 text-blue-500"> {(payment.created_at&&payment.created_at.substring(0, 10))??"-"}</td> */}
                    <td className="font-bold text-xs py-3 text-darkblue">
                      {service?.date}
                    </td>
                    <td className="font-bold text-xs py-3 text-darkblue">
                      {service?.employee_name}
                    </td>
                    <td className="font-bold text-xs py-3 text-darkblue">
                      {service?.amount}
                    </td>
                    <td className="font-bold text-xs py-3 text-darkblue">
                      {service?.service}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {services && services.length === 0 && !isFetchingServices ? (
            <p className=" my-20 bg-gray-300 py-3 text-sm  text-center w-100">
              no services yet !
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RecentServices;
