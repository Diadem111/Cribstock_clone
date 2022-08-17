// Sidebar import 
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {BsFillBriefcaseFill} from "react-icons/bs";
import {RiDashboardLine} from "react-icons/ri"
import {BsWallet} from "react-icons/bs";
import {BsGraphUp} from "react-icons/bs";
import {BsPeople} from "react-icons/bs";
import {BiChevronDown} from "react-icons/bi";
import {FiLogOut} from "react-icons/fi";
import {FiSettings} from "react-icons/fi";
import {MdLanguage} from "react-icons/md";

import {IoIosNotificationsOutline} from "react-icons/io";


// sidebar data
export const SidebarData = [
     {
      icon: RiDashboardLine,
      heading: "Dashboard",
    },
    {
      icon: BsFillBriefcaseFill,
      heading: "Portfolio",
    },
    {
      icon: BsWallet,
      heading: "Wallet",
    },
    {
      icon: BsGraphUp,
      heading: 'Invest'
    },
    {
      icon: BsPeople,
      heading: 'Trade'
    },
  ];

  // Analytics Cards Data
