import React from "react";
import userImg from "../../assets/images/nurse 2.png";

function LatestMessages() {
  return (
    <div>
      <h2 className="font-bold text-darkblue text-base my-2">Messages</h2>
      <div className="space-y-2">
        {[1, 2, 3].map((message, index) => (
          <div className="p-2 flex space-x-3 bg-white rounded-2">
            <div className="relative  flex items-center w-14 h-14">
              <img src={userImg} alt="Profile" className="" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-darkblue font-bold">Kamikazi Sarah</p>
              <span className="text-xs text-gray-700">
                Lorem ipsum dolor sit amet, consecter adipiscing elit. Et
                molestie et erat nulla euismod ut vitae.
              </span>
              <button className="text-sm text-lightgreen hover:opacity-70 block w-100 text-end">
                View Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestMessages;
