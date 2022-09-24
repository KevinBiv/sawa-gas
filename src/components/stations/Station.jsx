import React from "react";
import union from "../../assets/images/Union.png";

function Station(props) {
    return (
        <div className="grid sm:grid-cols-3">
            <img src={props.stationPhoto} alt="" className="max-w-auto" />
            <div className="col-span-2 flex justify-between items-center">
                <div>
                    <p>{props.stationName}</p>
                    <p>{props.stationLocation}</p>
                </div>
                <div>
                    <img src={union} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Station;