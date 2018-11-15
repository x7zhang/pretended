// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Send from "@material-ui/icons/Send";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import Virtualization from "views/Virtualization/Virtualization.js";

import LEMS from "views/Virtualization/LEMS.js";
import RTM from "views/Virtualization/RTM.js";

import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    subComponent: null,
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile,
    subComponent: null,
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList,
    subComponent: null,
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography,
    subComponent: null,
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons,
    subComponent: null,
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps,
    subComponent: null,
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    subComponent: null,
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    subComponent: null,
  },
  {
    path: "/virtualizations", 
    sidebarName: "Virtualization",
    navbarName: "Virtualization",
    icon: BubbleChart,
    component: LEMS,
    subComponent: [
      {
        path: "/virtualizations/rtm",
        sidebarName: "RTM",
        navbarName: "RTM",
        icon: Send,
        component: RTM,
      },

      {
        path: "/virtualizations/lems",
        sidebarName: "LEMS",
        navbarName: "LEMS",
        icon: Send,
        component: LEMS,
      },

      {
        path: "/virtualizations/vm",
        sidebarName: "VM",
        navbarName: "VM",
        icon: Send,
        component: LEMS
      },
      
    ]

  },
  {
    path: "/virtualization/lems/detail",
    sidebarName: "LEMS",
    navbarName: "LEMS",
    icon: Send,
    component: LEMS
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
