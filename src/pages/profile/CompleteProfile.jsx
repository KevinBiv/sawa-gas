import React from "react";
import { Step, Steps } from "react-step-builder";
import RegisterAvailability from "../../components/profile/Availability/create";
import CreatePersonalDetails from "../../components/profile/PersonalDetails/create";
function CompleteProfile() {
  return (
    <div className=" p-10 ">
      <Steps>
        <Step component={CreatePersonalDetails}></Step>
        <Step component={RegisterAvailability}></Step>
      </Steps>
    </div>
  );
}

export default CompleteProfile;
