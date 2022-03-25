import React, { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/sawaLogo.png";
import { Link } from "react-router-dom";
import { Step, Steps } from "react-step-builder";
import AddressInfo from "../../components/registerSteps/AddressInfo";
import PersonalInfo from "../../components/registerSteps/PersonalInfo";
import StepNavigation from "../../components/registerSteps/StepNavigation";
import Banner from "../../components/registerSteps/Banner";
function SignUp() {
  const { errors, loading } = useSelector(({ UserAuth }) => UserAuth);
  const [fullnames, setFullnames] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [address, setAddress] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const config = {
    navigation: {
      component: StepNavigation, // a React component with special props provided automatically
      location: "before", // or before
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="bg-darkwhite flex flex-col justify-center items-center p-10">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col justify-center items-center">
            <img src={Logo} alt="logo" className="w-2/5" />
            <h2 className="text-2xl mt-6 text-darkblue font-bold">Register</h2>
            <p className="text-sm text-gray-500 my-2">
              Register Your institution to get started!
            </p>
          </div>
          <Steps config={config}>
            <Step
              component={PersonalInfo}
              setFullnames={setFullnames}
              setPhoneNumber={setPhoneNumber}
              setEmail={setEmail}
              setProfilePic={setProfilePic}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              fullnames={fullnames}
              phoneNumber={phoneNumber}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              profilePic={profilePic}
            />
            <Step
              component={AddressInfo}
              fullnames={fullnames}
              phoneNumber={phoneNumber}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              profilePic={profilePic}
              setAddress={setAddress}
              setAge={setAge}
              setGender={setGender}
              address={address}
              age={age}
              gender={gender}
            />
          </Steps>
          <div className="flex space-x-2 text-sm justify-center pt-10">
            <p>Arleady a Member? </p>
            <Link to="/signin" className="text-ligherdarkblue ">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
  function onSubmit() {}
}

export default SignUp;
