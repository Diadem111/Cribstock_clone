import React, {useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Wallet.css";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {BiMoney}  from "react-icons/bi";
import {AiOutlineArrowUp}  from "react-icons/ai";
import {MdCompareArrows}  from "react-icons/md";
import {MdArrowDownward}  from "react-icons/md";
import {BsCreditCard2BackFill}  from "react-icons/bs";
import { Link } from 'react-router-dom';
import {AiOutlineExclamationCircle} from "react-icons/ai";
// import {AiOutlineEyeInvisible} from "react-icons/ai";
import { useDispatch,useSelector } from 'react-redux';
import {AiOutlineArrowLeft} from "react-icons/ai";
import {PayButton} from "../PayButton";
import {BsBank}  from "react-icons/bs";

import Button from 'react-bootstrap/Button';
import {paymentReducer} from "../../redux/paymentReducer";

import Modal from "react-bootstrap/Modal";


export default function Wallet () {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // second modal
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // third modal
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [fact, setFact] = useState(false);
  const handleFact = () => setFact(false);
  const handleFact1 = () => setFact(true);


  let currentUser = useSelector((state) => state.users.currentuser);

  console.log(currentUser);
  let data = currentUser;
  
const dispatch = useDispatch();
  const [quantity,setQuantity] = useState();
             
  let quant;
  let holder ="";

  
   const  handleInput = (quant) =>{
    holder = quant;
    
  }

   
//   fund wallet modal starts here 
     const FundWallet = () => {
        return (
            <>
            <section className={fact ? `mt-5`:""}>
                                  {/* <span variant="primary" onClick={handleFact1} className="d-flex ms-5">
                                    <AiOutlineArrowUp/>
                                    <button className='wee p-2'>Buy/Sell</button>
                                  </span> */}
                                  <Modal show={fact} onHide={handleFact} className="bd-highlight ">
                                      <Modal.Header closeButton>
                                          <Modal.Title className="p-3 fw-bold">
                                          <div className="d-flex flex-row"> 
                                          <span><AiOutlineArrowLeft className='' onClick={()=>{handleShow();handleFact()}}  /></span>
                                          <span className='ms-4 fw-bolder'>Fund wallet via card</span>
                                          </div>
                                          </Modal.Title>
                                      </Modal.Header>
                                <Modal.Body className="ms-5 bd-highlight dola ">
                                 <main>
                                  <div>
                                    <p>
                                    For your security, your bank may have default transaction
                                     restrictions on your card. If you are depositing significantly
                                     higher amounts, please contact your bank to remove or set a new transaction limit.
                                    </p>
                                  </div>
                                  <div className="mb-3 mt-3">
                                  <label for="lastnameInput" className="form-label fw-bold">
                                  Amount
                                </label>
                                <input type="number" 
                               className="form-control "
                               value={quantity}
                                 onChange={(e)=>handleInput(e.target.value) }/>
                                  </div>
                                  < PayButton data={holder} />
                                  {/* <button className="btn btn-rounded mt-3 text-white fw-bold">Continue</button> */}
                                 </main>
                                </Modal.Body>
                                
                                    </Modal>
                                  </section>
            </>
        )
     }
             

    return (
       <section className="App3">
        <div className="AppGlass3">
            <Sidebar userData={data}/>
            <div className="list3">
               <div className=" d-flex ms-1 ms-lg-5 dee">
                <section className="col-12 col-md-6 col-lg-6 mt-5 pt-5 ">
                    <div className="card bgg" style={{height:"300px"}}>
                         <main>
                            <span className="d-flex ms-5 mt-4">
                                <p className="mt-1 fw-bold">Wallet Balance</p>
                               <button className="btn odd ms-3 "> <AiOutlineEyeInvisible className=" icu "/>
                               </button>
                            </span>
                            <h1 className="ms-5 fw-bold ">#0.00</h1>
                            <div className="d-flex ms-5 odd1 mt-2">
                                  <p className="mt-3 ms-2">Wallet tag: $diadem</p>
                                  <button className="ms-5 ps-5 odd3">
                                    <BiMoney/>
                                  </button>
                                 </div>
                                 {/* modal start here */}
                                 <section className="mt-5">
                                 <span variant="primary" onClick={handleShow} className="d-flex ms-5">
                                   <AiOutlineArrowUp/>
                                    <p>Fund wallet</p>
                                 </span>
                                 <Modal show={show} onHide={handleClose} className="bd-highlight ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="p-3">Fund wallet</Modal.Title>
                                    </Modal.Header>
                               <Modal.Body className="ms-5 bd-highlight dola ">
                                 <div className="d-flex bd-highlight " >
                                    <BsBank size={42}/>
                                    <span className="d-flex flex-column ms-3">
                                        <h2>NGN Mobile Bank Transfer</h2>
                                        <p className="text-muted">Timeline:0-1 hour</p>
                                    </span>
                                 </div>
                               </Modal.Body>
                               <Modal.Body className="ms-5 mb-5 mt-3 bd-highlight dola ">
                                 <div className="d-flex bd-highlight " onClick={()=>{handleClose(); handleFact1();}}>
                                    <BsCreditCard2BackFill  size={42}/>
                                    <span className="d-flex flex-column ms-3">
                                        <h2>NGN Debit/Credit card</h2>
                                        <p className="text-muted">Timeline:Instant</p>
                                    </span>
                                 </div>
                               </Modal.Body>
                                  </Modal>

                                  {/* fund wallet  */}
                                  <FundWallet/>
                                 </section>
                                 <hr/>
                                 {/* modal ends here */}

                                 {/* second modal */}
                                 <section className="mt-4">
                                 <span variant="primary" onClick={handleShow1} className="d-flex ms-5">
                                   <MdCompareArrows/>
                                    <p>Transfer</p>
                                 </span>
                                 <Modal show={show1} onHide={handleClose1} className="bd-highlight  ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="p-3">
                                          <h5 className="">Let us know more about you.
                                            </h5>
                                            <small >Provide accurate information below to enable you do more with your wallet
                                            </small>
                                        </Modal.Title>
                                    </Modal.Header>
                               <Modal.Body className="ms-5 bd-highlight p-5">
                                    <form>
                             <div className='row mb-3'>
                                <div className='col'>
                                <label for="FirstnameInput" className="form-label">
                                    First name
                                </label>
                                <input type="text" className='form-control' 
                                name='firstname' width="50px" />
                                </div>
                                <div className='col'>
                                <label for="lastnameInput" className="form-label">
                                    Last name
                                </label>
                                <input type="text" 
                                className='form-control'
                                name='lastname' />
                                </div>
                             </div>
                             <div className='row mb-3'>
                                <div className='col'>
                                <label for="FirstnameInput" className="form-label">
                                    Email address
                                </label>
                                <input type="text" className='form-control' 
                                name='firstname' width="50px" />
                                </div>
                                <div className='col'>
                                <label for="lastnameInput" className="form-label">
                                    Date of birth
                                </label>
                                <input type="date" 
                                className='form-control'
                                name='lastname' />
                                </div>
                             </div>
                              {/* text area div */}
                              <div class="form-group mb-3">
                                <label for="exampleFormControlTextarea1">Address</label>
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <section className="mb-3">
                                <label for="FirstnameInput" className="form-label">
                                    Government issused ID
                                </label>
                                <input type="file" className='form-control' 
                                name='firstname'/>
                                </section>
                                <button className="btn ogg">Save</button>
                                    </form>
                               </Modal.Body>
                                 </Modal>
                                 </section>
                                 <hr/>
                                 {/* third modal start here */}
                                 <section className="mt-4">
                                 <span variant="primary" onClick={handleShow1} className="d-flex ms-5">
                                   <MdArrowDownward/>
                                    <p>Withdraw</p>
                                 </span>
                                 <Modal show={show1} onHide={handleClose1} className="bd-highlight  ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="p-3">
                                          <h5 className="">Let us know more about you.
                                            </h5>
                                            <small >Provide accurate information below to enable you do more with your wallet
                                            </small>
                                        </Modal.Title>
                                    </Modal.Header>
                               <Modal.Body className="ms-5 bd-highlight p-5">
                                    <form>
                             <div className='row mb-3'>
                                <div className='col'>
                                <label for="FirstnameInput" className="form-label">
                                    First name
                                </label>
                                <input type="text" className='form-control' 
                                name='firstname' width="50px" />
                                </div>
                                <div className='col'>
                                <label for="lastnameInput" className="form-label">
                                    Last name
                                </label>
                                <input type="text" 
                                className='form-control'
                                name='lastname' />
                                </div>
                             </div>
                             <div className='row mb-3'>
                                <div className='col'>
                                <label for="FirstnameInput" className="form-label">
                                    Email address
                                </label>
                                <input type="text" className='form-control' 
                                name='firstname' width="50px" />
                                </div>
                                <div className='col'>
                                <label for="lastnameInput" className="form-label">
                                    Date of birth
                                </label>
                                <input type="date" 
                                className='form-control'
                                name='lastname' />
                                </div>
                             </div>
                              {/* text area div */}
                              <div class="form-group mb-3">
                                <label for="exampleFormControlTextarea1">Address</label>
                                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <section className="mb-3">
                                <label for="FirstnameInput" className="form-label">
                                    Government issused ID
                                </label>
                                <input type="file" className='form-control' 
                                name='firstname'/>
                                </section>
                                <button className="btn ogg">Save</button>
                                    </form>
                               </Modal.Body>
                                 </Modal>
                                 </section>
 
                         </main>
                    </div>
                </section>
                <div className=' '>
                    <section className=' '>
                      <div className='col-12 col-lg-6 col-md-6 mtta2  '>
                       <span className='d-flex'>
                        <h5 className='mt-2 ms-4 ms-lg-0'>Transaction History</h5>
                           
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
        </div>
       </section>
    )
}