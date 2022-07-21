import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FaRegCalendar } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
function StatisticsTimeFilter() {
  const [hidePicker, setHidePicker] = useState(true);
  const [selectedSortDuration, setSelectedSortDuration] = useState("week");
  const [dateSelected, setDateSelected] = useState({
    startDate: new Date(),
    dateSelected: new Date(),
    weekRange: {
      from: moment().startOf("isoWeek").toDate(),
      to: moment().endOf("isoWeek").toDate(),
    },

    weekDays: {},
  });
  console.log(
    "selectedDuration:",
    selectedSortDuration,
    "hidePicker:",
    hidePicker
  );
  const openDatePicker = () => {
    setHidePicker(!hidePicker);
  };
  const changeStartDate = (date) => {
    setDateSelected({ ...dateSelected, dateSelected: date });
    if (selectedSortDuration === "week") {
      getWeekRange(date);
    }
  };
  function getWeekRange(date) {
    var weekDaysRange = {
      from: moment(date).startOf("isoWeek").toDate(),
      to: moment(date).endOf("isoWeek").toDate(),
    };
    const days = [date];
    for (let i = 1; i < 7; i += 1) {
      days.push(moment(date).add(i, "days").toDate());
    }
    setDateSelected({
      ...dateSelected,
      weekRange: weekDaysRange,
      weekDays: days,
    });
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:justify-between sm:grid-cols-2 gap-2 pb-4">
        <div className="flex items-center space-x-3">
          <FaRegCalendar className="text-lightgray " />
          {(() => {
            switch (selectedSortDuration) {
              case "week":
                return (
                  <p className="text-darkblue  text-xs font-bold">
                    {moment(
                      dateSelected.weekRange && dateSelected.weekRange.from
                    ).format("Do")}{" "}
                    -
                    {moment(
                      dateSelected.weekRange && dateSelected.weekRange.to
                    ).format("Do MMMM")}
                    ,{" "}
                    <span className="text-lightgray font-bold text-xs ">
                      {moment(
                        dateSelected.weekRange && dateSelected.weekRange.from
                      ).format("YYYY ")}
                    </span>
                  </p>
                );

              case "month":
                return (
                  <p className="text-darkblue text-xs font-bold">
                    {moment(dateSelected?.dateSelected).format("MMMM")},{" "}
                    <span className="text-lightgray font-bold text-xs ">
                      {moment(dateSelected?.dateSelected).format("YYYY ")}
                    </span>
                  </p>
                );
              case "year":
                return (
                  <p className="text-lightgray text-xs font-bold">
                    {moment(dateSelected?.dateSelected).format("YYYY")}
                  </p>
                );
              default:
                return "";
            }
          })()}
        </div>
        <div className=" justify-self-end">
          <div className="flex space-x-3">
            <div
              role="button"
              onClick={() => {
                if (selectedSortDuration === "year" && hidePicker === false) {
                  setHidePicker(true);
                } else {
                  setHidePicker(false);
                  setSelectedSortDuration("year");
                }
              }}
              className={
                (selectedSortDuration === "year"
                  ? " text-darkblue "
                  : "text-lightgray font-normal") +
                " font-bold text-sm flex items-center"
              }
            >
              <p className="text-sm">year</p>
              {selectedSortDuration === "year" ? (
                <MdArrowDropDown className="text-darkblue text-xl" />
              ) : null}
            </div>
            <div
              role="button"
              onClick={() => {
                if (selectedSortDuration === "month" && hidePicker === false) {
                  setHidePicker(true);
                } else {
                  setHidePicker(false);
                  setSelectedSortDuration("month");
                }
              }}
              className={
                (selectedSortDuration === "month"
                  ? " text-darkblue "
                  : "text-lightgray font-normal") +
                " font-bold text-sm flex items-center"
              }
            >
              <p className="text-sm">month</p>
              {selectedSortDuration === "month" ? (
                <MdArrowDropDown className="text-darkblue text-xl " />
              ) : null}
            </div>

            <div
              role="button"
              onClick={() => {
                if (selectedSortDuration === "week" && hidePicker === false) {
                  setHidePicker(true);
                } else {
                  setHidePicker(false);
                  setSelectedSortDuration("week");
                }
              }}
              className={
                (selectedSortDuration === "week"
                  ? " text-darkblue "
                  : "text-lightgray font-normal") +
                " font-bold text-sm flex items-center"
              }
            >
              <p className="text-sm">week</p>
              {selectedSortDuration === "week" ? (
                <MdArrowDropDown className="text-darkblue text-xl" />
              ) : null}
            </div>
          </div>
          <div className="flex justify-center">
            {!hidePicker ? (
              <DatePicker
                onClickOutside={openDatePicker}
                open={openDatePicker}
                shouldCloseOnSelect={false}
                selected={
                  selectedSortDuration === "day"
                    ? dateSelected?.dateSelected
                    : null
                }
                onChange={(date) => {
                  if (selectedSortDuration === "year") {
                    changeStartDate(date);
                    setHidePicker(true);
                  } else {
                    changeStartDate(date);
                  }
                }}
                startDate={
                  selectedSortDuration === "week"
                    ? dateSelected.weekRange && dateSelected.weekRange.from
                    : null
                }
                endDate={
                  selectedSortDuration === "week"
                    ? dateSelected.weekRange && dateSelected.weekRange.to
                    : null
                }
                showMonthYearPicker={
                  selectedSortDuration === "month" ? true : false
                }
                showYearPicker={selectedSortDuration === "year" ? true : false}
                dateFormat={(() => {
                  switch (
                    selectedSortDuration !== null &&
                    selectedSortDuration
                  ) {
                    case "day":
                      return "yyyy/MM/dd";

                    case "week":
                      return "yyyy/MM/dd";
                    case "month":
                      return "MM/yyyy";
                    case "year":
                      return "yyyy";

                    default:
                      return "";
                  }
                })()}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsTimeFilter;
