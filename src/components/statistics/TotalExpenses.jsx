import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import RechargeForm from "../finances/RechargeForm";

function TotalExpenses() {
  const { totalExpensesStatistics } = useSelector(
    ({ Statistics }) => Statistics
  );
  const [openRechargeModal, setRechargeModalOpen] = useState(false);
  const handleClose = () => {
    setRechargeModalOpen(false);
  };
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 rounded-3">
        <div className="p-3 border-l-4 border-darkblue bg-white rounded-md">
          <div>
            <p className="text-lightergray font-semibold text-xs">My Balance</p>

            <p className="font-bold text-darkblue text-xl">
              200,000<span className="text-xs">Rwf</span>
            </p>
          </div>
        </div>

        <div className=" bg-white flex justify-between space-x-3 p-3 border-l-4 border-ligherdarkblue rounded-md">
          <div>
            <p className="text-lightergray font-semibold text-xs">Expenses</p>
            <p className="font-bold text-darkblue text-xl">
              180,000<span className="text-xs">Rwf</span>
            </p>
          </div>
          <button
            className="p-2 rounded-md bg-ligherdarkblue bg-opacity-80 hover:bg-opacity-100 flex items-center"
            onClick={() => setRechargeModalOpen(true)}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1065_317)">
                <path
                  d="M5.01122 6.56021H0.939796C0.420761 6.56021 0 6.98097 0 7.50001C0 8.01904 0.420761 8.4398 0.939797 8.4398H5.01122C5.53026 8.4398 5.95102 8.01904 5.95102 7.50001C5.95102 6.98097 5.53026 6.56021 5.01122 6.56021Z"
                  fill="white"
                />
                <path
                  d="M14.0603 6.56021H9.98887C9.46983 6.56021 9.04907 6.98097 9.04907 7.50001C9.04907 8.01904 9.46983 8.4398 9.98887 8.4398H14.0603C14.5793 8.4398 15.0001 8.01904 15.0001 7.50001C15.0001 6.98097 14.5793 6.56021 14.0603 6.56021Z"
                  fill="white"
                />
                <path
                  d="M8.43989 14.0602V0.939796C8.43989 0.420761 8.01913 0 7.5001 0C6.98106 0 6.5603 0.420762 6.5603 0.939797V14.0602C6.5603 14.5792 6.98106 15 7.5001 15C8.01913 15 8.43989 14.5792 8.43989 14.0602Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1065_317">
                  <rect width="15" height="15" rx="1" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="space-y-4 bg-white rounded-sm flex flex-col my-6 lg:my-3.5">
        {/* <div className="bg-ligherdarkblue p-2 flex justify-between rounded-md">
        <div className="flex items-center space-x-2">
          {" "}
          <svg
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87895 2.38388C6.11863 1.94524 4.89042 1.94524 4.13459 2.38388C3.37877 2.82253 3.38327 3.53562 4.14359 3.97426C4.90391 4.41291 6.13213 4.41291 6.88795 3.97426C7.64378 3.53337 7.63928 2.82253 6.87895 2.38388ZM6.53029 3.07447C6.46505 3.09472 6.39982 3.11721 6.33458 3.13746C6.29409 3.14871 6.26935 3.15095 6.25135 3.14196C6.24235 3.13521 6.23335 3.12621 6.22436 3.11271C6.18162 3.04298 6.11638 2.98224 6.02865 2.93276C6.01741 2.92601 6.00391 2.91926 5.99041 2.91251C5.96117 2.89676 5.93417 2.88552 5.89818 2.87652C5.77221 2.84728 5.65974 2.89451 5.67549 2.97325C5.68223 3.01374 5.70473 3.04973 5.73172 3.08797C5.77671 3.15095 5.8262 3.21394 5.85769 3.28142C5.96342 3.49288 5.73397 3.70208 5.36506 3.72232C5.23234 3.72907 5.10637 3.71332 4.98939 3.67508C4.93766 3.65934 4.89942 3.65934 4.86117 3.68633C4.82293 3.71107 4.78019 3.73357 4.7397 3.75606C4.70371 3.77631 4.66547 3.77856 4.62948 3.75831C4.60248 3.74482 4.57774 3.72907 4.55075 3.71557C4.53275 3.70433 4.51475 3.69533 4.49676 3.68408C4.45852 3.66159 4.46302 3.63909 4.49901 3.6166C4.52825 3.5986 4.55749 3.58285 4.58449 3.56486C4.64972 3.52662 4.64972 3.52437 4.59574 3.48163C4.52825 3.42764 4.46752 3.3714 4.42927 3.30842C4.40003 3.25893 4.40678 3.24768 4.48551 3.22069C4.544 3.20269 4.60023 3.18245 4.65872 3.16445C4.70146 3.15095 4.72621 3.14871 4.7442 3.1577C4.75545 3.16445 4.7622 3.17345 4.7712 3.1892C4.80944 3.26118 4.87467 3.32416 4.9534 3.3849C4.9669 3.39615 4.98265 3.40515 4.99614 3.41414C5.03888 3.43889 5.08837 3.45688 5.14461 3.47038C5.29082 3.50412 5.42129 3.44564 5.4078 3.35341C5.4033 3.32191 5.38755 3.29492 5.36731 3.26568C5.31782 3.19145 5.25258 3.12171 5.21884 3.04298C5.16485 2.91701 5.1896 2.80229 5.36281 2.71231C5.56076 2.61108 5.78121 2.60433 6.01516 2.66732C6.11188 2.69431 6.10963 2.69431 6.18387 2.65157C6.20861 2.63582 6.23335 2.62233 6.2581 2.60883C6.31434 2.57734 6.33458 2.57734 6.39082 2.60883C6.40881 2.61783 6.42456 2.62908 6.44256 2.63807C6.56178 2.70556 6.56178 2.70556 6.44481 2.77529C6.36158 2.82253 6.36158 2.82253 6.43131 2.87877C6.4853 2.92151 6.52804 2.9665 6.55953 3.01599C6.58427 3.04073 6.57528 3.06098 6.53029 3.07447ZM7.89347 4.55463C7.68427 4.6761 7.3446 4.6761 7.13315 4.55463C6.92394 4.43316 6.9217 4.2352 7.1309 4.11373C7.3401 3.99226 7.67977 3.99226 7.89122 4.11373C8.10267 4.2352 8.10492 4.43316 7.89347 4.55463ZM3.8894 2.24217C3.6802 2.36364 3.34053 2.36364 3.12908 2.24217C2.91763 2.12069 2.91763 1.92274 3.12683 1.80127C3.33603 1.6798 3.6757 1.6798 3.88715 1.80127C4.09635 1.92274 4.0986 2.12069 3.8894 2.24217ZM10.7391 3.6121L4.7442 0.150153C4.39778 -0.0500509 3.83541 -0.0500509 3.49124 0.150153L0.27674 2.01722C-0.0674301 2.21742 -0.0651806 2.5436 0.281239 2.7438L6.2761 6.20574C6.62251 6.40595 7.18488 6.40595 7.52905 6.20574L10.7413 4.33868C11.0877 4.13847 11.0855 3.8123 10.7391 3.6121ZM7.59429 5.54665C7.55605 5.51066 7.51106 5.47691 7.45707 5.44542C7.10615 5.24297 6.53703 5.24297 6.18836 5.44542C6.16137 5.46117 6.13888 5.47691 6.11413 5.49491L1.45996 2.80678C1.50495 2.78879 1.54769 2.76854 1.58818 2.74605C1.93685 2.5436 1.9346 2.21517 1.58369 2.01272C1.54544 1.99022 1.50495 1.96998 1.46221 1.95423L3.38102 0.838492C3.41026 0.863237 3.444 0.885731 3.48224 0.908226C3.83316 1.11068 4.40228 1.11068 4.75095 0.908226C4.79144 0.885731 4.82518 0.860987 4.85668 0.833994L9.52659 3.52887C9.4636 3.55136 9.40737 3.57611 9.35338 3.6076C9.00471 3.81005 9.00471 4.14072 9.35788 4.34318C9.41187 4.37467 9.4726 4.39941 9.53559 4.42191L7.59429 5.54665ZM0.123775 3.43664C0.27674 3.35791 0.512935 3.36915 0.659151 3.45463L6.92619 7.07179L10.3139 5.10125C10.4601 5.01577 10.7008 5.01577 10.8493 5.10125C10.9977 5.18673 10.9977 5.3262 10.8515 5.41168L7.25012 7.50369C7.07466 7.60717 6.78673 7.60717 6.60902 7.50369L6.48305 7.43171L6.39532 7.37997L0.112528 3.75381C-0.0404364 3.66609 -0.0381869 3.51987 0.123775 3.43664ZM10.856 6.54317L7.25462 8.63518C7.07916 8.73866 6.79123 8.73866 6.61352 8.63518L6.4898 8.5632L6.39982 8.51146L0.117027 4.8853C-0.0359374 4.79757 -0.0314384 4.65136 0.130524 4.56813C0.281239 4.48939 0.519683 4.50064 0.665899 4.58612L6.93069 8.20328L10.3184 6.23499C10.4669 6.14951 10.7053 6.14951 10.8538 6.23499C11.0022 6.31822 11.0045 6.45769 10.856 6.54317Z"
              fill="white"
            />
          </svg>
          <p className="text-xs font-bold text-white">Total Expenses</p>
        </div>
        <p className="text-lg text-white font-bold">
          <span className="text-xs font-light align-text-top">Rwf</span>350,000
        </p>
      </div> */}
        <div className="p-3 relative w-80 h-80 align-self-center">
          <Doughnut
            data={{
              labels: totalExpensesStatistics?.labels,

              datasets: [
                {
                  label: "Expenses",
                  //data: [12, 19, 3, 5, 2, 3,6],
                  data: totalExpensesStatistics?.income_numbers,
                  display: false,
                  backgroundColor: [
                    "rgba(254, 185, 19, 1)",
                    "rgba(122, 204, 241, 1)",
                    "rgba(0, 63, 107, 1)",
                    "rgba(220, 65, 73, 1)",
                    "rgba(52, 190, 185, 1)",
                    "rgba(246, 130, 31, 1)",
                  ],
                  tension: 0.3,
                  //pointRadius:0,
                  // fill: true,
                  borderColor: "rgba(255, 255, 255, 1)",
                  color: "rgba(64, 137, 237, 1)",
                },
              ],
            }}
            height={300}
            width={400}
            style={{ position: "relative" }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              cutout: 80,
              rotation: Math.PI * 5,
              animation: {
                animateScale: true,
              },

              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      var label = context.label;
                      var currentValue = context.raw;

                      return currentValue + " %";
                    },
                  },
                },
                legend: {
                  position: "bottom",
                  labels: {
                    color: "#8E9AAD",
                  },
                },
                //   datalabels: {
                //     labels: {
                //       title: {
                //         color: "blue",
                //       },
                //     },
                //   },
              },
            }}
          />
          <div className="absolute top-1/3 left-24 flex flex-col ">
            <svg
              className="align-self-center"
              width="49"
              height="46"
              viewBox="0 0 49 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.2154 25.5573C46.648 25.0012 46.8581 24.2844 46.6665 23.5532L40.9878 2.02897C40.6583 0.784868 39.3791 0.0393039 38.1371 0.36883L1.85083 9.93627C0.61293 10.2638 -0.134735 11.547 0.190685 12.789L5.86941 34.3112C6.19483 35.5532 7.48009 36.2989 8.72218 35.9734L21.544 32.5914V39.7984C21.544 43.8293 28.2237 45.9385 34.8272 45.9385C41.4267 45.9385 48.1146 43.8293 48.1146 39.7985V28.8694C48.1145 27.5573 47.3957 26.4533 46.2154 25.5573ZM42.1062 18.1381L42.6994 20.3791L35.4862 22.2844L34.8971 20.0393L42.1062 18.1381ZM37.9208 3.95896L39.0475 8.22676L27.7787 11.201L26.652 6.9332L37.9208 3.95896ZM32.8642 20.5748L33.441 22.7663C30.7736 22.8858 28.1784 23.3513 26.0939 24.1463L25.6531 22.482L32.8642 20.5748ZM7.75194 29.5964L7.16288 27.3595L14.374 25.4522L14.9671 27.7014L7.75194 29.5964ZM16.407 24.9188L23.614 23.0135L24.1598 25.0671C23.9847 25.1742 23.82 25.2854 23.6593 25.3987L16.9961 27.1577L16.407 24.9188ZM45.7088 39.6211C45.7088 41.9713 40.8396 43.8745 34.8272 43.8745C28.8211 43.8745 23.9477 41.9693 23.9477 39.6211V36.9744C23.9477 36.8858 23.9992 36.8055 24.0136 36.7211C24.3575 38.9498 29.0414 40.717 34.8272 40.717C40.6151 40.717 45.301 38.9497 45.6429 36.7211C45.6573 36.8055 45.7088 36.8859 45.7088 36.9744V39.6211ZM45.7088 34.4141C45.7088 36.7623 40.8396 38.6654 34.8272 38.6654C28.8211 38.6654 23.9477 36.7623 23.9477 34.4141V31.7674C23.9477 31.6809 23.9992 31.5985 24.0136 31.5141C24.3575 33.7407 29.0414 35.512 34.8272 35.512C40.6151 35.512 45.301 33.7407 45.6429 31.5141C45.6573 31.5985 45.7088 31.6809 45.7088 31.7674V34.4141ZM34.8272 33.1186C28.821 33.1186 23.9476 31.2154 23.9476 28.8693C23.9476 26.5233 28.8209 24.6201 34.8272 24.6201C40.8395 24.6201 45.7087 26.5233 45.7087 28.8693C45.7088 31.2154 40.8395 33.1186 34.8272 33.1186Z"
                fill="#2E8BC0"
              />
            </svg>
            <p className=" text-darkblue font-bold text-sm">
              Expenses Statistics
            </p>
          </div>
        </div>
        <div className="space-y-2 p-3">
          <div className="flex justify-between bg-paleblue p-2 rounded-sm">
            <div className="flex items-center space-x-3">
              <svg
                className="h-4 w-7"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_43_67)">
                  <path
                    d="M17.9045 23.0864C17.9045 23.6276 18.3429 24.0659 18.8841 24.0659H20.596C21.1372 24.0659 21.5756 23.6276 21.5756 23.0864V21.8643H17.9045V23.0864Z"
                    fill="#003F6B"
                  />
                  <path
                    d="M2.42456 23.0864C2.42456 23.6276 2.86293 24.0659 3.40415 24.0659H5.11599C5.65721 24.0659 6.09558 23.6276 6.09558 23.0864V21.8643H2.42456V23.0864Z"
                    fill="#003F6B"
                  />
                  <path
                    d="M1.56735 10.31V4.38104C1.33714 4.2341 1.06531 4.11899 0.742041 4.04797C0.36 3.96471 0 4.25614 0 4.64552V8.36552C0 9.32063 0.671021 10.1165 1.56735 10.31Z"
                    fill="#003F6B"
                  />
                  <path
                    d="M23.2579 4.04797C22.9371 4.11899 22.6628 4.2341 22.4326 4.38104V10.31C23.3289 10.1165 24 9.32063 24 8.36797V4.64552C24 4.25614 23.64 3.96471 23.2579 4.04797Z"
                    fill="#003F6B"
                  />
                  <path
                    d="M21.5756 20.3949V10.3541V5.3239V1.80717C21.5756 1.26594 21.1372 0.827576 20.596 0.827576H3.40415C2.86293 0.827576 2.42456 1.26594 2.42456 1.80717V5.3239V10.3541V20.3949V21.0072H6.09558H17.9046H21.5756V20.3949ZM4.45232 18.7786V16.6725C7.38864 16.6725 8.11109 18.7786 8.11109 18.7786H4.45232ZM11.9339 12.8202C11.7038 12.5876 11.3903 12.4578 11.0621 12.4578H4.44987L4.47436 2.88225H19.5209V14.1671V15.1932H14.2801L11.9339 12.8202ZM15.867 18.7786C15.867 18.7786 16.5895 16.6725 19.5258 16.6725V18.7786H15.867Z"
                    fill="#003F6B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_43_67">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm text-ligherdarkblue font-bold">Bus</p>
            </div>
            <p className="text-base text-ligherdarkblue font-bold">
              <span className="text-xs font-light align-text-top">Rwf</span>
              70,000
            </p>
          </div>
          <div className="flex justify-between bg-paleblue p-2 rounded-sm">
            <div className="flex items-center space-x-3">
              <svg
                className="h-4 w-7"
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3537 10.0307C26.3839 9.37233 25.2608 9.01673 24.0941 8.9915L23.7836 6.50031C24.2363 7.09412 24.9586 7.46574 25.76 7.43178L25.5602 2.71769C24.62 2.75747 23.836 3.34691 23.4921 4.16L23.1787 1.63825C23.1452 1.36561 22.9812 1.12546 22.7396 0.995445C22.498 0.864458 22.2065 0.859606 21.9615 0.981376C21.9474 0.989623 20.3964 1.728 19.1341 1.46021C18.6791 1.36609 18.2245 1.65669 18.1289 2.11563C18.0324 2.57457 18.324 3.02478 18.7858 3.12181C19.8056 3.33672 20.8651 3.1417 21.6277 2.91417L21.8741 4.90421C20.4876 4.46855 18.3007 3.9315 16.1637 3.9315C15.5442 3.9315 14.9601 3.97711 14.4153 4.06686C14.341 4.35163 14.2067 4.6888 14.0053 5.02015C13.5503 5.77018 12.7454 6.48867 11.4603 6.48867C11.0315 6.48867 10.5696 6.40717 10.0792 6.24707C9.90792 6.19128 9.7323 6.12287 9.55377 6.04768C9.27191 5.92882 8.9818 5.78667 8.68345 5.61979C8.64852 5.60038 8.61407 5.58291 8.57914 5.56302C7.78498 5.10699 7.26929 4.76255 6.96366 4.4671C4.61757 3.95527 2.69936 3.14558 2.67171 3.13442C2.32387 2.98597 1.9183 3.08591 1.67961 3.38087C1.44093 3.67535 1.42589 4.09305 1.6442 4.40306C1.71842 4.50979 3.50128 7.00874 6.17095 7.80679C6.34512 7.85821 6.53383 7.88538 6.73079 7.88538C7.36777 7.88538 8.01445 7.61953 8.64512 7.33427L7.82719 9.29131C7.25377 9.11327 6.65414 9.02158 6.04433 9.02158C4.03735 9.02158 2.16717 10.0117 1.04118 11.6704C-0.829967 14.427 -0.110034 18.1922 2.64648 20.0628C3.65216 20.7454 4.82375 21.1064 6.03512 21.1064C8.0421 21.1064 9.91228 20.1162 11.0378 18.458C11.553 17.6997 11.8649 16.8624 11.9988 16.0115C12.4883 15.9309 12.9574 15.8222 13.3907 15.6782C16.0603 14.7884 18.0455 11.9256 19.8347 9.92733C19.8851 9.87154 19.9196 9.81526 19.9458 9.7585C20.7385 9.5824 21.5729 9.19817 22.319 8.45833L22.4102 9.19283C21.0218 9.56299 19.791 10.4159 18.9639 11.634C17.0937 14.3921 17.8126 18.1538 20.5701 20.0255C21.5743 20.7086 22.7454 21.069 23.9573 21.069C25.9653 21.069 27.8345 20.0789 28.96 18.4202C30.8292 15.6675 30.1097 11.9009 27.3537 10.0307ZM9.63236 17.5057C8.82268 18.6977 7.4779 19.4094 6.03415 19.4094C5.16431 19.4094 4.32212 19.1508 3.59879 18.6589C1.61752 17.3145 1.0994 14.606 2.44466 12.6247C3.25435 11.4327 4.59962 10.72 6.04288 10.72C6.42516 10.72 6.79968 10.7787 7.16305 10.8767L6.17192 13.2481C5.04739 13.087 3.96943 13.0409 3.01615 13.3204C2.5805 13.4485 2.42089 13.8603 2.47862 14.214C2.40682 14.5216 2.53927 14.7967 2.92543 14.9437C4.99209 15.7291 7.74908 16.2463 10.2315 16.1764C10.1112 16.6387 9.91568 17.0885 9.63236 17.5057ZM7.64284 13.5043L8.48939 11.4793C9.39222 12.0959 9.98554 12.9983 10.2388 13.9816C9.38592 13.8603 8.51074 13.6755 7.64284 13.5043ZM14.2081 13.5979C13.5372 13.9506 12.7872 14.084 11.9945 14.101C11.7378 12.516 10.8617 11.0368 9.43249 10.0661C9.34128 10.0035 9.24717 9.94819 9.15354 9.89143L9.52515 9.00266L9.55814 8.92358L10.1359 7.54142L11.1241 8.58398C11.2828 8.75184 11.5021 8.84693 11.7325 8.84887L14.898 8.87895C15.3729 9.12831 16.5823 9.69301 18.0028 9.84922C16.8497 11.1829 15.6587 12.6048 14.2081 13.5979ZM27.5536 17.4693C26.7444 18.6613 25.4001 19.3739 23.9549 19.3739C23.085 19.3739 22.2448 19.1144 21.519 18.6234C19.5378 17.2782 19.0211 14.5706 20.3659 12.5893C20.9155 11.7801 21.7126 11.2003 22.6198 10.9054L23.1297 15.0014C23.1825 15.4322 23.5483 15.7461 23.9709 15.7461C24.0053 15.7461 24.0417 15.7432 24.0762 15.7383C24.5414 15.6806 24.8732 15.2561 24.814 14.7908L24.308 10.7089C25.0547 10.7681 25.7736 11.0082 26.3999 11.4342C28.3817 12.7809 28.8984 15.487 27.5536 17.4693ZM7.5822 3.60937C8.37587 3.60937 9.85407 3.98341 9.85407 3.98341L13.429 3.58123L13.9791 3.79663C13.9791 3.79663 13.9476 3.95576 13.8642 4.1862C13.7565 4.48311 13.5585 4.89936 13.2204 5.26078C12.8381 5.66927 12.2778 6.00499 11.4603 6.00499C11.0538 6.00499 10.5822 5.91863 10.0404 5.72166C9.66778 5.58583 9.26366 5.39856 8.82025 5.14386C8.51365 4.96776 8.25993 4.81251 8.04307 4.67231C6.76184 3.84321 6.95735 3.60937 7.5822 3.60937ZM14.2314 9.56687C14.4589 9.73279 15.2434 10.2587 16.299 10.4663C16.3854 10.4833 16.4742 10.4988 16.5692 10.5119C16.5882 10.5148 16.6032 10.5177 16.6163 10.5207C16.4848 10.9335 14.8422 12.2191 13.3063 13.219C13.0622 13.3063 12.6683 13.4286 12.4117 13.4708C12.2875 12.9071 11.8543 11.3561 10.6152 9.84486C10.5624 9.78033 10.5556 9.72115 10.5463 9.60374C10.5425 9.55426 10.5381 9.49992 10.5274 9.44171L14.2314 9.56687ZM4.04511 7.2319L1.69077 7.16204L1.74365 5.37333L4.04511 7.2319Z"
                  fill="#003F6B"
                />
              </svg>
              <p className="text-sm text-ligherdarkblue font-bold">Bike</p>
            </div>
            <p className="text-base text-ligherdarkblue font-bold">
              <span className="text-xs font-light align-text-top">Rwf</span>
              120,000
            </p>
          </div>
          <div className="flex justify-between bg-paleblue p-2 rounded-sm">
            <div className="flex items-center space-x-3">
              <svg
                className="h-4 w-7"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9764 7.80898C22.8681 7.80898 22.757 7.82442 22.6461 7.85509L21.4805 8.17612L20.2484 5.17507C19.8793 4.27564 18.7878 3.5438 17.8154 3.5438H16.9956V1.05582C16.9956 0.61847 16.6399 0.262756 16.2025 0.262756H7.79758C7.36023 0.262756 7.00452 0.61847 7.00452 1.05582V3.5438H6.16779C5.19549 3.5438 4.10393 4.27553 3.73478 5.17497L2.50438 8.17189L1.35402 7.85498C1.24309 7.82442 1.13186 7.80888 1.02368 7.80888C0.430579 7.80898 0 8.26219 0 8.88649V9.52432C0 10.2532 0.592997 10.8461 1.32177 10.8461H1.40657L1.23062 11.2745C0.887593 12.1102 0.608436 13.525 0.608436 14.4283V20.4155C0.608436 21.1443 1.20133 21.7372 1.9302 21.7372H3.51918C4.24805 21.7372 4.84094 21.1443 4.84094 20.4155V18.944H19.1423V20.4155C19.1423 21.1443 19.7353 21.7372 20.4641 21.7372H22.0528C22.7816 21.7372 23.3745 21.1443 23.3745 20.4155V14.4283C23.3745 13.525 23.0954 12.1102 22.7524 11.2745L22.5764 10.8461H22.6782C23.4071 10.8461 24 10.2532 24 9.52432V8.88649C24 8.26219 23.5695 7.80898 22.9764 7.80898ZM15.1857 1.32038C15.1857 1.30293 15.2 1.28866 15.2174 1.28866H15.8284C15.8459 1.28866 15.8601 1.30293 15.8601 1.32038V3.51948C15.8601 3.53006 15.8541 3.53799 15.8462 3.5438H15.1997C15.1917 3.53799 15.1857 3.53006 15.1857 3.51948V1.32038ZM10.8038 1.28866H11.538C11.5554 1.28866 11.575 1.30188 11.5814 1.31816L12.4528 3.5087L13.2516 2.52054C13.2626 2.50701 13.2637 2.48396 13.254 2.46947L12.4874 1.31509C12.4777 1.3005 12.4841 1.28866 12.5016 1.28866H13.1805C13.198 1.28866 13.2198 1.30082 13.2289 1.31562L13.624 1.95663C13.6331 1.97154 13.6481 1.97154 13.6572 1.95663L14.0527 1.31562C14.0618 1.30071 14.0836 1.28866 14.101 1.28866H14.7803C14.7978 1.28866 14.8041 1.3005 14.7945 1.31509L14.0272 2.46947C14.0175 2.48406 14.0187 2.50701 14.0295 2.52054L14.8429 3.52657C14.8484 3.53323 14.8497 3.53947 14.8477 3.54391H14.1267C14.1172 3.53894 14.1086 3.53228 14.1037 3.52435L13.6573 2.81006C13.648 2.79526 13.633 2.79526 13.6237 2.81006L13.1783 3.52435C13.1734 3.53228 13.1648 3.53894 13.1553 3.54391H11.7968C11.7875 3.53841 11.7795 3.5308 11.7764 3.52117L11.6267 3.06268C11.6213 3.04608 11.6026 3.03254 11.5851 3.03254H10.7529C10.7355 3.03254 10.7165 3.04597 10.7107 3.06247L10.5494 3.52139C10.546 3.5309 10.538 3.53852 10.5286 3.54391H9.87518C9.87 3.53852 9.86778 3.53111 9.87148 3.52191L10.7601 1.31827C10.7668 1.30188 10.7864 1.28866 10.8038 1.28866ZM8.65514 3.51948V1.77264C8.65514 1.75519 8.64086 1.74091 8.62342 1.74091H7.88904C7.8716 1.74091 7.85732 1.72664 7.85732 1.70919V1.32027C7.85732 1.30283 7.8716 1.28855 7.88904 1.28855H10.1001C10.1175 1.28855 10.1318 1.30283 10.1318 1.32027V1.70919C10.1318 1.72664 10.1175 1.74091 10.1001 1.74091H9.36149C9.34404 1.74091 9.32977 1.75519 9.32977 1.77264V3.51948C9.32977 3.53006 9.32374 3.53799 9.31581 3.5438H8.6691C8.66117 3.53809 8.65514 3.53006 8.65514 3.51948ZM3.43828 10.1094L5.31043 5.54887C5.53133 5.01086 6.18788 4.57066 6.76945 4.57066H17.2137C17.7953 4.57066 18.4519 5.01086 18.6728 5.54887L20.5449 10.1094C20.7658 10.6474 20.4707 11.0876 19.8891 11.0876H4.09409C3.51251 11.0876 3.21739 10.6474 3.43828 10.1094ZM7.66751 15.9825C7.66751 16.2733 7.4296 16.5112 7.13881 16.5112H3.56539C3.2746 16.5112 3.03668 16.2733 3.03668 15.9825V14.2872C3.03668 13.9964 3.2746 13.7585 3.56539 13.7585H7.13881C7.4296 13.7585 7.66751 13.9964 7.66751 14.2872V15.9825ZM20.9122 15.9825C20.9122 16.2733 20.6743 16.5112 20.3835 16.5112H16.8101C16.5193 16.5112 16.2814 16.2733 16.2814 15.9825V14.2872C16.2814 13.9964 16.5193 13.7585 16.8101 13.7585H20.3835C20.6743 13.7585 20.9122 13.9964 20.9122 14.2872V15.9825Z"
                  fill="#003F6B"
                />
              </svg>
              <p className="text-sm text-ligherdarkblue font-bold">Taxi</p>
            </div>
            <p className="text-base text-ligherdarkblue font-bold">
              <span className="text-xs font-light align-text-top">Rwf</span>
              70,000
            </p>
          </div>
          <div className="flex justify-between bg-paleblue p-2 rounded-sm">
            <div className="flex items-center space-x-3">
              <svg
                className="h-4 w-7"
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9226 15.1828C21.7626 18.973 27.5351 23.1604 28.0251 25.5411C28.3601 27.1638 27.1926 28.5103 25.7276 28.2536C24.0776 27.9654 24.0001 25.6646 24.6501 23.8967C26.2851 19.4453 26.8476 16.8756 26.2826 14.4635L26.0126 13.33"
                  stroke="#003F6B"
                  stroke-miterlimit="10"
                />
                <path
                  d="M20.2051 13.5867C19.7376 13.5867 19.9201 13.1968 19.9201 12.7149V6.27751C19.9201 5.79556 19.7376 5.40564 20.2051 5.40564C20.6726 5.40564 21.4851 5.67447 21.4851 6.27751V12.7149C21.4851 13.1968 20.6726 13.5867 20.2051 13.5867Z"
                  fill="#003F6B"
                />
                <path
                  d="M20.525 27.5924V6.77156C20.525 3.56742 17.8425 0.96875 14.535 0.96875H8.74001C5.43001 0.96875 2.75001 3.56742 2.75001 6.77156V27.5924C1.92501 27.8273 1.32251 28.566 1.32251 29.4403V29.513C1.32251 29.7987 1.56251 30.0312 1.85751 30.0312H21.4175C21.7125 30.0312 21.9525 29.7987 21.9525 29.513V29.4403C21.9526 29.0242 21.8136 28.6193 21.5563 28.2862C21.2989 27.9531 20.9371 27.7097 20.525 27.5924Z"
                  fill="#003F6B"
                />
                <path
                  d="M16.4199 13.7005H6.73243C6.28993 13.7005 5.92993 13.3518 5.92993 12.9231V5.42983C5.92993 5.00116 6.28993 4.6524 6.73243 4.6524H16.4199C16.8624 4.6524 17.2224 5.00116 17.2224 5.42983V12.9207C17.2228 13.023 17.2022 13.1243 17.1621 13.2189C17.1219 13.3135 17.0628 13.3995 16.9883 13.472C16.9137 13.5444 16.8251 13.6019 16.7276 13.6411C16.6301 13.6803 16.5255 13.7005 16.4199 13.7005Z"
                  fill="#F7F9FF"
                />
                <path
                  d="M8.05493 7.16876H15.3824V9.01908H8.05493V7.16876Z"
                  fill="#F7F9FF"
                />
                <path
                  d="M8.05493 10.0168H15.3824V11.8672H8.05493V10.0168Z"
                  fill="#F7F9FF"
                />
                <path
                  d="M6.03258 11.3828C6.02008 11.5087 5.83008 11.5087 5.81758 11.3852C5.63258 9.62453 5.52758 7.86141 5.44758 6.1007C5.33008 5.12711 6.10508 4.28672 7.14258 4.35453C10.0901 4.26976 13.0526 4.26976 16.0001 4.35211C17.0351 4.2843 17.8176 5.12469 17.6976 6.09828C17.6176 7.86141 17.5101 9.62695 17.3251 11.3901C17.3126 11.516 17.1226 11.516 17.1101 11.3901C16.9176 9.5664 16.8126 7.74031 16.7276 5.91906C16.7242 5.88205 16.7166 5.8455 16.7051 5.81008C16.6426 5.59211 16.4251 5.41047 16.2001 5.43226C16.0801 5.43711 7.05508 5.43469 6.94008 5.42984C6.71508 5.40805 6.49758 5.58969 6.43508 5.81008C6.42508 5.8464 6.41758 5.88273 6.41258 5.91906C6.32758 7.73789 6.22508 9.56156 6.03258 11.3828Z"
                  fill="#F7F9FF"
                />
                <path
                  d="M11.5774 24.6959C13.8956 24.6959 15.7749 22.756 15.7749 20.3631C15.7749 17.9702 13.8956 16.0304 11.5774 16.0304C9.25917 16.0304 7.37988 17.9702 7.37988 20.3631C7.37988 22.756 9.25917 24.6959 11.5774 24.6959Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M9.71753 20.9734C9.71753 19.9151 11.575 17.8371 11.575 17.8371C11.575 17.8371 13.4325 19.9151 13.4325 20.9734C13.4325 22.0318 12.6 22.8915 11.575 22.8915C10.55 22.8915 9.71753 22.0318 9.71753 20.9734Z"
                  fill="#003F6B"
                />
                <path
                  d="M2.75 26.6479H20.525V27.59H2.75V26.6479Z"
                  fill="#F7F9FF"
                />
                <path
                  d="M4.36255 5.33782C4.58255 4.13657 5.66255 2.64954 7.89505 2.64954"
                  stroke="#F7F9FF"
                  stroke-width="0.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M27.0147 14.2842L25.5657 14.6407L25.3269 13.7301L26.7759 13.3736L27.0147 14.2842Z"
                  fill="#003F6B"
                />
                <path
                  d="M26.1924 7.22929L27.8749 4.2746C27.9999 4.05664 28.1649 3.86289 28.3624 3.70546C28.9774 3.21625 30.3549 2.11187 30.6449 1.80671C31.0224 1.40953 30.3224 0.571557 29.8249 0.903354C29.4349 1.16492 27.9999 2.38554 27.4024 2.89656C27.2274 3.04429 27.0824 3.22109 26.9699 3.41968L25.2024 6.52453L26.1924 7.22929Z"
                  fill="#003F6B"
                />
                <path
                  d="M25.165 9.13774L27.52 8.66547L28.35 11.5281C28.4825 12.0319 28.2425 12.1772 27.7825 12.291L26.1175 12.7391L25.165 9.13774ZM24.8125 9.04086L26.825 13.485L28.73 12.9691C29.5275 12.7439 29.505 12.1142 29.3825 11.6468L28.4 8.1593L24.8125 9.04086Z"
                  fill="#003F6B"
                />
                <path
                  d="M25.9549 5.11501L27.1724 5.77861C27.3349 5.86579 27.3949 6.06196 27.3124 6.22181L27.0699 6.69165L27.6324 7.10337C28.0247 7.38933 28.3036 7.79718 28.4224 8.25861L28.4899 8.5129L26.7499 8.94642C26.5748 8.99147 26.4252 9.10185 26.3339 9.25343C26.2425 9.405 26.2169 9.58545 26.2624 9.75532L27.0649 12.8142C27.1449 13.1435 27.1649 13.4148 26.8224 13.4874L25.4349 13.8217C25.1049 13.8919 24.7774 13.6957 24.6949 13.3785L23.7249 9.6754C23.2899 8.01642 23.9599 7.45454 24.0999 7.18087C24.2399 6.9072 24.9749 6.16126 24.9749 6.16126L25.4774 5.25064C25.5699 5.08353 25.7849 5.02298 25.9549 5.11501Z"
                  fill="#003F6B"
                />
                <path
                  d="M26.6999 7.10575L25.4924 6.51965"
                  stroke="#F7F9FF"
                  stroke-width="0.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>

              <p className="text-sm text-ligherdarkblue font-bold">Fuel</p>
            </div>
            <p className="text-base text-ligherdarkblue font-bold">
              <span className="text-xs font-light align-text-top">Rwf</span>
              60,000
            </p>
          </div>
          <div className="flex justify-between bg-paleblue p-2 rounded-sm">
            <div className="flex items-center space-x-3">
              <svg
                className="w-7"
                width="37"
                height="15"
                viewBox="0 0 37 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.5412 8.40149C32.0831 8.40149 33.3333 9.78643 33.3333 11.4953C33.3333 11.6271 33.3235 11.7568 33.3086 11.8839C33.1355 13.4089 31.9642 14.5884 30.5416 14.5884C29.0805 14.5884 27.8827 13.3439 27.7612 11.7588C27.7548 11.6722 27.7496 11.584 27.7496 11.4949C27.7492 9.78643 28.999 8.40149 30.5412 8.40149ZM31.9387 10.3296L31.3697 10.9605C31.4138 11.0446 31.4486 11.1353 31.471 11.2323H32.2733C32.2322 10.8959 32.116 10.5885 31.9387 10.3296ZM32.2771 11.7679H31.4684C31.4456 11.8632 31.412 11.9535 31.3671 12.0364L31.9376 12.6682C32.1145 12.4113 32.2333 12.1039 32.2771 11.7679ZM30.7828 13.4172C31.0852 13.3704 31.36 13.2391 31.5925 13.0448L31.025 12.4155C30.9502 12.4639 30.8684 12.4996 30.7828 12.5244V13.4172ZM30.7828 10.4663C30.8706 10.492 30.9529 10.5301 31.0295 10.5802L31.5981 9.95008C31.3645 9.75329 31.0871 9.62321 30.7828 9.57639V10.4663ZM30.2993 9.57557C29.995 9.62238 29.7172 9.75329 29.4839 9.94966L30.0522 10.5798C30.1285 10.5297 30.2115 10.4915 30.299 10.4659L30.2993 9.57557ZM30.2993 13.4164V12.5248C30.2134 12.4996 30.1322 12.4644 30.0575 12.4155L29.4896 13.0448C29.7221 13.2391 29.9973 13.3696 30.2993 13.4164ZM29.1434 12.6711L29.7157 12.036C29.6709 11.9527 29.6346 11.8636 29.6118 11.7684H28.8095C28.8521 12.1031 28.9661 12.413 29.1434 12.6711ZM29.6107 11.2323C29.6335 11.1353 29.6679 11.0446 29.712 10.9605L29.1422 10.3296C28.9661 10.5885 28.8499 10.8959 28.808 11.2327H29.6107V11.2323Z"
                  fill="#003F6B"
                />
                <path
                  d="M7.35838 8.40149C8.90019 8.40149 10.1504 9.78643 10.1504 11.4953C10.1504 11.6271 10.1407 11.7568 10.1257 11.8839C9.95262 13.4089 8.7813 14.5884 7.35913 14.5884C5.89807 14.5884 4.7002 13.3439 4.57832 11.7588C4.57197 11.6722 4.56674 11.584 4.56674 11.4949C4.56599 9.78643 5.81619 8.40149 7.35838 8.40149ZM8.75588 10.3296L8.18723 10.9605C8.23135 11.0446 8.26612 11.1353 8.28855 11.2323H9.09086C9.04936 10.8959 8.93309 10.5885 8.75588 10.3296ZM9.09385 11.7679H8.28518C8.26238 11.8632 8.22873 11.9535 8.18387 12.0364L8.75401 12.6682C8.93159 12.4113 9.05086 12.1039 9.09385 11.7679ZM7.59989 13.4172C7.90235 13.3704 8.17714 13.2391 8.40968 13.0448L7.84216 12.4155C7.76738 12.4639 7.68551 12.4996 7.59989 12.5244V13.4172ZM7.59989 10.4663C7.68775 10.492 7.77 10.5301 7.84664 10.5802L8.41529 9.95008C8.18162 9.75329 7.90459 9.62321 7.59989 9.57639V10.4663ZM7.11611 9.57557C6.81179 9.62238 6.53401 9.75329 6.30072 9.94966L6.86936 10.5798C6.94563 10.5297 7.02863 10.4907 7.11611 10.4659V9.57557ZM7.11611 13.4164V12.5248C7.03012 12.4996 6.94899 12.4644 6.87422 12.4155L6.30632 13.0448C6.53887 13.2391 6.8144 13.3696 7.11611 13.4164ZM5.9605 12.6711L6.53289 12.0368C6.48802 11.9531 6.45138 11.8645 6.42895 11.7688H5.62664C5.66926 12.1031 5.78291 12.413 5.9605 12.6711ZM6.42783 11.2323C6.45063 11.1353 6.48466 11.0446 6.52915 10.9605L5.95975 10.3296C5.78329 10.5885 5.66739 10.8959 5.62514 11.2327H6.42783V11.2323Z"
                  fill="#003F6B"
                />
                <path
                  d="M0.654217 6.79986V4.51053C0.654217 4.14224 0.895733 3.83028 1.22399 3.77353C2.01172 3.63681 3.4081 3.37872 4.03545 3.16453C4.93496 2.85714 8.4104 1.22652 9.61387 0.92037C10.8177 0.614215 16.2455 -1.02054 21.444 0.976298C22.3238 1.31394 26.2811 3.4102 28.608 4.50018C29.2933 4.51675 36.0763 6.08356 36.4375 7.15738C36.7986 8.23161 36.9119 8.75278 36.9785 9.02538C37.045 9.29797 36.9785 10.6025 36.4745 11.5111C35.9608 11.833 34.9719 12.0492 33.8287 12.1942C33.8418 12.1167 33.856 12.0405 33.8649 11.9622C33.8847 11.7948 33.8941 11.642 33.8941 11.4962C33.8941 9.44753 32.3904 7.78046 30.5413 7.78046C28.6922 7.78046 27.1885 9.44711 27.1885 11.4962C27.1885 11.6014 27.1948 11.7058 27.2019 11.8085C27.2195 12.0384 27.2569 12.2617 27.3111 12.4768C27.3085 12.4768 27.3021 12.4768 27.3021 12.4768L10.6592 12.1056C10.6667 12.0579 10.6764 12.0107 10.682 11.9622C10.7018 11.7957 10.7112 11.6424 10.7112 11.4962C10.7112 9.44753 9.20748 7.78087 7.35835 7.78087C5.50922 7.78087 4.00516 9.44711 4.00516 11.4962C4.00516 11.504 4.00591 11.5107 4.00628 11.5181L3.93525 11.5115L1.08977 10.9178C1.08977 10.9178 -4.57764e-05 10.2748 -4.57764e-05 8.50587C-0.000419617 7.32599 0.654217 6.79986 0.654217 6.79986ZM17.1637 4.62943L23.3792 4.8403C23.2648 3.80833 23.8162 3.57674 23.8162 3.57674C21.3453 1.09147 16.3655 1.00737 16.3655 1.00737L17.1637 4.62943ZM10.1881 4.31417L15.8522 4.52503L15.3389 1.00778C12.4115 0.965526 10.7392 1.68141 10.7392 1.68141L9.90287 3.17696L10.1881 4.31417ZM6.99495 4.29262H8.57303L10.1507 1.89186C8.96708 2.41386 8.01971 2.92839 7.45555 3.2536C7.11309 3.4508 6.92616 3.87213 6.99495 4.29262Z"
                  fill="#003F6B"
                />
              </svg>
              <p className="text-sm text-ligherdarkblue font-bold">Cab</p>
            </div>
            <p className="text-base text-ligherdarkblue font-bold">
              <span className="text-xs font-light align-text-top">Rwf</span>
              60,000
            </p>
          </div>
        </div>
      </div>
      <Modal show={openRechargeModal} onHide={handleClose}>
        <RechargeForm handleClose={handleClose} />
      </Modal>
    </>
  );
}

export default TotalExpenses;
