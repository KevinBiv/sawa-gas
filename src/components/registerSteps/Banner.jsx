import React from "react";
import topCircle1 from "../../assets/images/topcircle1.png";
import topCircle2 from "../../assets/images/topcircle2.png";
import bottomDots from "../../assets/images/bottom dots.png";
import carImg from "../../assets/images/car 1.png";
import circleImg from "../../assets/images/circleImg.png";
function Banner() {
  return (
    <div className="register bg-ligherdarkblue relative  justify-center items-center hidden md:flex overflow-hidden">
      <img
        src={topCircle1}
        alt="Nurse "
        className="absolute top-0 left-0 w-20"
      />
      <img
        src={topCircle2}
        alt="Nurse "
        className="absolute w-32 top-16 left-9"
      />

      <div className="w-1/2  relative flex justify-center items-center ">
        <img src={circleImg} alt="Nurse " className="relative " />
        <img src={carImg} alt="Nurse " className="absolute left-4" />
      </div>

      <img
        src={bottomDots}
        alt="Nurse "
        className="absolute bottom-0 right-0 w-100"
      />
    </div>
  );
}

export default Banner;
