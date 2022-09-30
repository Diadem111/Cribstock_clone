import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Rightside from "../Rightside/Rightside";
import OverSide from "../OverSide/OverSide";
import Card from "../Card/Card";
import "./Graph.css";
import GraphSection from "../GraphSection/GraphSection";


export default function Graph () {
    return (
        <>
         <div className='App7'>
       <div className='AppGlass7'>
          <Sidebar className="sw"/>
       <div className='wow'>
       
        {/* <h1>Welcome</h1> */}
         <GraphSection/> 
         {/* <Table/> */}
       </div>
       <OverSide className="fee"/>
         </div>
       </div>
        </>
    )
}