import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//import '../assets/styles/css/shimmer.css'
function Shimmers(props) {
  return (
    <div className={props.className}>
      {[...Array(props.rows ?? 1).keys()].map((i) => (
        <div key={i}>
          <Skeleton
            width={props.width ?? 150}
            height={props.height ?? 20}
            className="mb-1 skeleton"
          />
        </div>
      ))}
    </div>
  );
}

export default Shimmers;