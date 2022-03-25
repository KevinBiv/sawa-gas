import React from "react";
import { ImSearch } from "react-icons/im";
function NameFilter({ searchText, setSearchText }) {
  return (
    <div className="flex space-x-3">
      <input
        id="searchtxt"
        name="searchtxt"
        type="searchtxt"
        onChange={(e) => setSearchText(e.target.value)}
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
      />
      <button className="text-sm bg-lightgreen hover:opacity-70 px-3">
        <ImSearch className="text-white" />
      </button>
    </div>
  );
}

export default NameFilter;
