import React from 'react';
// import "../Dahboard.css";
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


const Div = styled.div`
display:grid;
grid-template-columns:3fr 16fr;
min-height :100vh;
height:max-content;
@media screen and (min-width:280px) and (max-width:1080px) {
    grid-template-columns:1fr;
    height:max-content;
}
`
const Aside = styled.section`
background-color:var(--dark-background-color);
height:100%; 
width:max-content;
padding:2rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
.help {
    svg {
       cursor:pointer;
       color:#fff;
       transition:0.5s ease-in-out;

    }
    &:hover {
       svg {
        color:var(--primary-color);
       }
    }
}
svg {
    color:var(--primary-color);
    font-size:1.5rem;
}
.brand {
    svg {
    font-size:2.5rem;
    }
}  
.links {
    display :flex;
    flex-direction:column;
    gap:2.5rem;
    list-style-type:none;
    li {
        border-radius :1rem;
         padding:0.5rem;
         transition:0.5s ease-in-out;
         cursor:pointer;
         display:flex;
        align-items:center;
         justify-content:center;
       svg {
        color:#fff;
       }
       & :hover {
         box-shadow:0 0 60px 8px var(--primary-color);
         svg {
            color : var(--primary-color);
         }
    }
    }
    .selected {
         color:var(--primary-color);
    }
}
.
`

const Overview = styled.sec`
  display:flex;
  justify-content:space-between;
  background-color:red;
  color:#fff;
  margin:2rem;
   .timeline {
    display:flex;
    justify-content:center;
    cursor:pointer;
    svg {
        color:var(--primary-color);
        font-size:2rem;
    }
   }

`;


// sidebar start here
const SidebarContainer = styled.div`
background-color:var(--dark-background-color);
height:100%; 
padding:3rem;
display:flex;
flex-direction:column;
height:100vh;
color:#fff;
font-family:"loto",sans-serif;

`;


const SidebarMenu = styled.ul`
display:flex;
margin-top:50px;
gap:2.5rem;
padding:0px 30px;
align-items:left;
flex-direction:column;
list-style:none;
width:100%;
`;
const SidebarMenuItem = styled.li`
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
const Icon = styled.svg`
        width: 20px;
        height: 20px;
        cursor:pointer;
        font-size:1.5rem;
        color:#fff;
        transition:0.5s ease-in-out;
        &: hover {
              cursor:pointer;
                color:var(--primary-color);
                transition:0.5s ease-in-out;
                box-shadow:none;
                
        }
 
`;
const SidebarMenuItemLabel = styled.p`
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 18px;
        font-weight:bold;
        line-height: 1.3;
        font-weight: 600;
        text-align: left;
        padding: 0px 20px;
        color: #ffffff;
        &:hover {
            color: var(--primary-color);
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

export default function Dashboard() {
    const Sidebar1 = () => {
        return (
            <SidebarContainer>
                <SidebarMenu>
                     <Link to="/" className='Link1'>
                     <SidebarMenuItem>
                        <Icon>
                        <RiDashboardLine/>
                        </Icon>
                         <SidebarMenuItemLabel>Overview</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                     </Link>
                       <Link to="/" className='Link1'>
                       <SidebarMenuItem>
                      <Icon>
                      <BsFillBriefcaseFill/>
                      </Icon>
                     <SidebarMenuItemLabel>Portfolio</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                       </Link>
                       <Link to="/" className='Link1'>
                       <SidebarMenuItem>
                         <Icon>
                         <BsWallet/>
                            </Icon>                       
                              <SidebarMenuItemLabel>Wallet</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                       </Link>
                        <Link to="/" className='Link1'>
                        <SidebarMenuItem>
                        <Icon>
                        <BsGraphUp/>
                        </Icon>
                         <SidebarMenuItemLabel>Invest</SidebarMenuItemLabel>
                    </SidebarMenuItem>
                        </Link>
                       <Link to="/" className='Link1'>
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
                            <SidebarMenuItemLabel1>
                                Sign out
                            </SidebarMenuItemLabel1>
                       
                    </MenuSignOut>
                </SidebarMenu>
            </SidebarContainer>
        )
    }
    // const Sidebar = () => {
    //     return (
    //         <Aside id="sidebar">
    //            <div className='brand'>
    //               {/* <RiNeteaseCloudMusicLine/> */}
    //            </div>
    //            <ul className='links'>
    //             <li className='selected'> 
    //                {/* <SiAnalogue/> */}
    //             </li>
    //             <li className=''> 
    //                {/* <HiOutlineMusicNote/> */}
    //             </li>
    //             <li className=''> 
    //                {/* <BiBell/> */}
    //             </li>
    //             <li className=''> 
    //                {/* <AiOutlineDollarCircle/> */}
    //             </li>
    //             <li className=''> 
    //                {/* <BiGroup/> */}
    //             </li>
    //            </ul>
    //            <div className='help'>
    //             {/* <FiHelpCircle/> */}
    //            </div>
    //         </Aside>
    //     )
    // }

//     const Navbar = () => {
//         return (
//             <>
//                <div className="topbar">
//       <div className="topbarWrapper">
//         <div className="topLeft">
//           <span className="logo">OpenReplay</span>
//         </div>
//         <div className="topRight">
//           <div className="topbarIconContainer">
//             <IoIosNotificationsOutline />
//             <span className="topIconBadge">2</span>
//           </div>
//           <div className="topbarIconContainer">
//             <MdLanguage />
//             <span className="topIconBadge">2</span>
//           </div>
//           <div className="topbarIconContainer">
//             <FiSettings/>
//           </div>
//           <img src="/fine.jpg" alt="" className="topAvatar" />
//         </div>
//       </div>
//     </div>
//             </>
//         )
//     }
//     const  Overview = () => {
//          <Overview>

//          </Overview>
//     }
//   return (
//     <>
//       <Div>
//       <Sidebar1/>
//         <Overview/>
//         </Div>
//     </>
//   )
}
