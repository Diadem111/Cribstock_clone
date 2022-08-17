import React from 'react'
import "../Footer.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage,faHome,faSignOut,faSignIn,faCopyright} from '@fortawesome/free-solid-svg-icons';



export default function Footer() {
  return (
    <>
    <footer className='container-fluid gtt'>
      <section className='container bigcontainer semi'>
          <main className='row'>
            <div className='col-6 col-md-6 col-lg-3 cardrow'>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            <h5>Company</h5>
                        </div>
                        <div className=''>
                            <p>About us</p>
                            <p>Terms of use</p>
                            <p>Privacy policy</p>
                            <p>Disclaimer</p>
                            <p>Methodology</p>
                            <p>Careers <button className='btn  mx-2'>
                                <small>Coming soon</small>
                                </button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md-6 col-lg-3  cardrow'>
            <div className='cardd'>
                    <div className='cardd'>
                        <div className=''>
                            <h5>Products</h5>
                        </div>
                        <div className=''>
                            <p>Property Stocks</p>
                            <p>Free training</p>
                            <p>Portfolio tracker</p>
                            <p>Order Book <button className='btn mx-2'>
                                <small>Coming soon</small>
                                </button></p>
                            <p>World Brick Day <button className='btn mx-2' >
                                <small>Coming soon</small>
                                </button></p>
                            <p>Trading Sessions <button className='btn mx-2'>
                                <small>Coming soon</small>
                                </button></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md-6 col-lg-3  cardrow'>
            <div className=''>
                    <div className=''>
                        <div className=''>
                            <h5>Support</h5>
                        </div>
                        <div className=''>
                            <p>F&Q</p>
                            <p>Glossary</p>
                            <p>Help center</p>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md-6 col-lg-3 cardrow'>
            <div className=''>
                    <div className=''>
                        <div className=''>
                            <h5>Contact</h5>
                        </div>
                        <div className=''>
                            <p>dolwithney@gmail.com</p>
                            <p>09069458371</p>
                            <p>Mon-Fri 8:am-6pm</p>
                            </div>
                    </div>
                </div>
            </div>
          </main>
          <container>
             <content className="row">
                 <div className='col-lg-12 col-md-12 col-sm-12 tef'>
                      <ul >
                        <li >
                            <Link to="/"  className='link2'>
                            <FontAwesomeIcon icon={faHome} color="gray" />
                            </Link>
                        </li>
                        <li >
                            <Link to="/" className='link2'>
                            <FontAwesomeIcon icon={faSignIn} color="gray"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='link2'>
                            <FontAwesomeIcon icon={faSignOut} color="gray" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='link2'>
                            <FontAwesomeIcon icon={faMessage} color="gray" />
                            </Link>
                        </li>
                      </ul>
                 </div>
             </content>
             <div>
                <p>
                <Link to="/" className='link3'>
                              <p>
                                 <FontAwesomeIcon icon={faCopyright} color="gray" />
                                   <span className='px-1 bh'>  2022 Jadstock. All right reserved</span>       
                            </p>
                            </Link>
                </p>
                <p className='ddd'>Developer and design by Omodolapo</p>
             </div>
          </container>
      </section>
    </footer>
    </>
  )
}
