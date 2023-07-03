// Admin Page
import Dashbord from "./Admin/Dashbord";
import Profile from "./Admin/Profile";

// User Page

import Aboutus from "./Home/Aboutus";
import Homepage from "./Home/Homepage";
import Login from "./Home/Login";
import Contact from "./Home/Contact";

export const AdminRouter = [
  {
    path: "/admin",
    component: Dashbord,
    exact: true,
  },
  {
    path: "/dashboard",
    component: Dashbord,
    exact: true,
  },

  {
    path: "/profile",
    component: Profile,
    exact: true,
  },
];

export const MainRouter = [
  {
    path: "/",
    component: Homepage,
    exact: true,
  },

  {
    path: "/login",
    component: Login,
    exact: true,
  },

  {
    path: "/about",
    component: Aboutus,
    exact: true,
  },

  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
];
