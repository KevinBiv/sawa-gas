import React from "react";

function ReportDocument() {
  return (
    <div className="p-10">
      <div>
        <h5 className="font-bold text-sm text-darkblue">Report</h5>
        <p className=" text-xs text-gray-700">21 Feb,2022</p>
      </div>
      <div>
        <textarea
          disabled
          rows=""
          cols=""
          className="text-sm text-darkblue form-control my-2 w-100 flex-1 rounded-xl border-gray-300  focus:shadow-none focus:ring-lightgreen focus:border-lightgreen focus:z-10 p-4"
          id="report"
          required
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et molestie et erat nulla euismod ut vitae. Nullam fermentum viverra morbi integer pretium velit pharet ra diam. Lacus viverra congue consequat."
        ></textarea>
      </div>
    </div>
  );
}

export default ReportDocument;
