import React from "react";
import engen from "../../assets/images/image 28.png";

function Profile() {
  return (
    <div className="md:pt-14 pb-6 mx-6 sm:mx-10">
      <h1 className="font-bold text-4xl">Profile</h1>
      <div className="mt-8 grid lg:grid-cols-3 gap-4">
        <div className="bg-white p-10 col-span-2">
          <form action="POST" className="flex flex-col gap-4">
            <div className="grid lg:grid-cols-3">
              <div className="cols-span-1">
                <p>Company Name</p>
                <p>Current company name</p>
              </div>
              <input className="col-span-2 w-full border-2 px-2" type="text" placeholder="Station kobil" />
            </div>
            <div className="grid lg:grid-cols-3">
              <div className="cols-span-1">
                <p>Company Name</p>
                <p>Current company name</p>
              </div>
              <input className="col-span-2 w-full border border-inputbordergray px-2" type="text" placeholder="Station kobil" />
            </div>
            <div className="grid lg:grid-cols-3">
              <div className="cols-span-1">
                <p>Company Name</p>
                <p>Current company name</p>
              </div>
              <input className="col-span-2 w-full border-2 border-inputbordergray px-2" type="text" placeholder="Station kobil" />
            </div>
            <div className="grid lg:grid-cols-3">
              <div className="cols-span-1">
                <p>Company Name</p>
                <p>Current company name</p>
              </div>
              <div className="col-span-2 grid lg:grid-cols-3 gap-4">
                <input type="text" placeholder="Station kobil" className="border-2 py-2 px-2" />
                <input type="text" placeholder="Station kobil" className="border-2 py-2 px-2" />
                <input type="text" placeholder="Station kobil" className="border-2 py-2 px-2" />
              </div>
            </div>
          </form>
          <button className="w-full mt-8 mb-8 py-3 bg-darkblue text-white">Save Changes</button>
        </div>

        <div className="bg-white col-span-1 py-4 px-10 flex flex-col gap-4">
          <div>
            <img src={engen} alt="" className="w-3/4" />
          </div>
          <div className="bg-darkblue py-4 px-4 text-white mb-4">
            <p>company ID</p>
            <h3>QRT#987</h3>
          </div>
          <button className="bg-ligherdarkblue text-white py-2 mt-4">Sign Out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
