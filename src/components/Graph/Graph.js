import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Rightside from "../Rightside/Rightside";
import Card from "../Card/Card";
import "./Graph.css";
import GraphSection from "../GraphSection/GraphSection";


export default function Graph () {
    return (
        <>
         <div className='App'>
       <div className='AppGlass'>
          <Sidebar/>
       <div className='MainDash5'>
        {/* <h1>Welcome</h1> */}
         <GraphSection/> 
         {/* <Table/> */}
       </div>
       <Rightside/>
         </div>
       </div>
        </>
    )
}