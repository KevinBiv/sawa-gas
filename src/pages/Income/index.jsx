import React, { useState } from "react";
import DayFilter from "../../components/filters/DayFilter";
import moment from "moment";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { useSelector } from "react-redux";
function Income() {
  const { incomes, isFetchingIncomes } = useSelector(({ Incomes }) => Incomes);
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="pt-20 pb-6  mx-10 space-y-6 income">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-lg text-darkblue font-bold">Income</h5>
          <p>{moment(selectedDate).format("YYYY Do MM")}</p>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap ">
          <p className="text-white py-2 px-3 bg-lightgreen font-bold text-sm">
            650,000Rwf
          </p>
          <DayFilter
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      </div>

      <div className=" rounded-1">
        <div className="  overflow-auto ">
          <table className="table table-borderless  space-y-2 ">
            <thead className="bg-white rounded-2 border-r-15 border-white border-l-15">
              <tr>
                <td className="text-gray-600 text-sm py-4">Payer name</td>
                <td className="text-gray-600 text-sm py-4">Subscription</td>
                <td className="text-gray-600 text-sm py-4">Nurse </td>
                <td className="text-gray-600 text-sm py-4">Mode of Payment</td>
                <td className="text-gray-600 text-sm py-4">Amount Paid</td>
              </tr>
            </thead>
            <tbody className="bg-white rounded-2 border-r-15 border-white border-l-15 border-b-15">
              {isFetchingIncomes ? (
                <TableRowShimmers cols={6} />
              ) : (
                incomes &&
                incomes.length !== 0 &&
                incomes.map((income, index) => (
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
                      {income?.payer_name}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {income?.subscription}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {income?.nurse_name}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {income?.paymentMode}
                    </td>

                    <td className="font-bold text-xs py-4 text-darkblue">
                      {income?.amount}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {incomes && incomes.length === 0 && !isFetchingIncomes ? (
            <p className=" my-20 bg-gray-300 py-3 text-sm  text-center w-100">
              no nurses yet !
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Income;
