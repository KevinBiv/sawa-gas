import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { registerUser } from "../../store/actions";
import { IoMdEyeOff } from "react-icons/io";


import companyLogoVector from "../../assets/images/Vector (4).png";

function BankInfo({
  fullnames,
  phoneNumber,
  setPhoneNumber,
  setEmail,
  email,
  setPassword,
  password,
  confirmPassword,
  profilePic,
  setAddress,
  setAge,
  setGender,
  address,
  age,
  gender,
  next,
}) {
  const { errors, isRegistering } = useSelector(({ UserAuth }) => UserAuth);
  // const [phoneNumber, setPhoneNumber]
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <form className="mt-8 space-y-6" id="submit-login" onSubmit={onSubmit}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="space-y-6">
        <div>
          <label htmlFor="email">
            Select bank
          </label>
          <div>
            <select
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-darkblue text-darkblue rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
              placeholder="enter a bank of your choice"
            >
                <option>enter a bank of your choice</option>
            </select>
          </div>
          {errors?.email ? (
            <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
              {errors?.email}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phoneNumber">
            Bank account
          </label>
          <div>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              autoComplete="phoneNumber"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-darkblue text-darkblue rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
              placeholder="enter your bank account number"
            />
          </div>
          
          {errors?.phone_number ? (
            <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
              {errors?.phone_number}
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password">
            Headquarters
          </label>
          <div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
              placeholder="enter location of your headquarters"
            />
          </div>
        </div>
        {errors?.password ? (
          <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
            {errors?.password}
          </div>
        ) : null}
      </div>
      {errors?.error ? (
        <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
          {errors?.error}
        </div>
      ) : null}

        {/* <div>
            <button
            type="submit"
            onClick={() => history.push("/preferences")}
            className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ligherdarkblue hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ligherdarkblue"
            >
            {isRegistering ? "Registering..." : "Register"}
            </button>
        </div> */}

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
  );
  function onSubmit(e) {
    // e.preventDefault();
    // if (isRegistering) return;
    // var formData = new FormData();
    // formData.append("full_names", fullnames);
    // formData.append("email", email);
    // formData.append("phone_number", phoneNumber);
    // formData.append("password", password);
    // formData.append("password_confirmation", confirmPassword);
    // formData.append("gender", gender);
    // formData.append("date_of_birth", age);
    // formData.append("address", address);
    // formData.append("avatar", profilePic);
    // console.log("data:", Array.from(formData.entries()));
    // dispatch(registerUser(formData, history, prev));
  }
}

export default BankInfo;
