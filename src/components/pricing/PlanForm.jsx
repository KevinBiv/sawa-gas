import React, { useState } from "react";
import { useSelector } from "react-redux";

function PlanForm() {
  const { errors, isCreatingSubscription } = useSelector(
    ({ Subscriptions }) => Subscriptions
  );
  const [planDays, setPlanDays] = useState(null);
  const [planName, setPlanName] = useState(null);
  const [price, setPrice] = useState(null);
  const [hours, setHours] = useState(null);
  return (
    <div className="col-span-2 space-y-6 bg-white rounded-xl p-4 overflow-hidden">
      <div className="flex justify-center">
        <h2 className="text-darkblue font-bold text-xl text-center form-title relative w-60">
          Create a New Plan
        </h2>
      </div>

      <form>
        {/* <div className="space-y-3">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Plan Name
            </label>
            <input
              id="planName"
              name="planName"
              type="text"
              autoComplete="planName"
              onChange={(e) => setPlanName(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            {errors && errors?.planName ? (
              <div className="rounded border border-danger px-3 py-2 mt-1 mb-2 text-xs bg-red-100">
                {errors?.planName[0]}
              </div>
            ) : null}
          </div>
          <div className="flex items-center bg-white">
            <label htmlFor="price" className="sr-only">
              Price per Plan
            </label>
            <input
              id="price"
              name="price"
              type="text"
              autoComplete="price"
              required
              onChange={(e) => setPrice(e.target.value)}
              className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
              placeholder="Price per Plan"
            />
          </div>
          {errors && errors?.price ? (
            <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
              {errors?.price[0]}
            </div>
          ) : null}
        </div> */}
        {errors?.error ? (
          <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
            {errors?.error}
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default PlanForm;
