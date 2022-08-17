import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {GrLanguage} from "react-icons/gr";
import {MdDarkMode} from "react-icons/md";
import {BsArrowsFullscreen} from "react-icons/bs";
import {IoMdNotificationsOutline} from "react-icons/io";
import {BsChatRightDots} from "react-icons/bs";
import "../DashNav.scss";


export default function DashNav() {
  return (
    // const { dispatch } = useContext(DarkModeContext);
    <>
     <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BiSearchAlt2 />
        </div>
        <div className="items">
          <div className="item">
            <GrLanguage className="icon" />
            English
          </div>
          {/* <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div> */}
          <div className="item">
            <MdDarkMode className="icon" />
          </div>
          <div className="item">
            <IoMdNotificationsOutline className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <BsArrowsFullscreen className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <BsChatRightDots className="icon" />
          </div>
          <div className="item">
            <img
              src="/fine.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
