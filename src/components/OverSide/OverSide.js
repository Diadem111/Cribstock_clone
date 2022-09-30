import React from 'react';
import "./Overside.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';


export default function OverSide () {

    return (
        <>
         <div className="RightSide1">
      <div className='mt-5'>
      <div className='container mycont'>
        <div className='card ttr1'>
            <div className='card-body'>
                <div className='mx-auto text-center justify-content-center ki mt-5'>
                <FontAwesomeIcon icon={faCartPlus} color="black" className='mt-5'  size='5x'/> 
                </div>
                 <div className='card-text mx-auto mt-5'>
                 <h5 className='text-center fw-bolder'>Buy Stocks</h5>
                 <p className='ps-3 text-muted'>Invest and track all your stocks
                  in one place.
                     </p>
               </div>
               <div className='mx-auto  text-center '>
                   <button className='btn  aa mb-5'>
                    <div className=''>
                    {/* <FontAwesomeIcon icon={faUser} color="white"  className='me-2 mt-1'/> */}
                    <p className='fw-bolder mt-3'>Buy Stock</p>
                    </div>
                 </button>
                   </div>
                   
            </div>
        </div>
    </div>

      </div>
     
    </div>

        </>
    )
}