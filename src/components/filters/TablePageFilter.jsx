import React, { useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
function TablePageFilter({ range, setPage, page, slice }) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  console.log("page:", page);
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="bg-white py-2 px-10 rounded-xl space-x-3 flex items-center">
        <button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          <MdOutlineKeyboardArrowLeft className="text-darkblue text-xl" />
        </button>
        {range?.map((el, index) => (
          <button
            key={index}
            className={
              " px-1.5 rounded-circle text-xs font-bold" +
              (page === el ? " text-whitecolor bg-darkblue" : " text-darkblue")
            }
            onClick={() => setPage(el)}
          >
            {el}
          </button>
        ))}
        <button onClick={() => setPage(page + 1)}>
          <MdOutlineKeyboardArrowRight className="text-darkblue text-xl" />
        </button>
      </div>
    </div>
  );
}

export default TablePageFilter;
