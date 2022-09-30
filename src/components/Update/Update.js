import React from 'react';
import "./Update.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGroup,faUser} from '@fortawesome/free-solid-svg-icons';


export default function Update() {
  return (
    <div className='container mycont'>
        <div className='card ttr'>
            <div className='card-body'>
                <div className='mx-auto text-center justify-content-center'>
                <FontAwesomeIcon icon={faUserGroup} color="white" className=' '  size='6x'/> 
                </div>
                 <div className='card-text mx-auto mt-4'>
                 <h5 className='text-center'>Claim Your #500 Gift</h5>
                 <p className='ps-3'>Get ₦500 when you invite friends to use Cribstock, they’ll also get ₦500. Bonuses are paid instantly on signee’s first non p2p purchase
                 Cribstock - The future of true property ownership and investing</p>
               </div>
               <div className='mx-auto  text-center '>
                   <button className='btn  btn12'>
                    <div className='d-flex'>
                    <FontAwesomeIcon icon={faUser} color="white"  className='me-2 mt-1'/>
                    <p>Invite a friend</p>
                    </div>
                 </button>

                   </div>
            </div>
        </div>
    </div>
  )
}
