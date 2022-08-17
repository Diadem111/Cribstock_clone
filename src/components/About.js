import React from 'react';
import "../About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';


export default function About() {
  return (
    <>
       <main className=' container-fluid cont1'>
            <div className=' row hi1 '>
                <div className=' col-lg-6 col-md-8 col-8  mx-auto  '>
                    <h1 className='text-muted text-center'>About us</h1>
                    <h2 className='text-center mt-5'>
                    Over 250 million people in Africa have a difficult 
                    challenge that Jabstock is resolving. In Africa,
                     the median age for home ownership is 45. More young individuals can own real 
                    estate and gain the same advantages as a landlord through fractional ownership of buildings.
                    </h2>
                </div>
            </div>
        {/* second row start here */}
              <div className='row '>
                <div className='col-lg-4 col-md-12 col-sm-4  mx-auto mt-5 imgcontain'>
                    <img src='/cont.png'  width="400"
                     height="300"
                       className="d-inline-block " alt=''/>
                </div>
                <div className='col-lg-5 col-md-12 col-8   mt-5 smallcontain'>
                   <h4 className='p-lg-5 -sm-2 sm-text-center '>
                   Young professionals can join the Jabstock community and invest
                    in real estate as a way to build wealth and contribute
                     to the development of Nigeria's infrastructure. 
                     Nigeria would be one of the most populous nations on earth by 2050, and we predict 
                   that real estate will continue to be one of the most sought-after amenities, just as it is now.
                   </h4>
                </div>
              </div>
        {/* third row start here */}
              <div className='row '>
                <div className='col-lg-5 col-8 col-md-12    mt-5 smallcontain1'>
                <h4 className='p-lg-5 text-center'>
                   As a result of the simplification of the learning, research,
                    verification, documentation, acquisition, earning, 
                   management, and liquidation processes, more young
                    people of all sexes and races will own real estate than ever before.
                   </h4>
                   </div>
                <div className=' col-lg-4 col-md-8 col-sm-8 mx-auto mt-5 imgcontain1'>
                <img src='/max2.png'  width="400"
                     height="300"
                       className="d-inline-block " alt=''/>

                 
                </div>
              </div>
            
      
        {/* fourth row */}
        <section className='container-fluid mt-5'>
              <div className='row '>
                <div className='col-lg-4 col-md-8 col-sm-8 mx-auto mt-5 imgcontain kww'>
                    <img src='/cont.png'  width="400"
                     height="300"
                       className="d-inline-block " alt=''/>
                </div>
                <div className='col-lg-5 col-md-12 col-8 mx-auto h-100 mt-5 smallcontain an1 '>
                   <h4 className=' p-5'>
                   Saying that we are questioning the status 
                   quo would be counterproductive to our purpose.
                    We are creating the ownership of the future.
                   </h4>
                </div>
              </div>
        </section>
        
        {/* Founder section */}
        <section className='container-fluid mt-5 '>
          <h1 className='text-center fw-bolder '>Meet our Founders</h1>
              <div className='row '>
                <div className='col-lg-4 col-md-6 col-12  mt-5'>
                    <div className='card card0' >
                      <div className='imgdiv position-relative mt-5'>
                        <img src='/skin1.webp' alt='CEO' className='d-inline-block float-middle' style={{width:"100%",height:"100%"}}/>
                      </div>
                      <div className='card-body'>
                         <h3 className='card-title text-center'>Omodolapo</h3>
                         <p className='card-text text-center text-muted'> Chief Exectuive officer</p>
                      </div>
                    </div>
                   </div>
                    {/* end of card1 */}
                   <div className='col-lg-4 col-md-6 col-12 mt-5'>
                    <div className='card card1' >
                      <div className='imgdiv position-relative mt-5' >
                        <img src='/nene.jpg' alt='CEO' className='d-inline-block float-middle' style={{width:"100%",height:"100%"}}/>
                      </div>
                      <div className='card-body'>
                         <h3 className='card-title text-center '>Omodolapo</h3>
                         <p className='card-text text-center text-muted'> Chief Exectuive officer</p>
                      </div>
                    </div>
                   </div>
                    {/* end of card2 */}
                    <div className='col-lg-4 col-md-6 col-12  mt-5'>
                    <div className='card card2 '>
                      <div className='imgdiv position-relative mt-5'>
                        <img src='/fine.jpg' alt='CEO' className='d-inline-block' style={{width:"100%",height:"100%"}}/>
                      </div>
                      <div className='card-body'>
                         <h3 className='card-title text-center '>Omodolapo</h3>
                         <p className='card-text text-center text-muted'>Developer</p>
                      </div>
                    </div>
                   </div>
              </div>
        </section>


       </main>
       {/* message side */}
    <div id="message">
    <FontAwesomeIcon icon={faMessage} size="lg" color="white"  id="icon" />
    {/* <FontAwesomeIcon icon="fa-solid fa-message-question" color="white" /> */}
    </div>
    </>
  )
}
