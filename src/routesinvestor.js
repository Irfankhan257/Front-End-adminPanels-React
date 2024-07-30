import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/investor/profile";
import DataTables from "views/admin/tables";
import FeedTable from "views/investor/feed";
import ChatBox from "views/investor/chatbot/Chatbot";
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

const routes = [
  {
    name: "Feed",
    layout: "/investor",
    path: "feed",
    icon: <MdHome className="h-6 w-6" />,
    component: <FeedTable />,
  },

  {
    name: "Profile",
    layout: "/investor",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },

  {
    name: "Chat AI",
    layout: "/investor",
    path: "chatai",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ChatBox />,
  },
];
export default routes;
