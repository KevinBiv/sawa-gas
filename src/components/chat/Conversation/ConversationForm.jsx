import React, { useState } from "react";
import { IoMdImage } from "react-icons/io";
function ConversationForm() {
  const [message, setMessage] = useState(null);
  const [msgAudio, setMsgAudio] = useState(null);
  const [msgImage, setMsgImage] = useState(null);
  return (
    <div className="border-1 rounded-3xl p-3">
      <form className="flex space-x-3 " onSubmit={onSendMessage}>
        <input
          id="message"
          name="message"
          placeholder="Write a message"
          className="text-sm text-darkblue flex-1 focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10"
          required
        />

        <div className=" flex items-center">
          <input
            type="file"
            id="msgImage"
            onChange={(e) => {
              setMsgImage(e.target.files[0]);
            }}
            hidden
          />

          <label htmlFor="msgImage" className=" m-0 cursor-pointer">
            <IoMdImage className="text-lightgreen text-2xl" />
          </label>
        </div>
        <div className=" flex items-center">
          <input
            type="file"
            id="msgAudio"
            onChange={(e) => {
              setMsgAudio(e.target.files[0]);
            }}
            hidden
          />

          <label htmlFor="msgAudio" className=" m-0 cursor-pointer">
            <svg
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.414 9.17242C10.2331 9.17242 10.0864 9.31886 10.0864 9.50001V11.4655C10.0864 13.9945 8.02913 16.0517 5.50017 16.0517C2.9712 16.0517 0.913961 13.9945 0.913961 11.4655V9.50001C0.913961 9.31886 0.767203 9.17242 0.586375 9.17242C0.405548 9.17242 0.258789 9.31886 0.258789 9.50001V11.4655C0.258789 14.2451 2.43527 16.5199 5.17258 16.6902V18.3448H3.53465C3.35382 18.3448 3.20706 18.4913 3.20706 18.6724C3.20706 18.8536 3.35382 19 3.53465 19H7.46569C7.64651 19 7.79327 18.8536 7.79327 18.6724C7.79327 18.4913 7.64651 18.3448 7.46569 18.3448H5.82775V16.6902C8.56506 16.5199 10.7415 14.2448 10.7415 11.4655V9.50001C10.7415 9.31886 10.5948 9.17242 10.414 9.17242Z"
                fill="#34BEB9"
              />
              <path
                d="M5.49993 15.069C7.48674 15.069 9.10338 13.4523 9.10338 11.4655V3.60345C9.10338 1.61664 7.48674 0 5.49993 0C3.51312 0 1.89648 1.61664 1.89648 3.60345V11.4655C1.89648 13.4523 3.51312 15.069 5.49993 15.069Z"
                fill="#34BEB9"
              />
            </svg>
          </label>
        </div>

        <button
          type="submit"
          className="bg-lightgreen px-3 py-1 text-sm text-white rounded-xl conversation-btn"
        >
          send
        </button>
      </form>
    </div>
  );
  function onSendMessage(e) {
    e.preventDefault();
  }
}

export default ConversationForm;
