import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import userImg from "../../assets/images/nurse 4.png";
import { BsDot, BsFillStarFill } from "react-icons/bs";
function NurseProfile() {
  const { selectedNurse } = useSelector(({ Nurses }) => Nurses);
  const { nurseId } = useParams();
  return nurseId ? (
    <div>
      <div className="flex space-x-10 flex-wrap">
        <div className="h-40 w-40 flex items-center rounded-3xl">
          <img className="object-cover" src={userImg} alt="User" />
        </div>
        <div>
          <h5 className="text-xl font-bold text-darkblue mb-2">
            Uwimana Jeanne
          </h5>
          <div className="space-y-2">
            <div className="flex">
              <BsDot className="text-lightgreen text-xl" />

              <p className="text-sm text-gray-500 font-normal">Female</p>
            </div>
            <div className="flex">
              <BsDot className="text-lightgreen text-xl" />

              <p className="text-sm text-gray-500 font-normal">28 Years</p>
            </div>
            <div className="flex">
              <BsDot className="text-lightgreen text-xl" />

              <p className="text-sm text-gray-500 font-normal">32 Patients</p>
            </div>

            <div className="flex space-x-2 items-center mx-2">
              <BsFillStarFill className="text-yellow-500 text-sm" />

              <p className="text-sm text-darkblue font-bold">4.2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 mx-3 my-6">
        <p className="text-sm text-darkblue font-bold border-t border-b py-2.5">
          Phone:{" "}
          <span className="px-3 text-sm text-gray-500 font-normal">
            +250 788 475 985
          </span>
        </p>
        <p className="text-sm text-darkblue font-bold  border-b py-2.5">
          Email:{" "}
          <span className="px-3 text-sm text-gray-500 font-normal">
            jeanneuwimana@gmail.com
          </span>
        </p>
      </div>
    </div>
  ) : (
    <div className="flex space-x-10 flex-wrap">
      <div className="h-40 w-40 flex items-center rounded-3xl">
        <img className="object-cover" src={userImg} alt="User" />
      </div>
      <div>
        <h5 className="text-xl font-bold text-darkblue mb-2">Uwimana Jeanne</h5>
        <div className="space-y-2">
          <p className="text-sm text-darkblue font-bold ">
            Phone:{" "}
            <span className="text-sm text-gray-500 font-normal">
              +250 788 475 985
            </span>
          </p>
          <p className="text-sm text-darkblue font-bold ">
            Email:{" "}
            <span className="text-sm text-gray-500 font-normal">
              jeanneuwimana@gmail.com
            </span>
          </p>
          <p className="text-sm text-darkblue font-bold ">
            Gender:{" "}
            <span className="text-sm text-gray-500 font-normal">Female</span>
          </p>
          <p className="text-sm text-darkblue font-bold ">
            Age:{" "}
            <span className="text-sm text-gray-500 font-normal">28 Years</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NurseProfile;
