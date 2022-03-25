import React from "react";
import userImg from "../../../assets/images/nurse 1.png";
function SentConversation() {
  return (
    <div className="grid grid-cols-3 ">
      <div></div>
      <div className=" col-span-2 flex ">
        <img src={userImg} alt="profile" className="w-16 h-16 order-2 ml-2" />
        <div>
          <div className="flex flex-col text-gray-500">
            <p className="p-3 rounded-tl-3xl rounded-br-3xl bg-lightgreen text-white text-sm">
              Commodo commodo mollit ullamco consequat aliqua amet Lorem et do.s
              mollit reprehenderit consectetur labor incididunt sunt ullamco
              fugiat mollit.
            </p>
            <span className="text-xs justify-self-start">12:00 AM</span>
          </div>
          <div className="flex flex-col text-gray-500">
            <p className="p-3 rounded-tl-3xl rounded-br-3xl bg-lightgreen text-white text-sm">
              Commodo commodo mollit ullamco consequat aliqua amet.
            </p>
            <span className="text-xs justify-self-start">12:02 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SentConversation;
