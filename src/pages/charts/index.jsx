import React from "react";
import { ImSearch } from "react-icons/im";
import { useSelector } from "react-redux";
import Conversation from "../../components/chat/Conversation";

import MessagesList from "../../components/chat/MessagesList";
function Charts() {
  const { charts } = useSelector(({ Charts }) => Charts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen pt-20 pb-6 px-10 gap-4">
      <div className="space-y-6">
        <div className="flex items-center space-x-6">
          <h5 className="text-darkblue font-bold text-lg">Inbox</h5>
          <p className="text-sm py-2 px-4 bg-lightgreen text-white rounded-xl">
            {charts?.length}
          </p>
        </div>
        <div className="flex items-center w-100 bg-white rounded-3xl py-2.5 px-3 space-x-3">
          <ImSearch className="text-darkblue" />
          <input
            type="text"
            id="search_text"
            name="search_text"
            placeholder="Search chat"
            className="text-sm text-darkblue flex-1"
          />
        </div>
        <MessagesList />
      </div>
      <div className="col-span-2">
        <Conversation />
      </div>
    </div>
  );
}

export default Charts;
