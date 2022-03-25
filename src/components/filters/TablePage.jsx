import React, { useEffect } from "react";

function TablePage({ range, setPage, page, slice }) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className=" flex justify-center items-center">
      <div className="bg-white py-2 px-3 rounded-2xl">
        <button></button>
        {range?.map((el, index) => (
          <button
            key={index}
            className={
              " p-1 rounded-circle " +
              (page === el
                ? " text-whitecolor bg-lightgreen "
                : " text-darkblue")
            }
            onClick={() => setPage(el)}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TablePage;
