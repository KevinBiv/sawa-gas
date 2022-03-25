import React, { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/actions";
function Security({ editProfile, setEditProfile, activePane }) {
  const { updatingProfile, errors } = useSelector(({ Profile }) => Profile);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();
  useEffect(() => {
    if (editProfile && activePane === "password-security") {
      onUpdate();
    }
  }, [editProfile]);
  return (
    <div className="bg-white p-10 rounded-xl">
      <h5 className="font-bold text-base text-darkblue text-center mb-10">
        Password & Security
      </h5>
      <div className=" flex space-x-3 items-center">
        <label
          className="text-sm text-gray-600 font-bold w-1/3"
          htmlFor="names"
        >
          New Password
        </label>
        <div className="form-control flex items-center space-x-2">
          <input
            type={showPassword ? "text" : "password"}
            className="flex-1 text-gray-500  text-sm h-100 form-control px-0 border-0 py-1 focus:shadow-none focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10"
            id="password"
            required
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
          />
          <AiFillEye
            role="button"
            className="text-darkblue "
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>
      <div className=" flex space-x-3 items-center">
        <label
          className="text-sm text-gray-600 font-bold w-1/3"
          htmlFor="names"
        >
          Confirm New Password
        </label>
        <div className="form-control flex items-center space-x-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className="flex-1 text-gray-500  text-sm h-100 form-control px-0 border-0 py-1 focus:shadow-none focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10"
            id="password"
            required
            placeholder="*******"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <AiFillEye
            role="button"
            className="text-darkblue "
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>
      </div>
    </div>
  );
  function onUpdate() {
    if (updatingProfile) return;
    var formData = new FormData();
    formData.append("password", password);
    formData.append("password_confirmation", confirmPassword);

    dispatch(updateUser(formData, setEditProfile, activePane, alert));
  }
}

export default Security;
