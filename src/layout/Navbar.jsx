import React from "react";
import { IoMenu } from "react-icons/io5";
import { useDispatch } from "react-redux";
import imgLogo from "../assets/images/sawaLogo.png";
import { setShowSidebar } from "../store/actions";
function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="flex py-6 mx-6 sm:mx-10 space-x-6 items-center md:hidden">
      <button onClick={() => dispatch(setShowSidebar(true))}>
        <IoMenu className="text-4xl" />
      </button>
      <div className="">
        <img src={imgLogo} alt="logo" className="max-h-6 object-cover" />
        {/* flex flex-col justify-center items-center m-3 1 p-6 */}
      </div>
    </div>
  );
}

export default Navbar;
