import React from "react";
import { Redirect } from "react-router-dom";
import BlankLayout from "../layout/BlankLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";

import {
  requiresAuthentication,
  requiresNoAuthentication,
} from "../store/middleware";
import Signin from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ServicesPreferences from "../components/registerSteps/ServicesPreferences";
import Services from "../pages/Services";
import People from "../pages/People";
import Finances from "../pages/Finances";
import RechargeSuccessful from "../components/finances/recharge/RechargeSuccessful";
import RechargeFailed from "../components/finances/recharge/RechargeFailed";

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
        ],
      },
      {
        name: "Services preferences",
        path: "/recharge/success",
        exact: true,
        component: RechargeSuccessful,
      },
      {
        name: "Services preferences",
        path: "/recharge/failed",
        exact: true,
        component: RechargeFailed,
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
