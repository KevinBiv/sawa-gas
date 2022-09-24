import React from "react";

import pompiste from "../../assets/images/pompiste 1.png";

import topCircle1 from "../../assets/images/topcircle1.png";
import topCircle2 from "../../assets/images/topcircle2.png";
import bottomDots from "../../assets/images/bottom dots.png";
import carImg from "../../assets/images/car 1.png";
import circleImg from "../../assets/images/circleImg.png";
function Banner() {
  return (
    <div className="register bg-ligherdarkblue relative  justify-center items-center hidden md:flex overflow-hidden">
      {/* <img src={topCircle1} alt="Icon" className="absolute top-0 left-0 w-20" /> */}
      {/* <img
        src={topCircle2}
        alt="Icon"
        className="absolute w-32 top-16 left-9"
      /> */}

      <div className="w-1/2 border bg-lightergray">
        {/* <img src={circleImg} alt="Icon" className="relative " />
        <img src={carImg} alt="Car Icon" className="absolute left-4" /> */}
        <img src={pompiste} alt="Pompiste Icon" className="" />
        
      </div>

      <img
        src={bottomDots}
        alt="Icon"
        className="absolute bottom-0 right-0 w-100"
      />
    </div>
  );
}

export default Banner;
