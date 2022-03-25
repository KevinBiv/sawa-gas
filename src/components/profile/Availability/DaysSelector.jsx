import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DaysSelector({ handleClose, daysAvailable, setDaysAvailable }) {
  const [daysError, setDaysError] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [days, setDays] = useState([
    { name: "Monday", id: 0 },
    { name: "Tuesday", id: 1 },
    { name: "Wednesday", id: 2 },
    { name: "Thursday", id: 3 },
    { name: "Friday", id: 4 },
    { name: "Saturday", id: 5 },
    { name: "Sunday", id: 6 },
  ]);
  const isFormValid = () => {
    setDaysError(null);
    if (daysAvailable?.from === null && daysAvailable?.to === null) {
      setDaysError({
        ...daysError,
        from: "Please fill this field !",
        to: "Please fill this field !",
      });
      setIsValid(false);
    } else if (daysAvailable?.from === null) {
      setDaysError({ ...daysError, from: "Please fill this field !" });
      setIsValid(false);
    } else if (daysAvailable?.to === null) {
      setDaysError({ ...daysError, to: "Please fill this field !" });
      setIsValid(false);
    } else {
      setDaysError(null);
      setIsValid(true);
    }
  };
  const isConsecutive = () => {
    setDaysError({ ...daysError, consecutive: null });
    const firstDay = days?.find((day) => day?.name === daysAvailable?.from);
    const secondDay = days?.find((day) => day?.name === daysAvailable?.to);
    var difference = secondDay?.id - firstDay?.id;
    if (difference == 2) {
      var daysList = [];
      days.map((day, index) => {
        if (index >= firstDay?.id && index <= secondDay?.id) {
          daysList.push(day?.name);
        }
      });
      setDaysAvailable({
        ...daysAvailable,
        days: daysList,
      });

      handleClose();
    } else {
      setDaysError({ ...daysError, consecutive: "Days must be consecutive" });
    }
  };
  useEffect(() => {
    if (isValid) {
      isConsecutive();
    }
  }, [isValid, daysError]);
  return (
    <div>
      {(() => {
        switch (daysAvailable?.interval) {
          case "1 day":
            return (
              <div className="space-y-5 p-10">
                <h5 className="text-base text-darkblue font-bold text-center">
                  Day Available
                </h5>
                <p className="text-sm text-gray-500 text-center">
                  Choose the days on which you are available
                </p>
                <div>
                  <select
                    name="language"
                    id="level"
                    required
                    onChange={(e) => {
                      setDaysAvailable({
                        ...daysAvailable,
                        day: e.target.value,
                      });
                    }}
                    className="form-select text-sm text-gray-500 rounded-xl pt-2.5 pb-3"
                  >
                    <option disabled selected>
                      day available
                    </option>
                    {days?.map((day, index) => (
                      <option key={index} value={day.name}>
                        {day.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            );

          case "3 days":
            return (
              <div className="space-y-5 p-10">
                <h5 className="text-base text-darkblue text-center font-bold">
                  Days Available
                </h5>
                <p className="text-sm text-gray-500 text-center">
                  Choose 3 consecutive days
                </p>
                <div className="">
                  <div className="flex items-center space-x-2">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.288 1.92L9.152 3.48L5.816 4.872L9.176 6.24L8.264 7.848L5.36 5.736L5.744 9.36L3.944 9.36L4.304 5.736L1.4 7.872L0.464 6.24L3.8 4.848L0.464 3.504L1.352 1.896L4.328 4.032L3.944 0.383999L5.768 0.383999L5.36 4.032L8.288 1.92Z"
                        fill="#4A5863"
                      />
                    </svg>
                    <p>From</p>
                  </div>
                  <select
                    name="from"
                    id="from"
                    required
                    onChange={(e) => {
                      setDaysAvailable({
                        ...daysAvailable,
                        from: e.target.value,
                      });
                    }}
                    className="form-select text-sm text-gray-500 rounded-xl pt-2.5 pb-3"
                  >
                    <option disabled selected>
                      day available
                    </option>
                    {days?.map((day, index) => (
                      <option key={index} value={day.name}>
                        {day.name}
                      </option>
                    ))}
                  </select>
                  {daysError?.from ? (
                    <p className="text-dark-800 text-xs py-1 px-2 bg-red-300">
                      Please fill this field
                    </p>
                  ) : null}
                </div>
                <div className="">
                  <div className="flex items-center space-x-2">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.288 1.92L9.152 3.48L5.816 4.872L9.176 6.24L8.264 7.848L5.36 5.736L5.744 9.36L3.944 9.36L4.304 5.736L1.4 7.872L0.464 6.24L3.8 4.848L0.464 3.504L1.352 1.896L4.328 4.032L3.944 0.383999L5.768 0.383999L5.36 4.032L8.288 1.92Z"
                        fill="#4A5863"
                      />
                    </svg>
                    <p>To</p>
                  </div>
                  <select
                    name="to"
                    id="to"
                    required
                    onChange={(e) => {
                      setDaysAvailable({
                        ...daysAvailable,
                        to: e.target.value,
                      });
                    }}
                    className="form-select text-sm text-gray-500 rounded-xl pt-2.5 pb-3"
                  >
                    <option disabled selected>
                      day available
                    </option>
                    {days?.map((day, index) => (
                      <option key={index} value={day.name}>
                        {day.name}
                      </option>
                    ))}
                  </select>
                  {daysError?.to ? (
                    <p className="text-dark-800 text-xs py-1 px-2 bg-red-300">
                      Please fill this field
                    </p>
                  ) : null}
                </div>
                {daysError?.consecutive ? (
                  <p className="text-red-500 text-xs">
                    Please choose consecutive days
                  </p>
                ) : null}
                <div></div>
              </div>
            );

          default:
            return null;
        }
      })()}
      <button
        type="button"
        onClick={() => {
          if (daysAvailable?.interval === "3 days") {
            isFormValid();
          } else {
            handleClose();
          }
        }}
        className="w-100 rounded-xl bg-lightgreen hover:opacity-90 text-white text-sm py-2"
      >
        done
      </button>
    </div>
  );
}

export default DaysSelector;
