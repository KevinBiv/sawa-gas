import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { registerUser } from "../../store/actions";
import { IoMdEyeOff } from "react-icons/io";


import companyLogoVector from "../../assets/images/Vector (4).png";

function EmailConfirmation({
//   fullnames,
//   phoneNumber,
//   setPhoneNumber,
//   setEmail,
//   email,
//   setPassword,
//   password,
//   confirmPassword,
//   profilePic,
//   setAddress,
//   setAge,
//   setGender,
//   address,
//   age,
//   gender,
//   next,
}) {
  const { errors, isRegistering } = useSelector(({ UserAuth }) => UserAuth);
  // const [phoneNumber, setPhoneNumber]
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>

      OTP

      <form className="mt-8 space-y-6" id="submit-login">
        <div className="flex justify-between items-center">
            <input type="text" className="w-14 border-solid border-2 appearance-none rounded-none relative block px-3 py-2.5 text-darkblue rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10" />
            <input type="text" className="w-14 border-solid border-2 appearance-none rounded-none relative block px-3 py-2.5 text-darkblue rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10" />
            <input type="text" className="w-14 border-solid border-2 appearance-none rounded-none relative block px-3 py-2.5 text-darkblue rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10" />
            <input type="text" className="w-14 border-solid border-2 appearance-none rounded-none relative block px-3 py-2.5 text-darkblue rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10" />
            <input type="text" className="w-14 border-solid border-2 appearance-none rounded-none relative block px-3 py-2.5 text-darkblue rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10" />
            <input type="text" className="w-14 border-solid border-2 appearance-none rounded-none relative block px-3 py-2.5 text-darkblue rounded-t-md focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10" />
        </div>
      </form>

    </div>
  );
}

export default EmailConfirmation;
