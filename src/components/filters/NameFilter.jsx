import React from "react";
import { ImSearch } from "react-icons/im";
function NameFilter({ searchText, setSearchText }) {
  return (
    <div className="flex space-x-3 lg:h-full">
      <input
        id="searchtxt"
        name="searchtxt"
        type="searchtxt"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="search name"
        required
        className="appearance-none rounded-sm relative block w-full px-3 py-2 placeholder-gray-500 text-gray-500 rounded-t-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-sm"
      />
      <button className="text-sm rounded-sm bg-ligherdarkblue opacity-80 hover:opacity-100 px-3">
        <ImSearch className="text-white" />
      </button>
    </div>
  );
}

export default NameFilter;
