import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { sendReport } from "../../store/actions";

function NurseReport() {
  const { isSendingReport, errors } = useSelector(({ Reports }) => Reports);
  const [report, setReport] = useState(null);
  const dispatch = useDispatch();
  const alert = useAlert();
  return (
    <div className=" min-h-carditem mx-10 mt-12 mb-6 col-span-2">
      <div className="bg-white rounded-2xl py-6 px-3">
        <p className="text-sm text-lightgreen text-end ">04:30AM</p>
        <h2 className="text-darkblue text-xl font-bold text-center">Report</h2>
        <p className="text-sm text-gray-500 text-center">03/03/2022</p>
      </div>

      <div className="space-y-2 my-1 bg-white rounded-2xl p-4">
        <h5 className="text-darkblue font-bold text-base">Patient’s Name</h5>
        <p className="text-sm text-gray-500 bg-paleblue py-3 rounded-xl px-2">
          Uwayezu Jean de Dieu
        </p>
        <div className="p-4 border-t-15 rounded-b-2xl border-lightgreen bg-paleblue">
          <p className="text-sm text-gray-500">
            Eu exercitation excepteur excepteur Lorem exercitation cillum minim
            commo do enim occaecat adipisicing. Cupidatat do adipisicing id ut
            consectetur doi enim ullamco excepteur occaecat ut magna. Qui cillum
            commodo esse sunt est qui enim cillum cillum consequat laboris. Amet
            in culpa in anim ea aliqua anim nulla. Ipsum sit adipisicing commodo
            consectetur. Ex pariatur eiusmod sint sint aliqua labore ipsum quis
            dolor ut aliqua nostrud. Esse tempor do offic ia fugiat minim nisi
            ad exercitation nulla Lorem qui esse dolore. Et veniam laboris ea
            cillum nisi consequat ea quis nisi est consectetur laborum.
          </p>
          <p className="text-sm text-gray-500">
            Eu exercitation excepteur excepteur Lorem exercitation cillum minim
            commo do enim occaecat adipisicing. Cupidatat do adipisicing id ut
            consectetur doi enim ullamco excepteur occaecat ut magna. Qui cillum
            commodo esse sunt est qui enim cillum cillum consequat laboris. Amet
            in culpa in anim ea aliqua anim nulla. Ipsum sit adipisicing commodo
            consectetur.{" "}
          </p>
        </div>
        <div className="flex space-x-3">
          <input
            id="reply"
            name="reply"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="appearance-none rounded-none relative block w-full px-3 placeholder-darkblue text-gray-900  focus:outline-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 sm:text-sm border-2 border-paleblue rounded-t-3xl rounded-b-3xl py-3"
            placeholder="Write a reply"
          />
          <button className="text-sm bg-lightgreen text-white hover:opacity-70 rounded-xl px-3">
            Send
          </button>
        </div>
      </div>
    </div>
  );
  function onSendReport(e) {
    e.preventDefault();
    const description = report;
    const patient_id = null;
    dispatch(sendReport({ description, patient_id }, alert));
  }
}

export default NurseReport;
