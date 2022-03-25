import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { onSetSelectedNurse } from "../../store/actions";
import userImg from "../../assets/images/nurse 3.png";
import { BsFillStarFill } from "react-icons/bs";
function Nurses() {
  const { nurses, isFetchingNurses } = useSelector(({ Nurses }) => Nurses);
  const [searchText, setSearchText] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="pt-20 pb-6  mx-10 space-y-6">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-lg text-darkblue font-bold">Patients</h5>
          <p className="text-sm text-gray-500">All active patients</p>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap ">
          <p className="text-white py-2 px-3 bg-lightgreen font-bold text-sm">
            145 Patients
          </p>
          <NameFilter searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>

      <div className=" rounded-1">
        <div className="  overflow-auto ">
          <table className="table table-borderless  space-y-2 ">
            <thead className="bg-darkblue rounded-2 ">
              <tr className="border-b-15 border-paleblue">
                <td className="text-white text-sm py-4">Nurse</td>
                <td className="text-white text-sm py-4">Rating</td>
                <td className="text-white text-sm py-4">Status </td>
                <td className="text-white text-sm py-4">Age</td>
                <td className="text-white text-sm py-4">Patients</td>
                <td className="text-white text-sm py-4">Gender</td>
                <td className="text-white text-sm py-4"></td>
              </tr>
            </thead>
            <tbody className="bg-white rounded-2 border-r-15 border-white border-l-15 border-b-15">
              {isFetchingNurses ? (
                <TableRowShimmers cols={6} />
              ) : (
                nurses &&
                nurses.length !== 0 &&
                nurses.map((nurse, index) => (
                  <tr
                    className={
                      (index === 0
                        ? " border-t-8 border-paleblue "
                        : " border-l-15 border-r-15  ") +
                      (index % 2 == 0
                        ? " bg-whitecolor "
                        : " bg-paleblue rounded-xl ") +
                      "items-center"
                    }
                    key={index}
                  >
                    {/* <td className="font-bold text-xs  py-4 text-blue-500"> {(payment.created_at&&payment.created_at.substring(0, 10))??"-"}</td> */}
                    <td className="font-bold text-xs text-darkblue flex items-center space-x-2">
                      <div className="h-12 w-12 flex items-center rounded-3xl">
                        <img
                          className="object-cover"
                          src={userImg}
                          alt="User"
                        />
                      </div>

                      <p> {nurse?.nurse_name}</p>
                    </td>

                    <td className="font-bold text-xs py-4 text-darkblue">
                      <div className="flex items-center">
                        <BsFillStarFill className="text-yellow-500 text-sm" />
                        <p> {nurse?.rating}</p>
                      </div>
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      <p
                        className={
                          (nurse?.status === "available"
                            ? " text-lightgreen bg-green-200 rounded-xl "
                            : " text-red-500 bg-red-200 rounded-xl ") +
                          " text-center py-1"
                        }
                      >
                        {nurse?.status}
                      </p>
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {nurse?.age}
                    </td>

                    <td className="font-bold text-xs py-4 text-darkblue">
                      {nurse?.gender}
                    </td>
                    <td className="font-bold text-xs py-4 text-darkblue">
                      {nurse?.patients}
                    </td>
                    <td className="font-bold text-xs pt-3 text-darkblue ">
                      <button
                        onClick={() => {
                          dispatch(onSetSelectedNurse(nurse));
                          history.push("/dashboard/nurses/" + nurse?.id);
                        }}
                        className="w-100 text-sm bg-lightgreen text-white hover:opacity-70 rounded-xl py-1"
                      >
                        View More
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {nurses && nurses.length === 0 && !isFetchingNurses ? (
            <p className=" my-20 bg-gray-300 py-3 text-sm  text-center w-100">
              no nurses yet !
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Nurses;
