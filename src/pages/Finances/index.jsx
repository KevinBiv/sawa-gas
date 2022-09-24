import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NameFilter from "../../components/filters/NameFilter";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { Modal, Tab, Tabs } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import DayFilter from "../../components/filters/DayFilter";
import TotalExpenses from "../../components/statistics/TotalExpenses";
import FilterReport from "../../components/finances/FilterReport";
import RechargeReport from "../../components/finances/RechargeReport";
import ExpensesReport from "../../components/finances/ExpensesReport";


import verticalLine from "../../assets/images/Rectangle 4418.png";
import gasPump from "../../assets/images/gas pump 1.png";
import petroleum from "../../assets/images/Petroleum.png";
import engen from "../../assets/images/engen.png";
import tools from "../../assets/images/tools.png";


import money from "../../assets/images/money.png";
import TransactionsUpdates from "../../components/finances/TransactionsUpdates";

function Finances() {
  const [searchText, setSearchText] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="md:pt-14 pb-6 mx-6 sm:mx-10 grid lg:grid-cols-3 gap-5">
      <div className="col-span-2">
        <div className="bg-white flex justify-between items-center px-4 py-2 mb-6">
          <h2 className="font-bold text-darkblue text-xl">Finances</h2>
          <img src={money} alt="" className="text-sm" />
        </div>
        <div className="bg-white flex justify-between items-center mt-6 px-4 py-4">
          <section className="flex flex-col h-full gap-4">
            <div>
              <p className="text-xs font-semibold text-lightergray">Overall Balance</p>
              <p className="font-bold text-darkblue text-xl">2,000,000<span>Rwf</span></p>
            </div>
            <div>
              <p className="text-xs font-semibold text-lightergray">Yesterday's income</p>
              <p className="font-bold text-darkblue text-xl">750,000<span>Rwf</span></p>
            </div>
          </section>
          <section>
            <img src={verticalLine} alt="" />
          </section>
          <section className="flex justify-between items-center w-1/2">
            <div className="flex flex-col justify-center items-center">
              <img src={gasPump} alt="" />
              <div>
                <p className="text-xs font-semibold text-lightergray">Income from Diesel</p>
                <p className="font-bold text-darkblue text-xl">160,500<span>Rwf</span></p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={petroleum} alt="" className="mb-3" />
              <div>
                <p className="text-xs font-semibold text-lightergray">Income from Petroleum</p>
                <p className="font-bold text-darkblue text-xl">250,400<span>Rwf</span></p>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-8 bg-white">
          <TransactionsUpdates />
        </div>
      </div>

      <div className="col-span-1 flex flex-col">
        <div className="bg-ligherdarkblue px-4 py-3 flex flex-col gap-2">
          <img src={engen} alt="" />
          <div className="bg-lightwhite">
            <p>Diesel sold</p>
            <p>1200 Liters</p>
          </div>
          <div>
            <p>Petroleum sold </p>
            <p>1300 Liters</p>
          </div>
        </div>

        <div className="bg-white flex justify-between items-center mt-4 px-4 py-4">
          <h3 className="font-bold text-xl">Quick Tools</h3>
          <img src={tools} alt="" />
        </div>

        <div className="bg-white mt-2 flex flex-col px-4 py-2">
          <button className="w-full border border-1 border-darkblue text-sm font-semibold text-darkblue mb-2 py-2">Withdraw Cash</button>
          <button className="w-full border border-1 border-darkblue text-sm font-semibold text-darkblue mb-2 py-2">Set Prices</button>
          <button className="w-full border border-1 border-darkblue text-sm font-semibold text-darkblue mb-2 py-2">Delete Station</button>
          <button className="w-full border border-1 border-darkblue text-sm font-semibold text-darkblue mb-2 py-2">Disable Devices</button>
        </div>

      </div>
    </div>
  );
}

export default Finances;
