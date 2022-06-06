import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/sawaLogo.png";
import choiceImg1 from "../../assets/images/servicechoice1.png";
import choiceImg2 from "../../assets/images/servicechoice2.png";
import choiceImg3 from "../../assets/images/servicechoice3.png";
import choiceImg4 from "../../assets/images/servicechoice4.png";
import choiceImg5 from "../../assets/images/servicechoice5.png";
import choiceImg6 from "../../assets/images/servicechoice6.png";
function ServicesPreferences() {
  const [selectedService, setSelectedService] = useState([]);
  const [services, setServices] = useState([
    { id: 1, name: "Public Bus", checked: false },
    { id: 2, name: "Taxi", checked: false },
    { id: 3, name: "Fuel", checked: false },
    { id: 4, name: "School Bus", checked: false },
    { id: 5, name: "Bicycle", checked: false },
    { id: 6, name: "Cab", checked: false },
  ]);
  console.log("selected servicesa:", services);
  const history = useHistory();
  return (
    <div className="bg-darkwhite flex flex-col justify-center items-center p-10 space-y-6">
      <img src={Logo} alt="logo" className="" />
      <h2 className="text-lg text-darkblue font-bold text-center">
        Please Select a service you need to begin with on sawa Mobility
      </h2>
      <div className="bg-white rounded-xl py-10  md:px-20 px-3.5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
        {services?.map((service, index) => (
          <button
            onClick={(e) => {
              setServices(
                services?.map((_service) =>
                  _service.id === service.id
                    ? { ..._service, checked: !service?.checked }
                    : _service
                )
              );
            }}
            className={
              (service?.checked ? " shadow-md " : "") +
              "relative p-2 border-b-4 border-l-2 border-r-2 border-t-2 border-blue-50 rounded-md text-gray-800 hover:text-ligherdarkblue hover:shadow-md"
            }
          >
            {service?.checked ? (
              <div className="absolute -top-1 -right-1.5 bg-lighdeepblue rounded-circle p-1">
                <svg
                  className=""
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.62426 15.604L0.529095 5.95226C0.385356 5.67997 0.696039 5.39373 0.955665 5.55924L6.48976 9.08722C6.59599 9.15495 6.73323 9.14908 6.8333 9.07253L17.8721 0.627821C18.1562 0.410478 18.5139 0.78335 18.2849 1.05815L6.12003 15.656C5.98335 15.82 5.72393 15.7928 5.62426 15.604Z"
                    fill="white"
                  />
                </svg>
              </div>
            ) : null}
            {(() => {
              switch (service?.name) {
                case "Public Bus":
                  return (
                    <div className="">
                      <img
                        src={choiceImg1}
                        alt="bus image"
                        className="w-100  object-cover"
                      />
                    </div>
                  );

                case "Taxi":
                  return (
                    <div className="">
                      <img
                        src={choiceImg2}
                        alt="bus image"
                        className="w-100  object-cover"
                      />
                    </div>
                  );

                case "Fuel":
                  return (
                    <div className="">
                      <img
                        src={choiceImg3}
                        alt="bus image"
                        className="w-100  object-cover"
                      />
                    </div>
                  );

                case "School Bus":
                  return (
                    <div className="">
                      <img
                        src={choiceImg4}
                        alt="bus image"
                        className="w-100 object-cover"
                      />
                    </div>
                  );

                case "Bicycle":
                  return (
                    <div className="">
                      <img
                        src={choiceImg5}
                        alt="bus image"
                        className="w-100 object-cover"
                      />
                    </div>
                  );
                case "Cab":
                  return (
                    <div className="">
                      <img
                        src={choiceImg6}
                        alt="bus image"
                        className="w-100 object-cover"
                      />
                    </div>
                  );

                default:
                  return "";
              }
            })()}

            <div className="p-2">
              <p className="text-sm font-bold text-center">{service?.name}</p>
            </div>
          </button>
        ))}
      </div>
      <button
        type="submit"
        onClick={() => {
          history.push("/dashboard");
        }}
        className="group relative flex justify-center py-2.5 px-10 md:px-40 border border-transparent text-sm font-medium rounded-md text-white bg-ligherdarkblue hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ligherdarkblue"
      >
        Continue
      </button>
    </div>
  );
}

export default ServicesPreferences;
