import React from  "react";
import "./Dashnav.css";
import {BiSearchAlt} from "react-icons/bi";
import {GrLanguage} from "react-icons/gr";
import {MdDarkMode} from "react-icons/md";
import {BsFullscreenExit} from "react-icons/bs";
import {IoIosAdd, IoMdNotificationsOutline} from "react-icons/io";
import {BsFillChatDotsFill} from "react-icons/bs";
import {AiOutlineUnorderedList} from "react-icons/ai";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";



export default function Dashnav() {
    // const { dispatch } = useContext(DarkModeContext);

    return (
        <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <BiSearchAlt/>
          </div>
          <div className="items">
            <div className="item">
              <GrLanguage className="icon" />
              English
            </div>
            {/* <div className="item">
              <MdDarkMode
                className="icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div> */}
            <div className="item">
              <BsFullscreenExit className="icon" />
            </div>
            <div className="item">
              <IoMdNotificationsOutline className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <BsFillChatDotsFill className="icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <AiOutlineUnorderedList    className="icon" />
            </div>
            <div className="item">
              <img
                src="/nene.jpg"
                alt=""
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
  
    )
}