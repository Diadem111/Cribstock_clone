import axios,{useState} from "axios";
import { useSelector } from "react-redux";

const url = "http://localhost:4000/checkout/";

export const PayButton = ({dataInfo}) => {
   
    const handleCheckout = () => {
       console.log(dataInfo);
    
    };
    return (
        <>
        <button className="btn btn-rounded mt-3 text-white fw-bold" onClick={() => handleCheckout()}>Check out</button>
        </>
    )
}