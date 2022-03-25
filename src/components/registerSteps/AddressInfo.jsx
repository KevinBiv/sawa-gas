import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { registerUser } from "../../store/actions";
import { IoMdEyeOff } from "react-icons/io";
function AddressInfo({
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
  prev,
}) {
  const { errors, isRegistering } = useSelector(({ UserAuth }) => UserAuth);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <form className="mt-8 space-y-6" id="submit-login" onSubmit={onSubmit}>
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="sr-only">
            Company Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-darkblue text-darkblue rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
            placeholder="Company Email Address"
          />
          {errors?.email ? (
            <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
              {errors?.email}
            </div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phoneNumber" className="sr-only">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            autoComplete="phoneNumber"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-darkblue text-darkblue rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
            placeholder="Phone number"
          />
          {errors?.phone_number ? (
            <div className="rounded border border-danger px-3 py-2 mt-1 text-xs bg-red-100">
              {errors?.phone_number}
            </div>
          ) : null}
        </div>

        <div className="flex items-center bg-white">
          <label htmlFor="password" className="sr-only">
            Create Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2 placeholder-darkblue text-gray-900 rounded-b-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm"
            placeholder="Create Password"
          />

          <IoMdEyeOff
            role="button"
            className="text-gray-700 mx-3 text-xl"
            onClick={() => setShowPassword(!showPassword)}
          />
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

      <div>
        <button
          type="submit"
          onClick={() => history.push("/preferences")}
          className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ligherdarkblue hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ligherdarkblue"
        >
          {isRegistering ? "Registering..." : "Register"}
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

export default AddressInfo;
