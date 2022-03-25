import React from "react";
import topDots from "../../assets/images/dots top.png";
import bottomDots from "../../assets/images/bottom dots.png";
import nurseImg from "../../assets/images/nurse.png";
import circleImg from "../../assets/images/circle.png";
function Banner() {
  return (
    <div className="register bg-lightgreen relative  justify-center items-center hidden md:flex">
      <img
        src={topDots}
        alt="Nurse "
        className="absolute top-0 left-0 lg:w-2/4 w-11/12"
      />

      <div className="w-1/2  relative flex justify-center items-center ">
        <img src={circleImg} alt="Nurse " className="relative " />
        <img src={nurseImg} alt="Nurse " className="absolute bottom-0" />
      </div>

      <img
        src={bottomDots}
        alt="Nurse "
        className="absolute bottom-0 right-0 lg:w-2/4"
      />
    </div>
  );
}

export default Banner;
