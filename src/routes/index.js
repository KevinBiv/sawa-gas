import React from "react";
import { Redirect } from "react-router-dom";
import BlankLayout from "../layout/BlankLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";

import Charts from "../pages/charts";
import Reports from "../pages/reports";
import Income from "../pages/Income";
import Nurses from "../pages/Nurses";
import NurseDetails from "../pages/Nurses/NurseDetails";
import Pending from "../pages/Pending";
import Patients from "../pages/Patients";
import {
  requiresAuthentication,
  requiresNoAuthentication,
} from "../store/middleware";
import Pricing from "../pages/Pricing";
import Signin from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ServicesPreferences from "../components/registerSteps/ServicesPreferences";
import Services from "../pages/Services";
import People from "../pages/People";
import Finances from "../pages/Finances";

const routes = [
  {
    component: BlankLayout,

    routes: [
      {
        name: "Index",
        path: "/",
        exact: true,
        render: () => <Redirect to="/signin" />,
      },
      {
        name: "Dashboard",
        path: "/dashboard",
        component: DashboardLayout,
        routes: [
          {
            name: "Dashboard Home",
            path: "/dashboard",
            exact: true,
            component: Home,
          },
          {
            name: "My services page",
            path: "/dashboard/services",
            exact: true,
            component: Services,
          },
          {
            name: "People page",
            path: "/dashboard/people",
            exact: true,
            component: People,
          },
          {
            name: "Finance page",
            path: "/dashboard/finances",
            exact: true,
            component: Finances,
          },
          {
            name: "Charts page",
            path: "/dashboard/charts",
            exact: true,
            component: Charts,
          },

          {
            name: "Patients Profile ",
            path: "/dashboard/patients",
            exact: true,
            component: Patients,
          },
        ],
      },
      {
        name: "Services preferences",
        path: "/preferences",

        exact: true,
        component: ServicesPreferences,
      },

      {
        name: "Sign up page",
        path: "/signup",

        exact: true,
        component: SignUp,
      },

      {
        name: "Sign in page",
        path: "/signin",
        exact: true,
        component: Signin,
      },
    ],
  },
];
export default routes;
