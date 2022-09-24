import React from "react";
import online from "../../assets/images/Ellipse 59.png";
import offline from "../../assets/images/Ellipse 64.png";


function TransactionsUpdates() {
    return(
        <div className="py-4 px-4">
            <table className="w-full">
                <thead className="border">
                    <tr className="px-4 py-2">
                        <td className="px-4 py-2">Time</td>
                        <td>Stations</td>
                        <td>Balance</td>
                        <td>Last Payment</td>
                        <td>Units Sold</td>
                        <td>Device Status</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-4">
                        <td className="px-4 py-2">11:27</td>
                        <td>Engine#12</td>
                        <td>212,500Rwf</td>
                        <td>12,500Rwf</td>
                        <td>100 liters</td>
                        <div className="flex justify-around items-center gap-1">
                            <td><img src={online} alt="" /></td>
                            <p>online</p>
                        </div>
                    </tr>
                    <tr className="border-b-4">
                        <td className="px-4 py-2">11:27</td>
                        <td>Engine#12</td>
                        <td>212,500Rwf</td>
                        <td>12,500Rwf</td>
                        <td>100 liters</td>
                        <div className="flex justify-around items-center gap-1">
                            <td><img src={online} alt="" /></td>
                            <p>online</p>
                        </div>
                    </tr>
                    <tr className="border-b-4">
                        <td className="px-4 py-2">11:27</td>
                        <td>Engine#12</td>
                        <td>212,500Rwf</td>
                        <td>12,500Rwf</td>
                        <td>100 liters</td>
                        <div className="flex justify-around items-center gap-1">
                            <td><img src={online} alt="" /></td>
                            <p>online</p>
                        </div>
                    </tr>
                    <tr className="border-b-4">
                        <td className="px-4 py-2">11:27</td>
                        <td>Engine#12</td>
                        <td>212,500Rwf</td>
                        <td>12,500Rwf</td>
                        <td>100 liters</td>
                        <div className="flex justify-around items-center gap-1">
                            <td><img src={online} alt="" /></td>
                            <p>online</p>
                        </div>
                    </tr>
                    <tr className="border-b-4">
                        <td className="px-4 py-2">11:27</td>
                        <td>Engine#12</td>
                        <td>212,500Rwf</td>
                        <td>12,500Rwf</td>
                        <td>100 liters</td>
                        <div className="flex justify-around items-center gap-1">
                            <td><img src={online} alt="" /></td>
                            <p>online</p>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TransactionsUpdates;