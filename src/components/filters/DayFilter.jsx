import React, { useState } from "react";
import { FaRegCalendar, FaCaretDown } from "react-icons/fa";
import DatePicker from "react-datepicker";
function DayFilter({ selectedDate, setSelectedDate }) {
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const openDatePicker = () => {
    setDatePickerIsOpen(!datePickerIsOpen);
  };
  return (
    <div className="flex space-x-3 bg-white py-0.5 rounded-2 items-center px-3">
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        onClickOutside={openDatePicker}
        open={datePickerIsOpen}
        shouldCloseOnSelect={true}
        placeholderText="Sort by date"
        className="text-xs text-lightgray placeholder-lightgray"
      />
      {/* <FaRegCalendar className="text-gray-500 cursor-pointer" /> */}
      <svg
        role="button"
        onClick={() => openDatePicker()}
        className="w-5"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.43 4.945C31.43 3.751 30.462 2.783 29.268 2.783H25.612V0.882C25.612 0.395 25.217 0 24.73 0H22.825C22.34 0 21.942 0.395 21.942 0.882V2.784H9.80199V0.882C9.80199 0.395 9.40699 0 8.91999 0H7.14199C6.65499 0 6.25999 0.395 6.25999 0.882V2.784H2.34999C1.15599 2.784 0.187988 3.752 0.187988 4.946V12.65H1.32699V29.399C1.32699 30.628 2.32199 31.622 3.54999 31.622H27.944C29.173 31.622 30.167 30.628 30.167 29.399V12.649H31.434L31.43 4.945ZM26.624 25.73C26.624 26.959 25.63 27.953 24.401 27.953H7.21799C5.98999 27.953 4.99499 26.959 4.99499 25.73V12.649H26.623V25.73H26.624Z"
          fill="#1E355C"
        />
        <path
          d="M11.5718 15.051H8.03076V18.72H11.5718V15.051Z"
          fill="#1E355C"
        />
        <path
          d="M17.6431 15.051H14.1021V18.72H17.6431V15.051Z"
          fill="#1E355C"
        />
        <path
          d="M23.7139 15.051H20.1719V18.72H23.7139V15.051Z"
          fill="#1E355C"
        />
        <path
          d="M11.5718 21.502H8.03076V25.17H11.5718V21.502Z"
          fill="#1E355C"
        />
        <path
          d="M17.6431 21.502H14.1021V25.17H17.6431V21.502Z"
          fill="#1E355C"
        />
        <path
          d="M23.7139 21.502H20.1719V25.17H23.7139V21.502Z"
          fill="#1E355C"
        />
      </svg>
      {/* <FaCaretDown className="text-lightgreen" /> */}
    </div>
  );
}

export default DayFilter;
