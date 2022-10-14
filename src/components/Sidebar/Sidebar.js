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
import Dropdown from 'react-bootstrap/Dropdown';




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
const SidebarMenuItem1 = styled.div` 
        height: 40px;
        border-radius:0.7rem;
        display:flex;
        flex-direction:row;
        text-decoration:none;
        cursor:pointer;
        color:#000;
        margin-top:90px;
        text-transform:uppercase;
      
       
 

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
        width:30px;
        text-decoration:none;
        font-weight: 600;
        text-align: left;
        padding: 0px 20px;
        color:#000;
        
        &:hover {
            color: var(--gray);
          transform :translateX(10px);
        }
    
`;
const SidebarMenuItemLabel4= styled.div`
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        font-weight:bold;
        line-height: 1.3;
        margin-left:15px;
        text-decoration:none;
        font-weight: 600;
        text-align: left;
        padding: 0px 20px;
        color:#000;
        text-transform:uppercase;
        
    
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




export default function Sidebar({userData}) {
      // const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true);
    if (!userData) return ;
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
                      
                       <SidebarMenuItem1>
                         {/* <Icon> */}
                         {/* <BsPeople/> */}
                         <div className='message1 fw-bolder text-capitalize'>
                          <span className='text-capitalize span12 ms-1 mt-4'>
                          {userData.firstname.substring(0,2)}

                          </span>
                         </div>
                            {/* </Icon>                   */}
                           <SidebarMenuItemLabel4>
                           <Dropdown className="d-inline mx-2 fw-bolder text-dark text-capitalize " >
                            <Dropdown.Toggle id="dropdown-autoclose-true">
                              <span className='span12 text-dark'>
                              {userData.firstname}
                              </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#">
                               <div className="d-flex">
                               <Icon>
                            <FiLogOut/>
                            </Icon>
                            <p className="fw-bold ms-3">Logout</p>
                               </div>
                              </Dropdown.Item>
                              
                            </Dropdown.Menu>
                          </Dropdown>

                             </SidebarMenuItemLabel4> 
                           </SidebarMenuItem1>

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

      
      {/* signoutIcon */}
      <div className="menuItem">
        {/* <FiLogOut /> */}
      </div>
    </div>
  </motion.div>
  </>

  )
}
