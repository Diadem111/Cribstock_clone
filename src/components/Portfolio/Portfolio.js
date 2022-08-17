import React from 'react';
import "./Portfolio.css";
import Sidebar from '../Sidebar/Sidebar';
import {AiOutlineExclamationCircle} from "react-icons/ai";
import {AiOutlineEyeInvisible} from "react-icons/ai";


import Dashnav from '../DashNav/Dashnav';

export default function Portfolio() {
  const TableW = () => {
    return (
      <>

      </>
    )
  }
  return (
     <section className='App1'>
      <div className='AppGlass1'>
        <Sidebar/>
        <div className=' list '>
          {/* <Dashnav/> */}
            <main className='row mt-5  ms-lg-5 mt-3 box '>
                    <div className='col-12 col-lg-4 col-md-6  ms-lg-5 d-flex '>
                      <div className='card p-4 mgg'>
                          <span className='d-flex'>
                            <p>Current Balance</p>
                            <span className='mb-2 ms-2'>
                              <AiOutlineEyeInvisible/>                            </span>
                          </span>
                          <span className='d-flex'>
                              <h1 className='mt-lg-0 mt-2'>#0.00</h1>
                              <button className=' ms-lg-3 ms-4 mb-1  btntwo'>0.00%</button>
                          </span >
                          <h5 className='greencolor'>#0.00 (30d)</h5>
                      </div>
                    </div>
                    {/* second card */}
                    <div className='col-12 col-lg-4 col-md-4  ms-5 d-flex box2 '>
                      <div className='card mt-5 pt-4 mgt'>
                          <span className='d-flex p-3'>
                           <button className='wee p-2'>Buy/Sell</button>
                           <button className='ms-3 btnone p-2'>My Orders</button>
                          </span>
              
                      </div>
                    </div>
             </main>
              {/* table section */}
                <div className='container mt-5 ms-lg-5 newn'>
                    <section className='row '>
                      <div className='col-12 mtta mt-3'>
                       <span className='d-flex'>
                        <h5 className='mt-2'>Your Assets</h5>
                           <button className='ms-4  btnone p-2'>View all </button>
                       </span>
                       <div className='d-flex mt-3'>
                        <span className='mt-1'>
                        <AiOutlineExclamationCircle className='ms-2 mt-1' color='gray'/>
                        </span>
                        <p className='ms-2 mt-2'>You have not made any transactions on your wallet yet
                        </p>        
               </div>

                      </div>
                    </section>
                </div>
        </div>
        </div>

     </section>    
  )
}
