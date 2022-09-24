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
import StationsList from "../../components/stations/StationsList";
import { useEffect } from "react";





function Stations() {
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

  // let map;
  // useEffect(() => {
  //   map = leaflet.map('map').setView([51.505, -0.09], 13);
  // }, [])


  return (
    <div className="md:pt-14 pb-6  mx-6 sm:mx-10 space-y-6 service">
      <div className="flex justify-between items-center flex-wrap">
        <div>
          <h5 className="text-2xl text-darkblue font-bold">
            Gas Stations
          </h5>
        </div>
        <div className="flex md:space-x-4 items-center flex-wrap ">
          <button
            // onClick={() => setShowModal(true)}
            className="text-whitecolor bg-ligherdarkblue opacity-80 hover:opacity-100 rounded-sm px-10 py-3 text-sm"
          >
            Create gas station
          </button>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-4">

        <section className="col-span-1">
          <StationsList />
        </section>

        <section className="col-span-2 bg-white relative">
          <div id="map" className="h-1/2 bg-black p-4">
            <p>This is going to be a map</p>
          </div>
        </section>

      </div>

    </div>
  );
}

export default Stations;
