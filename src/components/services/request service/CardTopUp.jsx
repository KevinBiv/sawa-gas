import React from "react";
import { Form } from "react-bootstrap";
import { IoCloseCircle } from "react-icons/io5";
function CardTopUp({ handleCloseOrder }) {
  return (
    <div className="bg-paleindigo space-y-8 p-5 ">
      <div className="flex justify-between">
        <div className="space-x-2 flex items-center">
          <svg
            width="70"
            height="51"
            viewBox="0 0 70 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="70" height="51" rx="4" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_24_830"
                  transform="translate(-0.0229623) scale(0.00446976 0.00613497)"
                />
              </pattern>
              <image
                id="image0_24_830"
                width="234"
                height="163"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAACjCAYAAACEw4LqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASISURBVHgB7dvPblRVAMfxc25raQEjMUa39QlkrfHfE6ALdVt2ZYdPADyBuALd0K2yEB+BGPd9A+vSXaNAobVzvbfMmElpCaT/7i/z+SRn/ty5bZrJfHvO3DtTywGu32svPVnaWqnN3Ke1lMvdpuUCnIgLC3Xj0Xa7Xsvo17tfL60dtE/dv+HaT8++GNVyr3vgUgFO20Ypo1v7g22m71y7v/1dW8svIoUzs9xleW/1/s6N6Y3/z6h7D7SjmwUYhLbW2z98tfBtf3sv1NWft1b6igswKLUtX9755tyDcajP/igOGMHgdIFunnu88P7c89m0rhRgiBZ35//9q6lNc6UAgzUq5bOmHbWXCzBYtakfdKdn6nIBhmy5KcDgCRUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCCBUCNGWhAAM3X97pLne78agbT8e3gUGZ37uc68Zb47HdjSfd2OpGW4ABmH9hy8J49NH2sfbRbhfgDM0f+kjtxvnx6JfDfbSPi6UxnIH5V9qrXxpfHI/J0vhZES2cklcLddpkadzrg306HsCJef1Qp00vjfsZtl8a7xTgmB0t1Il+aTyJtg+1D9bSGI7N8YQ67Y1uXBrfniyLnxSOYu41tk9v250aRDv+UKctjseb5fkMO4RTPQe9uPsPUtZX3Ld30LNWD9m/lhc/qHnQtpf9HUfVh/pP8Q8z2MmGOjG9NO5fNDvl5e9l51/ye/Y77EV/WGSzqH8u+lVO/7z+XQh0OqFOmxuPxcJpuzi+Fmsc356ZNX2svogRR6iz6EIhjFBn0VLxHj6MUGfV2+VkjjBzIoQ6q/rz3e8WM2sIoc6yPtL3yvNTN/0BJjPsYJ3+6RmGZ3KOm8Eyo0IAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUIAoUKALtR2owCD1Zay3tS2rhdgwNo/m926+7AAg1Vr+6DZ3lla66bWzQIM0cbdj5bWmrXP62Y7KlcLMDx1dKu/2jvq++Mn5x6Utv2+AMPRjm71s2l/s05vX/1t62apzY0CnK1u4rz78eL1yd26//HV37dWSrsX63IBTlXbls1mrly982G3yp1SD/uBPti2NFe6kzjL3U6XC3BSNtpa1tt29+H57uDu7e640f4d/gPDI6tEmuqJowAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
          <h5 className="text-darkblue font-bold text-lg"> Top up a card</h5>
        </div>
        <button type="button" className="" onClick={() => handleCloseOrder()}>
          <IoCloseCircle className="text-ligherdarkblue text-4xl" />
        </button>
      </div>
      <form className="space-y-2">
        <div className=" bg-white  rounded-1 ">
          <label htmlFor="staff" className="sr-only">
            Select Staff
          </label>
          <select
            id="staff"
            className="text-xs px-3 py-3 border text-lightgray w-100 focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
          >
            <option className="text-xs text-lightgray" selected>
              Select Staff
            </option>
            <option className="text-xs text-lightgray" value="blue">
              Staff1
            </option>
            <option className="text-xs text-lightgray" value="black">
              Staff1
            </option>
            <option className="text-xs text-lightgray" value="white">
              Staff1
            </option>
          </select>
        </div>
        <div className="flex items-center bg-white pl-3 rounded-1">
          <label htmlFor="amount" className="sr-only">
            Enter amount
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            autoComplete="amount"
            className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="Enter amount"
          />
        </div>
        <button className="bg-ligherdarkblue py-2 w-100 text-white text-sm">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default CardTopUp;
