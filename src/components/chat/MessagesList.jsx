import React from "react";
import { BsDot } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/Care connect logo2.png";
import userImg from "../../assets/images/user_img.png";
import { onSetSelectedChart } from "../../store/actions";
function MessagesList() {
  const { charts, selectedChart } = useSelector(({ Charts }) => Charts);
  const dispatch = useDispatch();
  return (
    <div className="rounded-3xl bg-white overflow-auto">
      <div className="bg-lightgreen p-10 flex items-end space-x-3">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 19.2752V41.0627L14.2478 30.1035L0 19.2752Z"
            fill="#1E355C"
          />
          <path
            d="M15.6381 30.8L1.07812 42H40.9221L26.3621 30.8H15.6381Z"
            fill="#1E355C"
          />
          <path
            d="M5.53112 21.7014L15.154 29.4H26.8447L36.4676 21.7014L41.362 18.0012L37.7997 14.6846V0H4.19972V14.6846L0.636719 18.0012L5.53112 21.7014ZM5.59972 1.4H36.3997V13.3812V19.9633L26.354 28H15.6454L5.59972 19.964V13.3819V1.4Z"
            fill="#1E355C"
          />
          <path
            d="M27.752 30.1035L41.9998 41.0627V19.2752L27.752 30.1035Z"
            fill="#1E355C"
          />
          <path
            d="M18.9002 5.6H23.1002C23.4873 5.6 23.8002 5.2871 23.8002 4.9C23.8002 4.5129 23.4873 4.2 23.1002 4.2H18.9002C18.5131 4.2 18.2002 4.5129 18.2002 4.9C18.2002 5.2871 18.5131 5.6 18.9002 5.6Z"
            fill="#1E355C"
          />
          <path
            d="M29.4 15.4H25.2C24.8129 15.4 24.5 15.7129 24.5 16.1C24.5 16.4871 24.8129 16.8 25.2 16.8H29.4C29.7871 16.8 30.1 16.4871 30.1 16.1C30.1 15.7129 29.7871 15.4 29.4 15.4Z"
            fill="#1E355C"
          />
          <path
            d="M12.6004 11.2H16.1004C16.4875 11.2 16.8004 10.8871 16.8004 10.5C16.8004 10.1129 16.4875 9.8 16.1004 9.8H12.6004C12.2133 9.8 11.9004 10.1129 11.9004 10.5C11.9004 10.8871 12.2133 11.2 12.6004 11.2Z"
            fill="#1E355C"
          />
          <path
            d="M21 10.5C21 10.8871 21.3129 11.2 21.7 11.2H26.6C26.9871 11.2 27.3 10.8871 27.3 10.5C27.3 10.1129 26.9871 9.8 26.6 9.8H21.7C21.3129 9.8 21 10.1129 21 10.5Z"
            fill="#1E355C"
          />
          <path
            d="M18.9002 11.2C19.0822 11.2 19.2642 11.123 19.3972 10.997C19.5295 10.864 19.6002 10.682 19.6002 10.5C19.6002 10.318 19.5232 10.1353 19.3972 10.003C19.1312 9.744 18.6622 9.744 18.4032 10.003C18.2765 10.1353 18.2002 10.3103 18.2002 10.5C18.2002 10.689 18.2765 10.864 18.4032 10.997C18.5355 11.123 18.7182 11.2 18.9002 11.2Z"
            fill="#1E355C"
          />
          <path
            d="M23.1002 16.1C23.1002 15.7129 22.7873 15.4 22.4002 15.4H15.4002C15.0131 15.4 14.7002 15.7129 14.7002 16.1C14.7002 16.4871 15.0131 16.8 15.4002 16.8H22.4002C22.7873 16.8 23.1002 16.4871 23.1002 16.1Z"
            fill="#1E355C"
          />
          <path
            d="M12.6004 16.8C12.7824 16.8 12.9644 16.723 13.0974 16.597C13.2234 16.464 13.3004 16.282 13.3004 16.1C13.3004 15.918 13.2234 15.7353 13.0974 15.603C12.8314 15.344 12.3694 15.344 12.1034 15.603C11.9704 15.7353 11.9004 15.918 11.9004 16.1C11.9004 16.282 11.9767 16.464 12.1034 16.597C12.2357 16.723 12.4184 16.8 12.6004 16.8Z"
            fill="#1E355C"
          />
          <path
            d="M29.4002 11.2C29.5822 11.2 29.7642 11.123 29.8972 10.997C30.0232 10.864 30.1002 10.682 30.1002 10.5C30.1002 10.318 30.0232 10.1353 29.8972 10.003C29.6382 9.744 29.1622 9.744 28.9032 10.003C28.7765 10.1353 28.7002 10.3103 28.7002 10.5C28.7002 10.682 28.7765 10.864 28.9032 10.997C29.0355 11.123 29.2182 11.2 29.4002 11.2Z"
            fill="#1E355C"
          />
          <path
            d="M12.6004 22.4H16.1004C16.4875 22.4 16.8004 22.0871 16.8004 21.7C16.8004 21.3129 16.4875 21 16.1004 21H12.6004C12.2133 21 11.9004 21.3129 11.9004 21.7C11.9004 22.0871 12.2133 22.4 12.6004 22.4Z"
            fill="#1E355C"
          />
          <path
            d="M26.6 21H21.7C21.3129 21 21 21.3129 21 21.7C21 22.0871 21.3129 22.4 21.7 22.4H26.6C26.9871 22.4 27.3 22.0871 27.3 21.7C27.3 21.3129 26.9871 21 26.6 21Z"
            fill="#1E355C"
          />
          <path
            d="M18.4032 21.203C18.2765 21.3353 18.2002 21.518 18.2002 21.7C18.2002 21.882 18.2765 22.064 18.4032 22.197C18.5355 22.323 18.7105 22.4 18.9002 22.4C19.0892 22.4 19.2642 22.323 19.3972 22.197C19.5232 22.064 19.6002 21.882 19.6002 21.7C19.6002 21.5103 19.5232 21.3353 19.3972 21.203C19.1382 20.944 18.6622 20.944 18.4032 21.203Z"
            fill="#1E355C"
          />
          <path
            d="M28.9032 21.203C28.7765 21.3353 28.7002 21.518 28.7002 21.7C28.7002 21.882 28.7765 22.064 28.9032 22.197C29.0355 22.323 29.2105 22.4 29.4002 22.4C29.5892 22.4 29.7642 22.323 29.8972 22.197C30.0232 22.064 30.1002 21.882 30.1002 21.7C30.1002 21.5103 30.0232 21.3353 29.8972 21.203C29.6382 20.944 29.1622 20.944 28.9032 21.203Z"
            fill="#1E355C"
          />
        </svg>
        <div className="text-white">
          <h5 className="font-bold text-lg">Inbox</h5>
          <p className="text-sm">3 Messages Received</p>
        </div>
      </div>
      <ul className="p-10 space-y-3">
        {charts?.map((chart, index) => (
          <li
            onClick={() => dispatch(onSetSelectedChart(chart))}
            className={
              (selectedChart?.id === chart.id
                ? " bg-indigo-200 "
                : " bg-paleblue ") +
              " rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-3 space-x-4 cursor-pointer"
            }
          >
            <div className="relative  flex items-center w-14 h-14">
              <img
                src={index === 1 ? Logo : userImg}
                alt="Profile"
                className=""
              />

              <BsDot className="absolute right-0 bottom-0 text-darkblue text-lg" />
            </div>
            <div className="col-span-2">
              <p className="font-bold text-sm text-darkblue">
                {chart?.client_name}
              </p>
              <span className="text-xs text-gray-500">
                {chart?.conversations && chart?.conversations[0]?.latestMessage}
              </span>
            </div>
          </li>
        ))}

        {/* <li className="bg-paleblue rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-3 space-x-4">
          <div className="relative  flex items-center w-14 h-14">
            <img
              src={Logo}
              alt="Profile"
              className=" object-scale-down w-14 h-14 border-1 border-lightgreen rounded-circle"
            />
            <BsDot className="absolute right-0 bottom-0 text-darkblue text-lg" />
          </div>
          <div>
            <p className="font-bold text-sm text-darkblue">Uwase Daniella</p>
            <span className="text-xs text-gray-500">
              Hey there how’s anne !
            </span>
          </div>
        </li>
        <li className="bg-paleblue rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-3 space-x-4">
          <div className="relative  flex items-center w-14 h-14">
            <img src={userImg} alt="Profile" className="" />
            <BsDot className="absolute right-0 bottom-0 text-darkblue text-lg" />
          </div>
          <div>
            <p className="font-bold text-sm text-darkblue">John Doe</p>
            <span className="text-xs text-gray-500">
              Hey there how’s anne !
            </span>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default MessagesList;
