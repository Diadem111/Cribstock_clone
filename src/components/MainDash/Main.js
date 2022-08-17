import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Main.css";
import Card from "../Card/Card";
// import Table from '../Table/Table';
import Rightside from '../Rightside/Rightside';
// import Widgets from '../Widgets/Widgets';

export default function Main() {
  return (
    <>
       <div className='App'>
       <div className='AppGlass'>
          <Sidebar/>
       <div className='MainDash'>
        {/* <h1>Welcome</h1> */}
         <Card/> 
         {/* <Table/> */}
       </div>
       <Rightside/>
         </div>
       </div>
    </>
  )
}
