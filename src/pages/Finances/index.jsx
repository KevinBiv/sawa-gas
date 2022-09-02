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
    <div className="md:pt-14 pb-6 mx-6 sm:mx-10 ">
      <div className=" rounded-1 grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gay-y-0 lg:gap-x-4">
        <div>
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <h5 className="text-3xl text-darkblue font-bold">Finances</h5>
              <p className="text-sm text-lightergray font-semibold mb-3.5 xl:mb-0">
                Team Consuptions
              </p>
            </div>
          </div>
          <TotalExpenses />
        </div>

        <div className="col-span-2 ">
          <Tabs
            defaultActiveKey="Recharge-report"
            id="transport-services-tab"
            className="mb-3 bg-white py-2 custom-tab text-sm"
          >
            <Tab eventKey="Recharge-report" title="Recharge report">
              <RechargeReport />
            </Tab>
            <Tab eventKey="Expenses-report" title="Expenses report">
              <ExpensesReport />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body className="bg-paleindigo ">
          <FilterReport handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Finances;
