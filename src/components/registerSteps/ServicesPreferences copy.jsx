import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/sawaLogo.png";
import choiceImg1 from "../../assets/images/servicechoice1.png";
import choiceImg2 from "../../assets/images/servicechoice2.png";
import choiceImg3 from "../../assets/images/servicechoice3.png";
import choiceImg4 from "../../assets/images/servicechoice4.png";
import choiceImg5 from "../../assets/images/servicechoice5.png";
import choiceImg6 from "../../assets/images/servicechoice6.png";
function ServicesPreferences() {
  const history = useHistory();
  return (
    <div className="bg-darkwhite flex flex-col justify-center items-center p-10 space-y-6">
      <img src={Logo} alt="logo" className="" />
      <h2 className="text-sm  text-darkblue font-bold">
        Please Select a service you need to begin with on sawa Mobility
      </h2>
      <div className="bg-white rounded-xl grid grid-cols-2 md:grid-cols-3 gap-2 p-10  ">
        <div className="border-t border-b-2 border-l border-r border-blue-50 rounded-sm">
          <div className="">
            <img
              src={choiceImg1}
              alt="bus image"
              className="w-100 max-h-32 object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-sm text-darkblue font-bold text-center">
              Public Bus
            </p>
          </div>
        </div>
        <div className="border-t border-b-2 border-l border-r border-blue-50 rounded-sm">
          <div className="">
            <img
              src={choiceImg2}
              alt="bus image"
              className="w-100 max-h-32 object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-sm text-darkblue font-bold text-center">Taxi</p>
          </div>
        </div>
        <div className="border-t border-b-2 border-l border-r border-blue-50 rounded-sm">
          <div className="">
            <img
              src={choiceImg3}
              alt="bus image"
              className="w-100 max-h-32 object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-sm text-darkblue font-bold text-center">Fuel</p>
          </div>
        </div>
        <div className="border-t border-b-2 border-l border-r border-blue-50 rounded-sm">
          <div className="">
            <img
              src={choiceImg4}
              alt="bus image"
              className="w-100 max-h-32 object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-sm text-darkblue font-bold text-center">
              School Bus
            </p>
          </div>
        </div>
        <div className="border-t border-b-2 border-l border-r border-blue-50 rounded-sm">
          <div className="">
            <img
              src={choiceImg5}
              alt="bus image"
              className="w-100 max-h-32 object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-sm text-darkblue font-bold text-center">
              Bicycle
            </p>
          </div>
        </div>
        <div className="border-t border-b-2 border-l border-r border-blue-50 rounded-sm">
          <div className="">
            <img
              src={choiceImg6}
              alt="bus image"
              className="w-100 max-h-32 object-cover"
            />
          </div>
          <div className="p-2">
            <p className="text-sm text-darkblue font-bold text-center">Cab</p>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => history.push("/dashboard")}
        className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ligherdarkblue hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ligherdarkblue"
      >
        Continue
      </button>
    </div>
  );
}

export default ServicesPreferences;
