import React from "react";
import NurseDoc from "../../components/nurse/NurseDoc";
import NurseProfile from "../../components/nurse/NurseProfile";
import PendingNursesList from "../../components/pending/nurses/PendingNursesList";
import { AiTwotoneMessage } from "react-icons/ai";
import { useSelector } from "react-redux";
function Pending() {
  const { pendingNurses, isFetchingPendingNurses, selectedNurse } = useSelector(
    ({ Nurses }) => Nurses
  );
  return (
    <div className="pt-20 pb-6  mx-10 space-y-6">
      <div>
        <h5 className="text-lg text-darkblue font-bold">Pending Approvals</h5>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <PendingNursesList />
        </div>
        <div className="col-span-2 p-4 bg-white rounded-xl space-y-6">
          <NurseProfile />
          <div>
            <h5 className="text-xl font-bold text-darkblue">Biography</h5>
            <p className="bg-paleblue p-4 rounded-2xl text-sm text-gray-500">
              Fugiat anim ullamco esse reprehenderit. Consequat amet nostrud
              nulla irure nostrud labore id dolore Lorem id cupidatat ad
              cupidatat. Culpa elit Lorem aliquip incididunt quis incididunt
              dolore proident officia officia dore in. Laborum eu nostrud
              consectetur velit sunt proident dolor. Quis amet eu cillum veniam
              veniam Lorem eu aute laborum sunt tempor dolore ex. Laboris id
              labore magna ipsum ullamco id irure esse.
            </p>
          </div>
          <NurseDoc />
          <div className=" flex justify-center space-x-4 my-4">
            <button className="bg-lightgreen hover:opacity-70 px-10 py-1.5 text-white text-sm rounded-xl">
              Approve Account
            </button>
            <button className="bg-lightgreen hover:opacity-70 px-10 py-1 text-white text-sm rounded-xl">
              Decline Account
            </button>
            <button className="bg-lightgreen hover:opacity-70 py-1 px-1.5 text-white text-sm rounded-xl">
              <AiTwotoneMessage />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pending;
