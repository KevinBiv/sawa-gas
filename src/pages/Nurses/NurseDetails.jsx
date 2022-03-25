import React from "react";
import NurseProfile from "../../components/nurse/NurseProfile";
import NurseDoc from "../../components/nurse/NurseDoc";
import NurseReview from "../../components/nurse/NurseReview";
import NurseAvailability from "../../components/nurse/NurseAvailability";
import { AiTwotoneMessage } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useHistory } from "react-router-dom";
function NurseDetails() {
  const history = useHistory();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      <div className="bg-white rounded-xl p-4 space-y-6">
        <div>
          <MdOutlineKeyboardBackspace
            role="button"
            onClick={() => history.push("/dashboard/nurses")}
            className="text-darkblue text-2xl"
          />
        </div>
        <NurseProfile />
        <div>
          <h5 className="text-xl font-bold text-darkblue">Biography</h5>
          <p className="bg-paleblue p-4 rounded-2xl text-sm text-gray-500">
            Fugiat anim ullamco esse reprehenderit. Consequat amet nostrud nulla
            irure nostrud labore id dolore Lorem id cupidatat ad cupidatat.
            Culpa elit Lorem aliquip incididunt quis incididunt dolore proident
            officia officia dore in. Laborum eu nostrud consectetur velit sunt
            proident dolor. Quis amet eu cillum veniam veniam Lorem eu aute
            laborum sunt tempor dolore ex. Laboris id labore magna ipsum ullamco
            id irure esse.
          </p>
        </div>

        <div className=" flex md:justify-center space-y-2 lg:space-y-0 space-x-4 my-4 flex-wrap">
          <button className="bg-lightgreen hover:opacity-70 px-3 lg:px-10 py-1.5 text-white text-sm rounded-xl">
            Approve Account
          </button>
          <button className="bg-lightgreen hover:opacity-70 px-3 lg:px-10 py-1 text-white text-sm rounded-xl">
            Decline Account
          </button>
          <button className="bg-lightgreen hover:opacity-70 py-1 px-1.5 text-white text-sm rounded-xl">
            <AiTwotoneMessage />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 space-y-6">
        <NurseDoc />
        <NurseAvailability />
        <NurseReview />
      </div>
    </div>
  );
}

export default NurseDetails;
