import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptions, updateAvailability } from "../../../store/actions";
import Shimmers from "../../loaders/Shimmers";
import DaysSelector from "./DaysSelector";

function Availability({ editProfile, setEditProfile, activePane }) {
  const { subscriptions, fetchingSubscriptions } = useSelector(
    ({ Subscriptions }) => Subscriptions
  );
  const { availability, fetchingAvailability, updatingAvailability } =
    useSelector(({ Profile }) => Profile);
  const [daysAvailable, setDaysAvailable] = useState({
    interval: null,
    subscription_plan_id: null,
    days: [],
    day: null,
    from: null,
    to: null,
  });
  const [hourseSchedule, setHourseSchedule] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [availabilityStatus, setAvailabilityStatus] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const handleClose = () => {
    setShowScheduleModal(false);
  };
  const dispatch = useDispatch();
  const alert = useAlert();
  console.log("daysAvailable", daysAvailable, "editing:", editProfile);
  useEffect(() => {
    if (!fetchingSubscriptions && !fetchingAvailability) {
      setHourseSchedule(availability?.hours || null);
      setDaysAvailable({
        ...daysAvailable,
        subscription_plan_id: availability?.subscription_plan_id,
        days: availability?.days || null,
      });
    }
  }, [fetchingSubscriptions, fetchingAvailability]);
  useEffect(() => {
    if (editProfile && activePane === "availability") {
      onUpdate();
    }
  }, [editProfile]);
  return (
    <div className="bg-white p-10 rounded-xl space-y-5">
      <h2 className="font-bold text-base text-darkblue text-center mb-10">
        Availability
      </h2>
      <p className="text-sm text-gray-500">
        Days and hours you are available and ready to work
      </p>
      <div className="space-y-2">
        <h5 className="py-1 text-sm font-bold text-darkblue">Days Schedule</h5>
        {fetchingSubscriptions && fetchingAvailability ? (
          <div className="overflow-hidden">
            <Shimmers width="600px" height="50px" className="w-100" />
          </div>
        ) : (
          <div className="grid grid-cols-2  md:grid-cols-4 gap-2">
            {!fetchingSubscriptions &&
              subscriptions?.length > 0 &&
              subscriptions?.map((plan, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (plan?.duration === "1 day") {
                      setDaysAvailable({
                        ...daysAvailable,
                        interval: "1 day",
                        subscription_plan_id: plan?.id,
                        from: null,
                        to: null,
                      });
                      setShowScheduleModal(true);
                    } else if (plan?.duration === "3 days") {
                      setDaysAvailable({
                        ...daysAvailable,
                        interval: "3 days",
                        subscription_plan_id: plan?.id,
                        day: null,
                        from: null,
                        to: null,
                      });
                      setShowScheduleModal(true);
                    } else if (plan?.duration === "1 week") {
                      setDaysAvailable({
                        ...daysAvailable,
                        interval: "1 week",
                        subscription_plan_id: plan?.id,
                        day: null,
                        from: null,
                        to: null,
                      });
                    } else if (plan?.duration === "1 month") {
                      setDaysAvailable({
                        ...daysAvailable,
                        interval: "1 month",
                        subscription_plan_id: plan?.id,
                        day: null,
                        from: null,
                        to: null,
                      });
                    }
                  }}
                  className={
                    (daysAvailable?.subscription_plan_id === plan?.id
                      ? " bg-lightgreen text-whitecolor"
                      : " bg-paleblue text-darkblue ") +
                    "text-sm  py-2 px-3 rounded-xl "
                  }
                >
                  {plan?.duration}
                </button>
              ))}
          </div>
        )}

        <h5 className="py-1 text-sm font-bold text-darkblue">Hours Schedule</h5>
        {fetchingSubscriptions && fetchingAvailability ? (
          <div className="overflow-hidden">
            <Shimmers width="600px" height="50px" className="w-100" />
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 gap-2">
            <button
              onClick={() => setHourseSchedule("8:00AM - 8:00PM")}
              className={
                (hourseSchedule === "8:00AM - 8:00PM"
                  ? " text-whitecolor bg-lightgreen "
                  : " text-darkblue bg-paleblue ") +
                "text-sm py-2 px-3 rounded-xl "
              }
            >
              8:00AM - 8:00 PM
            </button>
            <button
              onClick={() => setHourseSchedule("8:00PM - 8:00AM")}
              className={
                (hourseSchedule === "8:00PM - 8:00AM"
                  ? " text-whitecolor bg-lightgreen "
                  : " text-darkblue bg-paleblue ") +
                "text-sm py-2 px-3 rounded-xl "
              }
            >
              8:00PM - 8:00 AM
            </button>
          </div>
        )}
        <h5 className="py-1 text-sm font-bold text-darkblue">
          {" "}
          Availability status
        </h5>
        {fetchingSubscriptions && fetchingAvailability ? (
          <div className="overflow-hidden">
            <Shimmers width="600px" height="50px" className="w-100" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setAvailabilityStatus(true)}
              className={
                (availabilityStatus
                  ? " bg-lightgreen text-whitecolor "
                  : " bg-paleblue text-darkblue ") +
                "text-sm  py-2 px-3 rounded-xl "
              }
            >
              I’m Available
            </button>
            <button
              onClick={() => setAvailabilityStatus(false)}
              className={
                (!availabilityStatus
                  ? " bg-lightgreen text-whitecolor "
                  : " bg-paleblue text-darkblue ") +
                "text-sm  py-2 px-3 rounded-xl "
              }
            >
              I’m not Available
            </button>
          </div>
        )}
      </div>
      <Modal show={showScheduleModal} onHide={handleClose}>
        <Modal.Body>
          <DaysSelector
            handleClose={handleClose}
            daysAvailable={daysAvailable}
            setDaysAvailable={setDaysAvailable}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
  function onUpdate() {
    if (updatingAvailability) return;

    const hours = hourseSchedule;

    var data = {};
    if (
      daysAvailable?.subscription_plan_id !== availability?.subscription_plan_id
    ) {
      var days = [];
      const subscription_plan_id = daysAvailable?.subscription_plan_id;
      days = daysAvailable?.days;
      if (daysAvailable?.interval === "1 day") {
        days = [daysAvailable?.day];
        data = { hours, subscription_plan_id, days };
      } else if (daysAvailable.interval === "3 days") {
        days = daysAvailable?.days;
        data = { hours, subscription_plan_id, days };
      } else {
        data = { hours, subscription_plan_id };
      }

      console.log("availability:", daysAvailable, "data:", data);
      dispatch(updateAvailability(data, setEditProfile, alert));
    } else {
      data = { hours };
      console.log("availability:", daysAvailable, "data:", data);
      dispatch(updateAvailability(data, setEditProfile, alert));
    }
  }
}

export default Availability;
