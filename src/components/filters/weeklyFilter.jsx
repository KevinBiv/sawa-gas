import React, { useState, useEffect } from "react";
import { FaRegCalendar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useDispatch } from "react-redux";
function WeeklyFilter({ weeklyDate, setweeklyDate }) {
  const [dateChanged, setDateChanged] = useState(false);
  const openDatePicker = () => {
    setweeklyDate({
      ...weeklyDate,
      datePickerIsOpen: !weeklyDate.datePickerIsOpen,
    });
  };
  const changeChartStartDate = (date) => {
    setDateChanged(!dateChanged);
    setweeklyDate({ ...weeklyDate, startDate: date });
    getWeekRange(date);
  };
  console.log("dates:", weeklyDate);
  function getWeekRange(date) {
    var weekDaysRange = {
      from: moment(date).startOf("isoWeek").toDate(),
      to: moment(date).endOf("isoWeek").toDate(),
    };
    const days = [date];
    for (let i = 1; i < 7; i += 1) {
      days.push(moment(date).add(i, "days").toDate());
    }
    setweeklyDate({
      ...weeklyDate,
      weekRange: weekDaysRange,
      weekDays: days,
    });
  }
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(
  //       getWeeklyPaymentStatistics(
  //         moment(
  //           weeklyDate.weekRange &&
  //             weeklyDate.weekRange.from
  //         ).format("YYYY-MM-DD")
  //       )
  //     );
  //     console.log(
  //       "date",
  //       moment(
  //         weeklyDate.weekRange &&
  //           weeklyChartDate.weekRange.from
  //       ).format("YYYY-MM-DD")
  //     );
  //   }, []);
  useEffect(() => {
    if (dateChanged) {
      //   dispatch(
      //     getWeeklyPaymentStatistics(
      //       moment(
      //         weeklyDate.weekRange &&
      //           weeklyDate.weekRange.from
      //       ).format("YYYY-MM-DD")
      //     )
      //   );
      //   console.log(
      //     "date",
      //     moment(
      //       weeklyDate.weekRange &&
      //         weeklyDate.weekRange.from
      //     ).format("YYYY-MM-DD")
      //   );
      setDateChanged(!dateChanged);
    }
  }, [dateChanged]);
  return (
    <div className="flex space-x-3">
      <div>
        <FaRegCalendar
          className="text-lightgray cursor-pointer"
          onClick={() => openDatePicker()}
        />
        {weeklyDate.datePickerIsOpen ? (
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={weeklyDate.startDate}
            onChange={changeChartStartDate}
            onClickOutside={openDatePicker}
            open={openDatePicker}
            shouldCloseOnSelect={false}
            startDate={weeklyDate.weekRange && weeklyDate.weekRange.from}
            endDate={weeklyDate.weekRange && weeklyDate.weekRange.to}

            //onCalendarClose={openDatePicker}
            //onCalendarOpen={openDatePicker}
          />
        ) : (
          ""
        )}
      </div>
      <p className="text-lightgray text-xs pb-4">
        {moment(weeklyDate.weekRange && weeklyDate.weekRange.from).format("Do")}{" "}
        -
        {moment(weeklyDate.weekRange && weeklyDate.weekRange.to).format(
          "Do MM"
        )}
        ,
        <span className="text-gray-800 font-bold text-xs ">
          {moment(weeklyDate.weekRange && weeklyDate.weekRange.from).format(
            "YYYY "
          )}
        </span>
      </p>
    </div>
  );
}

export default WeeklyFilter;

// import React from "react";

// function WeeklyFilter() {
//   const [dateChanged, setDateChanged] = useState(false);
//   return <div>weeklyFilter</div>;
// }

// export default weeklyFilter;
