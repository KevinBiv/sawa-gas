import React from "react";
import {BsSearch} from "react-icons/bs";
import Station from "./Station";
import stationPhoto from "../../assets/images/image 15.png";


function StationsList() {
    return(
        <div className="bg-white px-10 py-4">
            <div className="flex justify-between items-center">
                <p>42 stations</p>
                <button className="bg-lightgray p-px">
                    <BsSearch />
                </button>
            </div>
            <div className="flex flex-col justify-center gap-2 mt-8 max-h-4 overflow-y-auto">
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
                <Station stationPhoto={stationPhoto} stationName="Engen#12" stationLocation="Kimihurura near RDB" />
            </div>
        </div>
    )
}

export default StationsList;