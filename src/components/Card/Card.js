import React from 'react';
import "./Card.css";
import {AiOutlineExclamationCircle} from "react-icons/ai";
import BasicTable from '../Table/Table';


 
export default function Card() { 
  const Card1 = () => {
    return (
      <>
      <content className="container parentContainer">
      <div className="row ">
        <main className="col-12 col-md-6 col-lg-4">
          <div className="card ttt mt-4 mt-lg-0">
             <div className='d-flex mt-3 ms-4 '>
              <p>Portfolio balance</p>
              <AiOutlineExclamationCircle className='ms-2 mt-1'/>
              </div>
              <div className='ms-4'>
                <h4 >#0.00</h4>
                <button className='btn bg-muted mb-3'>view portfolio</button>
              </div>
          </div>
        </main>
        {/* second card  */}
        <main className="col-12 col-md-6 col-lg-4">
        <div className="card ttt  mt-4 mt-lg-0">
             <div className='d-flex mt-3 ms-4 '>
              <p>Wallet balance</p>
              <AiOutlineExclamationCircle className='ms-2 mt-1'/>
              </div>
              <div className='ms-4'>
                <h4 >#0.00</h4>
                <button className='btn bg-muted mb-3'>view wallet</button>
              </div>
          </div>
        </main>
        {/* third card */}
        <main className="col-12 col-md-6 col-lg-4">
        <div className="card ttt  mt-4 mt-lg-0">
             <div className='d-flex mt-3 ms-4 '>
              <p>Pending trade order</p>
              <AiOutlineExclamationCircle className='ms-2 mt-1'/>
              </div>
              <div className='ms-4'>
                <h4 >0</h4>
                <button className='btn bg-muted mb-3'>Trade</button>
              </div>
          </div>
        </main>
      </div>

    </content>

      </>
    )
  }
     return (
      <>
      <Card1/>
       <BasicTable/>
      </>
     )
 
}
