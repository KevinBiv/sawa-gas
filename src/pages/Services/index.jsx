import React, { useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import TableRowShimmers from "../../components/loaders/TableRowShimmers";
import { Modal, Tab, Tabs } from "react-bootstrap";
import SelectService from "../../components/services/SelectService";
import TablePageFilter from "../../components/filters/TablePageFilter";
import useTable from "../../utils/useTable";
import { useHistory } from "react-router-dom";
import ServiceDetails from "../../components/services/ServiceDetails";
import { useDispatch } from "react-redux";
import { setSelectedService } from "../../store/actions";
import TransportCardTopUpRequests from "../../components/services/Top up transport card/TransportCardTopUpRequests";
import FuelCardTopupRequests from "../../components/services/Top up Fuel card/FuelCardTopupRequests";
import CarRentRequests from "../../components/services/Rent car/CarRentRequests";
import BusRentRequests from "../../components/services/Rent bus/BusRentRequests";
import RequestBusRent from "../../components/services/Rent bus/RequestBusRent";
import RequestTransportCardTopUp from "../../components/services/Top up transport card/RequestTransportCardTopUp";
import RequestFuelCardTopup from "../../components/services/Top up Fuel card/RequestFuelCardTopup";
import RequestCarRent from "../../components/services/Rent car/RequestCarRent";
function Services() {
  const { services, isFetchingServices } = useSelector(
    ({ Services }) => Services
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(services, page, 5);
  const [openCarOderModel, setOpenCarOderModel] = useState(false);
  const [openToUpOderModel, setOpenToUpOderModel] = useState(false);
  const [openFuelOderModel, setOpenFuelOderModel] = useState(false);
  const [openBusOderModel, setOpenBusOderModel] = useState(false);
  const handleCloseOrder = () => {
    setOpenCarOderModel(false);
    setOpenToUpOderModel(false);
    setOpenFuelOderModel(false);
    setOpenBusOderModel(false);
  };
  const handleClose = () => {
    setShowModal(false);
    setShowDetailsModal(false);
  };
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="md:pt-14 pb-6  mx-6 sm:mx-10 space-y-6 service">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-2xl text-darkblue font-bold">
            My Transport Services
          </h5>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap ">
          <button
            onClick={() => setShowModal(true)}
            className="text-whitecolor bg-ligherdarkblue opacity-80 hover:opacity-100 rounded-sm px-3 py-2 text-sm"
          >
            Request a service
          </button>
        </div>
      </div>
      <Tabs
        defaultActiveKey="Transport card"
        id="transport-services-tab"
        className="mb-3 bg-white p-2 custom-tab text-sm"
      >
        <Tab eventKey="Transport card" title="Transport card">
          <TransportCardTopUpRequests />
        </Tab>
        <Tab eventKey="Fuel card" title="Fuel card">
          <FuelCardTopupRequests />
        </Tab>
        <Tab eventKey="Car Rent" title="Car Rent">
          <CarRentRequests />
        </Tab>
        <Tab eventKey="Bus Rent" title="Bus Rent">
          <BusRentRequests />
        </Tab>
      </Tabs>

      <Modal show={showModal} onHide={handleClose}>
        <SelectService
          handleClose={handleClose}
          handleCloseOrder={handleCloseOrder}
          openCarOderModel={openCarOderModel}
          setOpenCarOderModel={setOpenCarOderModel}
          openToUpOderModel={openToUpOderModel}
          setOpenToUpOderModel={setOpenToUpOderModel}
          openFuelOderModel={openFuelOderModel}
          setOpenFuelOderModel={setOpenFuelOderModel}
          openBusOderModel={openBusOderModel}
          setOpenBusOderModel={setOpenBusOderModel}
        />
      </Modal>

      <Modal show={openToUpOderModel} onHide={handleCloseOrder}>
        <RequestTransportCardTopUp
          handleClose={handleClose}
          handleCloseOrder={handleCloseOrder}
        />
      </Modal>
      <Modal show={openFuelOderModel} onHide={handleCloseOrder}>
        <RequestFuelCardTopup
          handleClose={handleClose}
          handleCloseOrder={handleCloseOrder}
        />
      </Modal>
      <Modal show={openCarOderModel} onHide={handleCloseOrder}>
        <RequestCarRent
          handleClose={handleClose}
          handleCloseOrder={handleCloseOrder}
        />
      </Modal>
      <Modal show={openBusOderModel} onHide={handleCloseOrder}>
        <RequestBusRent
          handleClose={handleClose}
          handleCloseOrder={handleCloseOrder}
        />
      </Modal>
    </div>
  );
}

export default Services;
