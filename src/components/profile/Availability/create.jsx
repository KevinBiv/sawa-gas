import { findAllByTestId } from "@testing-library/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAvailability, getSubscriptions } from "../../../store/actions";
import DaysSelector from "./DaysSelector";
function RegisterAvailability() {
  const { subscriptions, fetchingSubscriptions, selectedSubscription } =
    useSelector(({ Subscriptions }) => Subscriptions);

  const [daysAvailable, setDaysAvailable] = useState({
    interval: null,
    subscription_plan_id: null,
    days: [],
    day: null,
    from: null,
    to: null,
  });
  const [hourseSchedule, setHourseSchedule] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const handleClose = () => {
    setShowScheduleModal(false);
  };
  const alert = useAlert();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscriptions());
  }, []);
  return (
    <div className="bg-white p-10 rounded-xl space-y-5 lg:mx-20">
      <h2 className="font-bold text-base text-darkblue text-center mb-10">
        Availability
      </h2>
      <p className="text-sm text-gray-500">
        Days and hours you are available and ready to work
      </p>
      <div className="space-y-2">
        <h5 className="py-1 text-sm font-bold text-darkblue">Days Schedule</h5>
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
                  (daysAvailable?.interval === plan?.duration
                    ? " bg-lightgreen text-whitecolor"
                    : " bg-paleblue text-darkblue ") +
                  "text-sm  py-2 px-3 rounded-xl "
                }
              >
                {plan?.duration}
              </button>
            ))}
          {/* <button
            onClick={() => {
              setDaysAvailable({
                ...daysAvailable,
                interval: "1 day",
                from: null,
                to: null,
              });
              setShowScheduleModal(true);
            }}
            className={
              (daysAvailable?.interval === "1 day"
                ? " bg-lightgreen text-whitecolor"
                : " bg-paleblue text-darkblue ") +
              "text-sm  py-2 px-3 rounded-xl "
            }
          >
            1 day
          </button>
          <button
            onClick={() => {
              setDaysAvailable({
                ...daysAvailable,
                interval: "3 days",
                day: null,
                from: null,
                to: null,
              });
              setShowScheduleModal(true);
            }}
            className={
              (daysAvailable?.interval === "3 days"
                ? " bg-lightgreen text-whitecolor"
                : " bg-paleblue text-darkblue ") +
              "text-sm  py-2 px-3 rounded-xl "
            }
          >
            3 days
          </button>
          <button
            onClick={() =>
              setDaysAvailable({
                ...daysAvailable,
                interval: "1 week",
                day: null,
                from: null,
                to: null,
              })
            }
            className={
              (daysAvailable?.interval === "1 week"
                ? " bg-lightgreen text-whitecolor"
                : " bg-paleblue text-darkblue ") +
              "text-sm  py-2 px-3 rounded-xl "
            }
          >
            1 week
          </button>
          <button
            onClick={() =>
              setDaysAvailable({
                ...daysAvailable,
                interval: "1 month",
                day: null,
                from: null,
                to: null,
              })
            }
            className={
              (daysAvailable?.interval === "1 month"
                ? " bg-lightgreen text-whitecolor"
                : " bg-paleblue text-darkblue ") +
              "text-sm  py-2 px-3 rounded-xl "
            }
          >
            1 month
          </button> */}
        </div>
        <h5 className="py-1 text-sm font-bold text-darkblue">Hours Schedule</h5>
        <div className="grid   grid-cols-2 gap-2">
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

        <button
          type="button"
          onClick={() => onSubmit()}
          // onClick={() => history.push("/dashboard")}
          className="w-100 rounded-xl bg-lightgreen hover:opacity-90 text-white text-sm py-2"
        >
          Finish
        </button>
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
  function onSubmit(e) {
    // e.preventDefault();
    var subscription_plan_id = daysAvailable?.subscription_plan_id;
    var hours = hourseSchedule;
    var days = [];
    if (daysAvailable?.interval === "1 day") {
      days = [daysAvailable?.day];
      const data = { hours, days };
      dispatch(createAvailability(data, subscription_plan_id, alert, history));
    } else if (daysAvailable.interval === "3 days") {
      days = daysAvailable?.days;
      const data = { hours, days };
      dispatch(createAvailability(data, subscription_plan_id, alert, history));
    } else {
      const data = { hours };
      dispatch(createAvailability(data, subscription_plan_id, alert, history));
    }
  }
}

export default RegisterAvailability;
