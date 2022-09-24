import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import smartCard from "../../assets/images/Group (4).png";
import fuel from "../../assets/images/fuel 1.png";
import diesel from "../../assets/images/diesel 1.png";
import gasoline from "../../assets/images/gasoline.png";

function StatisticsGeneral() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const history = useHistory();
    return(
        <div className='bg-white grid md:grid-cols-4'>
            <div className="flex space-x-3">
                <div className="py-1 px-2 rounded-circle flex items-center">
                    <img src={smartCard} alt="" />
                </div>
                <div role="button" onClick={() => history.push("/dashboard/finances")}>
                    <p className="text-lightergray font-semibold text-xs">Balance</p>

                    <p className="font-bold text-darkblue text-xl">
                        2,000,000<span className="text-xs">Rwf</span>
                    </p>
                </div>
            </div>

            <div className="flex space-x-3">
                <div className="py-1 px-2 rounded-circle flex items-center">
                    <img src={smartCard} alt="" />
                </div>
                <div role="button" onClick={() => history.push("/dashboard/finances")}>
                    <p className="text-lightergray font-semibold text-xs">Balance</p>

                    <p className="font-bold text-darkblue text-xl">
                        2,000,000<span className="text-xs">Rwf</span>
                    </p>
                </div>
            </div>

            <div className="flex space-x-3">
                <div className="py-1 px-2 rounded-circle flex items-center">
                    <img src={smartCard} alt="" />
                </div>
                <div role="button" onClick={() => history.push("/dashboard/finances")}>
                    <p className="text-lightergray font-semibold text-xs">Balance</p>

                    <p className="font-bold text-darkblue text-xl">
                        2,000,000<span className="text-xs">Rwf</span>
                    </p>
                </div>
            </div>

            <div className="flex space-x-3">
                <div className="py-1 px-2 rounded-circle flex items-center">
                    <img src={smartCard} alt="" />
                </div>
                <div role="button" onClick={() => history.push("/dashboard/finances")}>
                    <p className="text-lightergray font-semibold text-xs">Balance</p>

                    <p className="font-bold text-darkblue text-xl">
                        2,000,000<span className="text-xs">Rwf</span>
                    </p>
                </div>
            </div>
        </div> 
    )
}

export default StatisticsGeneral;