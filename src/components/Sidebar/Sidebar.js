import React, {useState} from 'react';
import  "./Sidebar.css";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {BsFillBriefcaseFill} from "react-icons/bs";
import {RiDashboardLine} from "react-icons/ri"
import {BsWallet} from "react-icons/bs";
import {BsGraphUp} from "react-icons/bs";
import {BsPeople} from "react-icons/bs";
// import {BiChevronDown} from "react-icons/bi";
import {FiLogOut} from "react-icons/fi";
// import {FiSettings} from "react-icons/fi";
// import {MdLanguage} from "react-icons/md";
import {AiOutlineBars} from "react-icons/ai";
// import { SidebarData } from ".../Data/Data";
// import {IoIosNotificationsOutline} from "react-icons/io";
import { motion } from "framer-motion";
import Portfolio from "../Portfolio/Portfolio";
import Wallet from "../Wallet/Wallet";
import Main from "../MainDash/Main";
import Invest from "../Investment/Investment";
import Trade from "../Trade/Trade";
import { useNavigate } from "react-router-dom";



const SidebarContainer = styled.div`
height:100%; 
display:flex;
flex-direction:column;
height:100vh;
color:#fff;
transition: all 300ms ease;
font-family:"loto",sans-serif;

`;


const SidebarMenu = styled.ul`
display:flex;
gap:1.5rem;
width:200px;
flex-direction:column;
list-style:none;

`;
const SidebarMenuItem = styled.li` 
        height: 40px;
        border-radius:0.7rem;
        display:flex;
        flex-direction:row;
        text-decoration:none;
        cursor:pointer;
        color:#fff;
        transition:0.5s ease-in-out;
        & :hover {
            background-color:var(--gray);
            cursor: pointer;
            background-color: rgb(217, 233, 217);
            transform: translateX(10px);
            transition:0.5s ease-in-out;  
            background: rgba(200,200,200, 0.05);
            box-shadow: inset 3px 0 0 0 #ffffff;
            cursor: pointer;
        }
 

`;
const Icon = styled.svg`
        width: 20px;
        height: 20px;
        cursor:pointer;
        font-size:1.5rem;
        color:#000;
        transition:0.5s ease-in-out;
        &: hover {
              cursor:pointer;
                color:var(--gray);
                transition:0.5s ease-in-out;
                box-shadow:none;
                
        }
 
`;
const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        font-weight:bold;
        line-height: 1.3;
        text-decoration:none;
        font-eight: 600;
        text-align: left;
        padding: 0px 20px;
        color:#000;
        &:hover {
            color: var(--gray);
          transform :translateX(10px);
        }
    
`;
const MenuSignOut = styled.div`
margin-top:100px;
height: 40px;
width: 100%;
display:flex;
flex-direction:row;
cursor:pointer;
color:#fff;
transition:0.5s ease-in-out;
& :hover {
    background-color:blue;
    transition:0.5s ease-in-out;  
    background: rgba(200,200,200, 0.05);
    box-shadow: inset 3px 0 0 0 #ffffff;
   cursor: pointer;
}

`;
const SidebarMenuItemLabel1 = styled.p`
text-decoration:none;
font-family: "Open Sans", sans-serif;
color: #fff;
font-size: 18px;
font-weight:bold;
line-height: 1.3;
padding: 0px 20px;
font-weight: 600;
text-align: left;
color: #ffffff;
&:hover {
    color: var(--primary-color);
  transform :translateX(10px);
}

`;




export default function Sidebar() {
    // const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
    console.log(window.innerWidth);
  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
      <AiOutlineBars />
    </div>
  <motion.div className='sidebar'
  variants={sidebarVariants}
  animate={window.innerWidth<=768?`${expanded}`:''}
  >
    {/* logo */}
    <div className="logo">
      <img src="/logo2.png" alt="logo" />
      <span>
        Jab<span>st</span>ock
      </span>
    </div>

    <div className="menu">
    <SidebarContainer>
                <SidebarMenu>
                     <Link to="/dashboard"  className='Link1 active-link' >
                     <SidebarMenuItem>
                        <Icon>
                        <RiDashboardLine/>
                        </Icon>
                         <SidebarMenuItemLabel  >Overview</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                     </Link>
                       <Link to="/dashboard/portfolio" className='Link1'>
                       <SidebarMenuItem>
                      <Icon>
                      <BsFillBriefcaseFill/>
                      </Icon>
                     <SidebarMenuItemLabel>Portfolio</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                       </Link>
                       <Link to="/dashboard/wallet" className='Link1'>
                       <SidebarMenuItem>
                         <Icon>
                         <BsWallet/>
                            </Icon>                       
                              <SidebarMenuItemLabel>Wallet</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                       </Link>
                        <Link to="/dashboard/invest" className='Link1'>
                        <SidebarMenuItem>
                        <Icon>
                        <BsGraphUp/>
                        </Icon>
                         <SidebarMenuItemLabel>Invest</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                        </Link>
                       <Link to="/dashboard/trade" className='Link1'>
                       <SidebarMenuItem>
                         <Icon>
                         <BsPeople/>
                            </Icon>                  
                           <SidebarMenuItemLabel>Trade</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                       </Link>
                    <MenuSignOut>
                        <Icon>
                            <FiLogOut/>
                            </Icon>
                            {/* <SidebarMenuItemLabel1>
                                Sign out
                            </SidebarMenuItemLabel1> */}
                       
                    </MenuSignOut>
                </SidebarMenu>
            </SidebarContainer>

      {/* {SidebarData.map((item, index) => {
        return (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            
            <item.icon />
            <span>{item.heading}</span>
            
          </div>
        );
      })} */}
      {/* signoutIcon */}
      <div className="menuItem">
        {/* <FiLogOut /> */}
      </div>
    </div>
  </motion.div>
  </>

  )
}
