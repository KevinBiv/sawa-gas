import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import AccountDetails from "../../components/profile/AccountDetails";
import Security from "../../components/profile/Security";
import { MdKeyboardArrowRight } from "react-icons/md";
import Availability from "../../components/profile/Availability/index";
import PersonalDetails from "../../components/profile/PersonalDetails/index";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvailability,
  getProfile,
  getSubscriptions,
  getUser,
} from "../../store/actions";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
function Profile() {
  const { isUpdatingUser, isFetchingUser } = useSelector(
    ({ UserAuth }) => UserAuth
  );
  const {
    updatingAvailability,
    updatingProfile,
    fetchingAvailability,
    fetchingProfile,
  } = useSelector(({ Profile }) => Profile);
  const { fetchingSubscriptions } = useSelector(
    ({ Subscriptions }) => Subscriptions
  );
  const [editProfile, setEditProfile] = useState(false);
  const [activePane, setActivePane] = useState("account-details");
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useAlert();

  const handleSelect = (key) => {
    if (key === "account-details") {
      setActivePane("account-details");
      dispatch(getUser());
    } else if (key === "personal-details") {
      setActivePane("personal-details");
      dispatch(getProfile(history, alert));
    } else if (key === "password-security") {
      setActivePane("password-security");
    } else if (key === "availability") {
      setActivePane("availability");
      dispatch(getSubscriptions());
      dispatch(getAvailability());
    }
  };
  useEffect(() => {
    dispatch(getUser());
    dispatch(getProfile(history, alert));
    dispatch(getSubscriptions());
    dispatch(getAvailability());
  }, []);
  return (
    <div className="min-h-screen p-10 profile">
      <Tab.Container
        id="left-tabs-example"
        onSelect={handleSelect}
        defaultActiveKey="account-details"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3">
          <div className="space-y-3 ">
            <Nav
              variant="pills"
              className="md:flex-col sm:flex-row bg-white rounded-xl"
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="account-details"
                  className="flex justify-between items-center text-gray-500 hover:text-lightgreen text-base"
                >
                  <p>Account Details</p>
                  <MdKeyboardArrowRight className="arrow-next  " />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="personal-details"
                  className="flex justify-between items-center text-gray-500 hover:text-lightgreen text-base"
                >
                  <p>Personal Details</p>
                  <MdKeyboardArrowRight className="arrow-next  " />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="password-security"
                  className="flex justify-between items-center text-gray-500 hover:text-lightgreen text-base"
                >
                  <p>Password & Security</p>
                  <MdKeyboardArrowRight className="arrow-next  " />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="availability"
                  className="flex justify-between items-center text-gray-500 hover:text-lightgreen text-base"
                >
                  <p> Availability</p>
                  <MdKeyboardArrowRight className="arrow-next  " />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div>
              <button
                type="submit"
                onClick={() => {
                  if (
                    !isFetchingUser &&
                    !fetchingAvailability &&
                    !fetchingProfile &&
                    !fetchingSubscriptions
                  ) {
                    setEditProfile(true);
                  }
                }}
                className="w-100 rounded-xl bg-lightgreen hover:opacity-90 text-white text-sm py-2"
              >
                {isUpdatingUser || updatingAvailability || updatingProfile
                  ? "Saving ..."
                  : "Save changes"}
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <Tab.Content>
              <Tab.Pane eventKey="account-details">
                <AccountDetails
                  editProfile={editProfile}
                  setEditProfile={setEditProfile}
                  activePane={activePane}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="personal-details">
                <PersonalDetails
                  editProfile={editProfile}
                  setEditProfile={setEditProfile}
                  activePane={activePane}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="password-security">
                <Security
                  editProfile={editProfile}
                  setEditProfile={setEditProfile}
                  activePane={activePane}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="availability">
                <Availability
                  editProfile={editProfile}
                  setEditProfile={setEditProfile}
                  activePane={activePane}
                  // onEnter={() => dispatch(getSubscriptions())}
                />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
}

export default Profile;
