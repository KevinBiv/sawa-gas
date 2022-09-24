import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
// import { PersonalInfoValidation } from "../../utils/validation";
function PersonalInfo({
  setFullnames,
  setPhoneNumber,
  setEmail,
  setProfilePic,
  setPassword,
  setConfirmPassword,
  fullnames,
  phoneNumber,
  email,
  password,
  confirmPassword,
  profilePic,
  next,
}) {
  const { errors, isRegistering } = useSelector(({ UserAuth }) => UserAuth);
  const [showPassword, setShowPassword] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>

      <h2 className="text-2xl mt-6 text-darkblue font-bold">Register</h2>
      <p className="text-sm text-gray-500 my-2">
        Register Your institution to get started!
      </p>

      <form className="mt-8 space-y-6" id="submit-login">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="space-y-6">
          <div>
          <label htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            autoComplete="companyName"
            value={fullnames}
            onChange={(e) => setFullnames(e.target.value)}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-darkblue text-darkblue rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
            placeholder="your company name"
          />
          {(formErrors && formErrors?.fullnames) || errors?.full_names ? (
            <div className="rounded border border-danger px-3 py-2 mt-1 mb-2 text-xs bg-red-100">
              {formErrors?.fullnames || errors?.pfull_names}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="nbr-employee">
            Company Email
          </label>
          <input
            id="nbr-employee"
            name="nbr-employee"
            type="text"
            autoComplete="nbr-employee"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-darkblue text-darkblue rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
            placeholder="company@company.gmail.com"
          />
          {(formErrors && formErrors?.phoneNumber) || errors?.phone_number ? (
            <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
              {formErrors?.phoneNumber || errors?.phone_number}
            </div>
          ) : null}
        </div>
      </div>
      <div>
          <label htmlFor="nbr-employee">
            Company Phone
            </label>
          <div className="flex items-center bg-white">
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-darkblue text-gray-900 rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
            placeholder="company@company.gmail.com"
          />
          <IoLocationSharp className="text-base text-darkblue" />
        </div>
      </div>
      {(formErrors && formErrors?.password) || errors?.password ? (
        <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
          {formErrors?.password || errors?.password}
        </div>
      ) : null}

      <div>
        <button
          type="button"
          // onClick={() => {
          //   setFormErrors({});
          //   dispatch(
          //     PersonalInfoValidation(
          //       formErrors,
          //       setFormErrors,
          //       fullnames,
          //       phoneNumber,
          //       email,
          //       password,
          //       confirmPassword,
          //       profilePic,
          //       next
          //     )
          //   );
          // }}
          onClick={() => next()}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ligherdarkblue hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ligherdarkblue"
        >
          Continue
        </button>
      </div>
    </form>

    </div>
  );
  function validate() {}
}

export default PersonalInfo;
