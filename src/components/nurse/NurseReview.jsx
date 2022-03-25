import React from "react";
import { useSelector } from "react-redux";

function NurseReview() {
  const { selectedNurse } = useSelector(({ Nurses }) => Nurses);
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h5 className="text-xl font-bold text-darkblue">Reviews</h5>
        <p className="text-gray-500 text-sm">46 reviews</p>
      </div>
      <div className="space-y-2">
        {[1, 2].map((review, index) => (
          <div className="bg-paleblue p-4">
            <p className="text-sm font-bold text-darkblue">Kamali Yves</p>
            <p className="text-gray-500 text-sm">
              Fugiat anim ullamco esse reprehenderit. Consequat amet nostrud
              nulla irure nostrud labore id dolore Lorem id cupidatat
              acupidatat. Culpa elit Lorem aliquip incididunt quis incididunt{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NurseReview;
