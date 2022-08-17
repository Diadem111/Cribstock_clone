import React, {useState,useRef} from "react";
import "./Trade.css";
import Sidebar from "../Sidebar/Sidebar";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {BsBookFill} from "react-icons/bs";

import {BiDotsVerticalRounded} from "react-icons/bi";


export default function Trade () {
    const [show, setShow] = useState(false);
  const target = useRef(null);

    return (
        <>
        <section className="App5">
           <div className="AppGlass5">
            <Sidebar/>
            <main className="list5">
              <section>
                <div className=" d-flex flex-row">
                     <span>
                        <h1>Trade center</h1>
                        <p>Sell, invest into property-stocks in minutes
                         </p>
                     </span>
                     <div>
                        <button ref={target} onClick={() => setShow(!show)}>
                             <BiDotsVerticalRounded/>
                        </button>
                        {/* <BiDotsVerticalRounded >  click</BiDotsVerticalRounded>      */}
                              <Overlay target={target.current} show={show} placement="right" className="ttto">
                                 {(props) => (
                               <Tooltip id="overlay-example" {...props}>
                                   <div className="d-flex">
                                    <BsBookFill/>
                                    <p className="ms-3 p-1">View guidelines</p>
                                    </div>   
                               </Tooltip>
                               )}
                            </Overlay>
                     </div>
                </div>
              </section>
            </main>
           </div>
        </section>
        </>
    )
}