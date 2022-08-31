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
      <h2 className="font-bold text-darkblue text-lg mt-2 mb-1.5">
        Recent used services
      </h2>
      <div className="overflow-auto py-2 px-3">
        <table className="expenses table table-borderless  space-y-2 ">
          <thead className="bg-white rounded-3  border-white  ">
            <tr>
              <td className="text-lightergray font-semibold text-sm py-2 ">
                Date
              </td>
              <td className="text-lightergray font-semibold text-sm py-2">
                Employee Name
              </td>
              <td className="text-lightergray font-semibold text-sm py-2">
                Amount
              </td>
              <td className="text-lightergray font-semibold text-sm py-2">
                Service
              </td>
            </tr>
          </thead>
          <tbody className="bg-white rounded-3  relative top-2">
            {isFetchingServices ? (
              <TableRowShimmers cols={4} />
            ) : (
              services &&
              services.length !== 0 &&
              services.map((service, index) => (
                <tr
                  className={
                    (index === 0
                      ? " border-paleblue "
                      : " border-t-2 border-paleblue ") +
                    "items-center bg-whitecolor  hover:bg-paleblue  rounded-xl"
                  }
                  key={index}
                >
                  <td className="font-bold text-xs py-3 text-darkblue ">
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
  );
}

export default RecentServices;
