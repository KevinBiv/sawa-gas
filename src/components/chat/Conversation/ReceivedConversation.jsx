import React from "react";
import userImg from "../../../assets/images/user_img.png";

function ReceivedConversation() {
  return (
    <div className="grid grid-cols-3 ">
      <div className="md:space-x-2 space-y-2 md:space-y-0 col-span-2 flex ">
        <img src={userImg} alt="profile" className="w-16 h-16" />

        <div className="flex flex-col items-end text-gray-500">
          <p className="p-3 bg-paleblue rounded-xl text-sm">
            Commodo commodo mollit ullamco consequat aliqua amet Lorem et do.
            Quis mollit reprehenderit consectetur labore incididunt sunt ullamco
            fugiat mollit.
          </p>
          <span className="text-xs">12:00 AM</span>
        </div>
      </div>
    </div>
  );
}

export default ReceivedConversation;
