import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
function FilterReport() {
  const [sortDuration, setSortDuration] = useState([
    { name: "day", checked: false },
    { name: "week", checked: false },
    { name: "month", checked: false },
    { name: "year", checked: false },
  ]);
  const [selectedSortDuration, setSelectedSortDuration] = useState("week");
  const [dateSelected, setDateSelected] = useState({
    startDate: new Date(),
    weekRange: {
      from: moment().startOf("isoWeek").toDate(),
      to: moment().endOf("isoWeek").toDate(),
    },

    weekDays: {},
  });
  const changeStartDate = (date) => {
    console.log("date selected:", date, selectedSortDuration);
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
    <div className="p-6 sm:p-10 space-y-6">
      <h5 className="font-black text-darkblue text-lg text-center">
        Sort Report Info
      </h5>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="form-check px-9 py-1.5 bg-white rounded-1">
          <input
            className="form-check-input "
            type="radio"
            name="sort-type"
            id="day"
            value="day"
            selected={selectedSortDuration === "day" ? true : false}
            required
            onChange={(e) => setSelectedSortDuration(e.target.value)}
          />
          <label className="form-check-label text-base text-darkblue" for="day">
            day
          </label>
        </div>
        <div className="form-check px-9 py-1.5 bg-white rounded-1">
          <input
            className="form-check-input "
            type="radio"
            name="sort-type"
            id="week"
            value="week"
            selected={selectedSortDuration === "week" ? true : false}
            required
            onChange={(e) => setSelectedSortDuration(e.target.value)}
          />
          <label
            className="form-check-label text-base text-darkblue"
            for="week"
          >
            week
          </label>
        </div>
        <div className="form-check px-9 py-1.5 bg-white rounded-1">
          <input
            className="form-check-input "
            type="radio"
            name="sort-type"
            id="month"
            value="month"
            selected={selectedSortDuration === "month" ? true : false}
            required
            onChange={(e) => setSelectedSortDuration(e.target.value)}
          />
          <label
            className="form-check-label text-base text-darkblue"
            for="month"
          >
            month
          </label>
        </div>
        <div className="form-check px-9 py-1.5 bg-white rounded-1">
          <input
            className="form-check-input "
            type="radio"
            name="sort-type"
            id="year"
            value="year"
            selected={selectedSortDuration === "year" ? true : false}
            required
            onChange={(e) => setSelectedSortDuration(e.target.value)}
          />
          <label
            className="form-check-label text-base text-darkblue"
            for="year"
          >
            year
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <DatePicker
          selected={dateSelected?.startDate}
          onChange={changeStartDate}
          startDate={
            selectedSortDuration === "week"
              ? dateSelected.weekRange && dateSelected.weekRange.from
              : dateSelected?.startDate
          }
          endDate={
            selectedSortDuration === "week"
              ? dateSelected.weekRange && dateSelected.weekRange.to
              : null
          }
          showMonthYearPicker={selectedSortDuration === "month" ? true : false}
          showYearPicker={selectedSortDuration === "year" ? true : false}
          dateFormat={(() => {
            switch (selectedSortDuration !== null && selectedSortDuration) {
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
          inline
        />
      </div>
      <button
        //   onClick={() => setShowModal(true)}
        className=" w-100 px-10 py-2 bg-ligherdarkblue hover:opacity-70 text-white text-sm rounded-md "
      >
        {" "}
        Generate Report
      </button>
    </div>
  );
}

export default FilterReport;
