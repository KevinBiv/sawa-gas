import React from "react";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import userImg from "../../../assets/images/user_img.png";
import ConversationForm from "./ConversationForm";
import ReceivedConversation from "./ReceivedConversation";
import SentConversation from "./SentConversation";

function Conversation() {
  const { charts, selectedChart } = useSelector(({ Charts }) => Charts);
  return (
    <div className="rounded-3xl overflow-auto">
      <div className="bg-white flex  items-center p-6">
        <BsDot className="text-6xl text-darkblue" />
        <img src={userImg} alt="Profile" className="" />
        <div className="mx-3">
          <h5 className="font-bold text-darkblue text-base">
            {selectedChart?.client_name}
          </h5>
          <p className="text-sm text-gray-500">{selectedChart?.client_about}</p>
        </div>
      </div>
      <div className="bg-white mt-2 py-10 px-16">
        <ul>
          <li className="space-y-6">
            <div className="flex justify-center">
              <p className="text-sm px-5 py-1.5 bg-paleblue rounded-3xl text-darkblue font-bold">
                Feb 2021
              </p>
            </div>
            <ReceivedConversation />
            <div className="flex justify-center">
              <p className="text-sm px-5 py-1.5 bg-paleblue rounded-3xl text-darkblue font-bold">
                2 Feb 2021
              </p>
            </div>
            <SentConversation />
            <ConversationForm />
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Conversation;
