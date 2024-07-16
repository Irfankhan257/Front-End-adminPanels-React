import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/innovator/profile";
import DataTables from "views/admin/tables";
import FeedTable from "views/innovator/feed";
import RTLDefault from "views/rtl/default";

// Auth Imports
import InnovatorSignIn from "views/innovatorAuth/InnovatorSignIn";
import InvestorSignIn from "views/investorAuth/InvestorSignIn";


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import PitchingIdeas from "views/innovator/pitching";

const routesinnovator = [
  {
    name: "Feed",
    layout: "/innovator",
    path: "feed",
    icon: <MdHome className="h-6 w-6" />,
    component: <FeedTable />,
  },
  {
    name: "Profile",
    layout: "/innovator",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Pitch an Idea",
    layout: "/innovator",
    path: "pitchingidea",
    icon: <MdHome className="h-6 w-6" />,
    component: <PitchingIdeas />,
  },
];
export default routesinnovator;
