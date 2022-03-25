import React, { useEffect, useState } from "react";

function StepNavigation(props) {
  const [style, setStyle] = useState({});

  const completed = props.progress * 100;

  const changeWidth = () => {
    var newStyle = {};
    if (props.progress === 0) {
      newStyle = {
        opacity: 0,
        display: "block",
        width: `${completed}%`,
      };
    } else {
      newStyle = {
        opacity: 1,
        width: `${completed}%`,
      };
    }

    setStyle(newStyle);
  };
  useEffect(() => {
    changeWidth();
    if (props.progress) {
      changeWidth();
    }
  }, [props.progress]);
  return (
    <div className="w-100 flex justify-center ">
      <div className="flex relative">
        <div className="bg-darkblue h-1.5 w-12 relative"></div>
        {props?.allSteps.map((item, index) => (
          <div
            className={
              (item.order === props?.current
                ? " bg-ligherdarkblue "
                : " bg-darkblue ") +
              (index === 0
                ? " absolute -left-7 bottom-3 "
                : " relative bottom-3 ") +
              " py-1 px-2.5 rounded-circle  text-white"
            }
          >
            <p>{item.order}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepNavigation;
