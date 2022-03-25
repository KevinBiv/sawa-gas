import React, { useEffect } from "react";
import { useState } from "react";
import userImg from "../../assets/images/nurse 2.png";
import { FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GetValidImage } from "../../utils/image";
import { updateUser } from "../../store/actions";
import { useAlert } from "react-alert";
import Shimmers from "../loaders/Shimmers";
function AccountDetails({ editProfile, setEditProfile, activePane }) {
  const { userInfo, isUpdatingUser, isFetchingUser } = useSelector(
    ({ UserAuth }) => UserAuth
  );
  const [profile, setProfile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [accountValues, setAccountValues] = useState({
    address: null,
    avatar: null,
    date_of_birth: null,
    email: null,
    full_names: null,
    gender: null,
    phone_number: null,
  });
  const dispatch = useDispatch();
  const alert = useAlert();
  useEffect(() => {
    if (!isFetchingUser && userInfo) {
      setAccountValues({
        address: userInfo?.address,
        avatar: userInfo?.avatar,
        date_of_birth: userInfo?.date_of_birth,
        email: userInfo?.email,
        full_names: userInfo?.full_names,
        gender: userInfo?.gender,
        phone_number: userInfo?.phone_number,
      });
    }
  }, [isFetchingUser, userInfo]);

  useEffect(() => {
    if (editProfile && activePane === "account-details") {
      onUpdate();
    }
  }, [editProfile]);
  return (
    <div className=" bg-white p-10 space-y-3 rounded-xl">
      <div className="flex  justify-center items-start py-2">
        {isFetchingUser ? (
          <div className="overflow-hidden rounded-circle">
            <Shimmers width="150px" height="150px" />
          </div>
        ) : (
          <div className="relative">
            <div className="w-40 h-40 rounded-circle border-4 ">
              <img
                className="w-40 h-40 rounded-circle relative border-4"
                src={
                  profilePreview
                    ? profilePreview
                    : GetValidImage(accountValues?.avatar)
                }
              />
            </div>

            <input
              type="file"
              accept="image/*"
              id="user-avatar"
              onChange={(e) => {
                setProfile(e.target.files[0]);
                setProfilePreview(URL.createObjectURL(e.target.files[0]));
              }}
              hidden
            />
            <label
              for="user-avatar"
              className="cursor-pointer absolute m-0 right-16 -bottom-2 rounded-circle "
            >
              {" "}
              <FaCamera className="text-lightgreen text-4xl" />
            </label>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className=" flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="names"
          >
            Full Names
          </label>
          {isFetchingUser ? (
            <div className="overflow-hidden">
              <Shimmers width="600px" height="50px" className="w-100" />
            </div>
          ) : (
            <input
              type="text"
              className="w-100 text-gray-500  text-sm h-100 form-control px-4 py-2 focus:shadow-none focus:ring-lightgreen focus:border-lightgreen focus:z-10"
              id="names"
              value={accountValues?.full_names}
              onChange={(e) =>
                setAccountValues({
                  ...accountValues,
                  full_names: e.target.value,
                })
              }
              placeholder="Enter you full names"
            />
          )}
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
        <div className=" flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="email"
          >
            Email
          </label>
          {isFetchingUser ? (
            <div className="overflow-hidden">
              <Shimmers width="600px" height="50px" className="w-100" />
            </div>
          ) : (
            <input
              type="text"
              className="w-100 text-gray-500  text-sm h-100 form-control px-4 py-2 focus:shadow-none focus:ring-lightgreen focus:border-lightgreen focus:z-10"
              name="email"
              id="email"
              value={accountValues?.email}
              onChange={(e) =>
                setAccountValues({ ...accountValues, email: e.target.value })
              }
              placeholder="Enter your email"
            />
          )}
        </div>

        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
        <div className="flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="phone"
          >
            Phone
          </label>
          {isFetchingUser ? (
            <div className="overflow-hidden">
              <Shimmers width="600px" height="50px" className="w-100" />
            </div>
          ) : (
            <input
              type="text"
              className="w-100 text-gray-500  text-sm h-100 form-control px-4 py-2 focus:shadow-none focus:ring-lightgreen focus:border-lightgreen focus:z-10"
              name="phone"
              id="phone_number"
              value={accountValues?.phone_number}
              onChange={(e) =>
                setAccountValues({
                  ...accountValues,
                  phone_number: e.target.value,
                })
              }
              placeholder="Enter your phone number"
            />
          )}
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
        <div className="flex space-x-3 items-center">
          <label
            className="text-sm text-gray-600 font-bold w-1/3"
            htmlFor="address"
          >
            Address
          </label>
          {isFetchingUser ? (
            <div className="overflow-hidden">
              <Shimmers width="600px" height="50px" className="w-100" />
            </div>
          ) : (
            <input
              type="text"
              className="w-100 text-gray-500 text-sm h-100 form-control px-4 py-2 focus:shadow-none focus:ring-lightgreen focus:border-lightgreen focus:z-10"
              name="address"
              id="address"
              value={accountValues?.address}
              onChange={(e) =>
                setAccountValues({ ...accountValues, address: e.target.value })
              }
              placeholder="Enter your address"
            />
          )}
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-5/6 text-gray-700" />
        </div>
      </div>
    </div>
  );
  function onUpdate() {
    if (isUpdatingUser) return;

    var formData = new FormData();
    formData.append("full_names", accountValues?.full_names);
    if (userInfo?.email !== accountValues?.email) {
      formData.append("email", accountValues?.email);
    }

    formData.append("phone_number", accountValues?.phone_number);
    // formData.append("gender", gender);
    // formData.append("date_of_birth", age);
    formData.append("address", accountValues?.address);
    if (profile) {
      formData.append("avatar", profile);
    }

    dispatch(updateUser(formData, setEditProfile, activePane, alert));
  }
}

export default AccountDetails;
