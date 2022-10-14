import React, {useState} from 'react';
import "./Portfolio.css";
import Sidebar from '../Sidebar/Sidebar';
import {AiOutlineExclamationCircle} from "react-icons/ai";
import { useDispatch,useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Dashnav from '../DashNav/Dashnav';
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {BiMoney}  from "react-icons/bi";
import {AiOutlineArrowUp}  from "react-icons/ai";
import {MdCompareArrows}  from "react-icons/md";
import {MdArrowDownward}  from "react-icons/md";
import {BsCreditCard2BackFill}  from "react-icons/bs";
import {TbRadar}  from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import {BsCartXFill} from "react-icons/bs";

export default function Portfolio() {
  let currentUser = useSelector((state) => state.users.currentuser);
  console.log(currentUser);
  let data = currentUser;

  //  modal section
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // second section
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

// for button
const [click,setClick] = useState(false);
const [optclick,setOptclick] = useState(false);
// const handleClick = () => setClick(false);
const handleClick1 = () =>{
  setClick(true);
  if(optclick == true) {
    setOptclick(false)
  }
  // setOnForclick(false);
}


const handleForClick = () => {
  setOptclick(true);
  if(click == true) {
    setClick(false);
  }
  // setClick(false);
}

  const TableW = () => {
    return (
      <>

      </>
    )
  }
  return (
     <section className='App1'>
      <div className='AppGlass1'>
        <Sidebar userData={data}/>
        <div className=' list '>
          {/* <Dashnav/> */}
            <main className='row mt-5  ms-lg-5 mt-3 box '>
                    <div className='col-12 col-lg-4 col-md-6  ms-lg-5 d-flex '>
                      <div className='card p-4 mgg'>
                          <span className='d-flex'>
                            <p>Current Balance</p>
                            <span className='mb-2 ms-2'>
                              <AiOutlineEyeInvisible/>   
                             </span>
                          </span>
                          <span className='d-flex'>
                            
                              <h1 className='mt-lg-0 mt-2'>#{data.currentBalance}</h1>
                              <button className=' ms-lg-3 ms-4 mb-1  btntwo'>{data.currentBalance}%</button>
                          </span >
                          <h5 className='greencolor'>#{data.currentBalance} (30d)</h5>
                      </div>
                    </div>
                    {/* second card */}
                    <div className='col-12 col-lg-4 col-md-4  ms-lg-5 ms-1 d-flex  box2'>
                      <div className='card mt-5 pt-4 mgt'>
                          <span className='d-flex p-3'>

                            {/* modal start here */}
                            <section className="mt-5">
                                 <span variant="primary" onClick={handleShow} className="d-flex ms-5">
                                   {/* <AiOutlineArrowUp/> */}
                                   <button className='wee p-2'>Buy/Sell</button>
                                 </span>
                                 <Modal show={show} onHide={handleClose} className="bd-highlight ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="p-3">Do you want to?</Modal.Title>
                                    </Modal.Header>
                               <Modal.Body className="ms-5 bd-highlight dola ">
                                 <div className="d-flex bd-highlight ">
                                    <TbRadar size={42} color="green"/>
                                    <span className="d-flex flex-column ms-3">
                                        <h2>Buy Stock</h2>
                                        <p className="text-muted">Browse and invest in your various properties</p>
                                    </span>
                                 </div>
                               </Modal.Body>
                               <Modal.Body className="ms-5 mb-5 mt-3 bd-highlight dola ">
                                 <div className="d-flex bd-highlight ">
                                    <BsCartXFill  size={42} color="green"/>
                                    <span className="d-flex flex-column ms-3">
                                        <h2>Sell Stocks</h2>
                                        <p className="text-muted">Sell your already owned stocks</p>
                                    </span>
                                 </div>
                               </Modal.Body>
                                  </Modal>
                                 </section>
                           
                           {/* second modal start here */}
                           {/* modal start here */}
                           <section className="mt-5">
                                 <span variant="primary" onClick={handleShow1} className="d-flex ms-5">
                                   {/* <AiOutlineArrowUp/> */}
                                   <button className=' btnone p-2'>My Orders</button>
                                 </span>
                                 <Modal show={show1} onHide={handleClose1} className="bd-highlight ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="p-3">My Orders</Modal.Title>
                                    </Modal.Header>
                               <Modal.Body className="ms-5 bd-highlight dola ">
                                 <div className="d-flex bd-highlight ">
                                    {/* <BsBank size={42}/> */}
                                    <span className="d-flex flex-column ms-3">
                                      <div className="d-flex">
                                        <button className='text-gray fw-bolder border border-success bg-success rounded p-2' onClick={handleClick1}>
                                          sell orders (0)</button>
                                        <button className='ms-3 text-success fw-bolder' onClick={handleForClick}>buy orders (0)</button>
                                      </div>
                                        {/* <h2>NGN Mobile Bank Transfer</h2> */}
                                        {/* <p className="text-muted">Timeline:0-1 hour</p> */}
                                    </span>
                                 </div>
                               </Modal.Body>
                               <Modal.Body className="ms-5 mb-5 mt-3 bd-highlight dola ">
                                 <div className=" bd-highlight ">
                                    {/* <BsCreditCard2BackFill  /> */}
                                    <section className=' '>
                                    {click && <div className='col-12 col-lg-6 col-md-6  ' style={{height:"200px"}}>
                                    <div className=' mt-5 pt-5 text-center mx-auto'>
                                      <span className='mt-1 mx-auto'>
                                      <AiOutlineExclamationCircle className='mx-auto ms-5  mt-1' color='green' size={42} style={{position:"relative",left:"130px"}}/>
                                      </span>
                                      <p className='mt-3 fw-bold text-success mx-auto ms-5' style={{position:"relative",left:"70px"}}>
                                        You dont have any sell order</p>
                                      {/* <p className='ms-2 mt-2'>You have not made any transactions on your wallet yet
                                      </p>         */}
                                  </div>

                              </div>}
                              {optclick &&
                              <div className='col-12 col-lg-6 col-md-6  ' style={{height:"200px"}}>
                              <div className=' mt-5 pt-5 text-center mx-auto'>
                                <span className='mt-1 mx-auto'>
                                <AiOutlineExclamationCircle className='mx-auto ms-5  mt-1' color='green' size={42} style={{position:"relative",left:"130px"}}/>
                                </span>
                                <p className='mt-3 fw-bold text-success mx-auto ms-5' style={{position:"relative",left:"70px"}}>
                                  You dont have any buy order</p>
                                {/* <p className='ms-2 mt-2'>You have not made any transactions on your wallet yet
                                </p>         */}
                            </div>

                           </div>
                              }
                                </section>
                                 </div>
                               </Modal.Body>
                                  </Modal>
                                 </section>
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
