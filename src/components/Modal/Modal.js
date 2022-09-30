import React from "react";
import "./Modal.css";  
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";


const Modal = ({showOverlay ,handleRotation,setShowOverlay,handleRotationLeft} ) => {

    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setShowOverlay(null);
        }
    }
    return <>
    <h1>this is modal</h1>
       <div className="overlay dismiss" onClick={handleClick}>
           <img src={showOverlay} alt="bigger picture"/>
           <span className="dismiss" onClick={handleClick}>X</span>
        <div onClick={handleRotation} className="overlay-arrow_left">
            
           <div>
           <AiOutlineArrowLeft className="over "/>
           </div>
       </div>
       <div onClick={handleRotationLeft} className="overlay-arrow_right">   
           <div>
        <AiOutlineArrowRight className="over2"/>
           </div>
       </div>
       
       
    </div>
    </>
}
export default Modal;