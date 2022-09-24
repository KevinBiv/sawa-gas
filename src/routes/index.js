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
import Finances from "../pages/Finances";
import RechargeSuccessful from "../components/finances/recharge/RechargeSuccessful";
import RechargeFailed from "../components/finances/recharge/RechargeFailed";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import Stations from "../pages/Stations";

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
            name: "My stations page",
            path: "/dashboard/stations",
            exact: true,
            component: Stations,
          },
          {
            name: "Reports page",
            path: "/dashboard/reports",
            exact: true,
            component: Reports,
          },
          {
            name: "Finance page",
            path: "/dashboard/finances",
            exact: true,
            component: Finances,
          },
          {
            name: "Profile page",
            path: "/dashboard/profile",
            exact: true,
            component: Profile
          }
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
