import React from "react";

// Admin Imports

import Profile from "views/investor/profile";
import FeedTable from "views/investor/feed";
import ChatBox from "views/investor/chatbot/Chatbot";

// Icon Imports
import { MdHome, MdPerson } from "react-icons/md";
import { RiChatSmile3Line } from "react-icons/ri";

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
    icon: <RiChatSmile3Line className="h-6 w-6" />,
    component: <ChatBox />,
  },
];
export default routes;
