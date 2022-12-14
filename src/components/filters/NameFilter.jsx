import React from "react";
import { ImSearch } from "react-icons/im";
function NameFilter({ searchText, setSearchText }) {
  return (
    <div className="flex space-x-3 lg:h-full my-1 mx-2 md:mx-0 lg:my-0">
      <input
        id="searchtxt"
        name="searchtxt"
        type="searchtxt"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search name"
        required
        className="appearance-none rounded-sm relative block w-full px-3 py-2 placeholder-lightgray text-text-lightgray rounded-t-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 text-xs"
      />
      <button className=" rounded-sm bg-ligherdarkblue opacity-80 hover:opacity-100 px-3 ">
        <ImSearch className="text-white text-xs" />
      </button>
    </div>
  );
}

export default NameFilter;
