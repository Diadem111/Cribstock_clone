import React, {useState,useRef} from "react";
import "./Trade.css";
import Sidebar from "../Sidebar/Sidebar";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {BsBookFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';

import {BiDotsVerticalRounded} from "react-icons/bi";


export default function Trade () {
    const [show, setShow] = useState(false);
  const target = useRef(null);
  let currentUser = useSelector((state) => state.users.currentuser);
  console.log(currentUser);
  let data = currentUser;


    return (
        <>
        <section className="App5">
           <div className="AppGlass5">
            <Sidebar userData={data}/>
            <main className="list5">
              <section>
                <div className=" d-flex flex-row mt-lg-5 mt-3 ms-lg-3 ms-5 ps-4">
                     <span>
                        <h1 className="fw-bolder">Trade center</h1>
                        <p>Sell, invest into property-stocks in minutes
                         </p>
                     </span>
                     
                     <div>
                        <button ref={target} onClick={() => setShow(!show)} className="mybt">
                             <BiDotsVerticalRounded/>
                        </button>
                        {/* <BiDotsVerticalRounded >  click</BiDotsVerticalRounded>      */}
                              <Overlay target={target.current} show={show} className="ttto" placement="right" >
                                 {(props) => (
                               <Tooltip id="overlay-example" {...props} >
                                     <Link to="/" className="lee">
                                       <div className="d-flex">
                                       <BsBookFill className="mt-2 ms-2" />
                                      <p className="ms-3 p-1">View guidelines</p>
                                    </div>
                                   </Link>   
                               </Tooltip>
                               )}
                            </Overlay>
                     </div>
                     
                </div>
                <main className="">
                    <div className="row g-2 mt-lg-4 mt-5 ms-5 me-3">
                        <section className="col-12 col-md-6 col-lg-4">
                            <div className="card card100">
                                <section className="d-flex mt-3" >
                                    <span>
                                        <img src="/house1.jpg" alt="" className="img1 ms-3"/>
                                    </span>
                                    <span>
                                        <h5 className="fw-bolder">HKLEY</h5>
                                        <p>Unit 8 block A,plt 27/28 iberekodo avenue, bridge gate estate,Agungi,Lekki,Lagos</p>
                                    </span>
                                </section>
                            </div>
                        </section>
                        {/* second col */}
                        <section className="col-12 col-md-6 col-lg-4">
                            <div className="card card100">
                                <section className="d-flex mt-3" >
                                    <span>
                                        <img src="/house2.jpg" alt="" className="img1 ms-3"/>
                                    </span>
                                    <span>
                                        <h5 className="fw-bolder">PENTH</h5>
                                        <p>Unit 8 block A,plt 27/28 iberekodo avenue, bridge gate estate,Agungi,Lekki,Lagos</p>
                                    </span>
                                </section>
                            </div>
                        </section>
                        {/* third col */}
                        <section className="col-12 col-md-6 col-lg-4">
                            <div className="card card100">
                                <section className="d-flex mt-3" >
                                    <span>
                                        <img src="house3.jpg" alt="" className="img1 ms-3"/>
                                    </span>
                                    <span>
                                        <h5 className="fw-bolder">SHPNG</h5>
                                        <p>Unit 8 block A,plt 27/28 iberekodo avenue, bridge gate estate,Agungi,Lekki,Lagos</p>
                                    </span>
                                </section>
                            </div>
                        </section>
                    </div>
                </main>
              </section>
            </main>
           </div>
        </section>
        </>
    )
}