import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { useHistory } from "react-router-dom";
function People() {
  const { people, isFetchingPeople } = useSelector(({ People }) => People);
  const [searchText, setSearchText] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="pt-20 pb-6  mx-10 space-y-6">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-lg text-darkblue font-bold">My People</h5>
          <p className="text-sm text-gray-500">All members</p>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap ">
          <p className="text-white py-2 px-3 bg-darkblue font-bold text-sm rounded-sm">
            45 members
          </p>
          <button className="text-white py-2 px-3 bg-darkblue hover:opacity-70 font-bold text-sm rounded-sm">
            Add
          </button>
          <div>
            <select className=" rounded-sm relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm">
              <option selected className="text-sm text-gray-500">
                Department
              </option>
              <option className="text-sm text-gray-500" value="Marketing">
                Marketing
              </option>
              <option className="text-sm text-gray-500" value="Production">
                Production
              </option>
            </select>
          </div>
          <NameFilter searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>

      <div className=" rounded-1">
        <div className="  overflow-auto ">
          <table className="table table-borderless  space-y-2 ">
            <thead className="bg-darkblue rounded-2 ">
              <tr className="border-b-15 border-paleblue">
                <td className="text-white text-sm py-4">ID</td>
                <td className="text-white text-sm py-4">Full Names</td>
                <td className="text-white text-sm py-4">Department </td>
                <td className="text-white text-sm py-4">Age</td>
                <td className="text-white text-sm py-4">Sex</td>
                <td className="text-white text-sm py-4">Action</td>
              </tr>
            </thead>
            <tbody className="bg-white rounded-2 border-r-15 border-white border-l-15 border-b-15">
              {isFetchingPeople ? (
                <TableRowShimmers cols={6} />
              ) : (
                people &&
                people.length !== 0 &&
                people.map((person, index) => (
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
                    <td className="font-bold text-xs py-3 text-darkblue">
                      00{person?.id}
                    </td>

                    <td className="font-bold text-xs py-3 text-darkblue">
                      {person?.full_names}
                    </td>
                    <td className="font-bold text-xs py-3 text-darkblue">
                      {person?.department}
                    </td>
                    <td className="font-bold text-xs py-3 text-darkblue">
                      {person?.age}
                    </td>

                    <td className="font-bold text-xs py-3 text-darkblue">
                      {person?.gender}
                    </td>

                    <td className="font-bold text-xs pt-3 text-darkblue ">
                      <div className="flex space-x-2">
                        <button
                          // onClick={() => {
                          //   // dispatch(onSetSelectedNurse(person));
                          //   // history.push("/dashboard/people/" + person?.id);
                          // }}
                          className="w-100 text-sm bg-red-400 text-white hover:opacity-70 rounded-sm py-1"
                        >
                          remove
                        </button>
                        <button
                          // onClick={() => {
                          //   // dispatch(onSetSelectedNurse(person));
                          //   // history.push("/dashboard/people/" + person?.id);
                          // }}
                          className="w-100 text-sm bg-darkblue text-white hover:opacity-70 rounded-sm py-1"
                        >
                          update
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {people && people.length === 0 && !isFetchingPeople ? (
            <p className=" my-20 bg-gray-300 py-3 text-sm  text-center w-100">
              no people yet !
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default People;
