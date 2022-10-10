import React, {useEffect,useState}  from "react";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import "../Tab.css"
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { Link, useLocation,useNavigate } from "react-router-dom";
import {getEstate} from "../redux/apiCalls";
export default function Tab() {
  const navigate = useNavigate();
  const [product,setProduct] = useState([]);
  const dispatch = useDispatch(); 
  const userProducts = useSelector((state) => state.product.cribs);
  // let aa = userProducts;
  const ab = userProducts.map((product)=> {
    return product
  })
  // console.log(ab)
  // setProduct(ab);
  // console.log(product)
  // console.log(aa);

   
  const Body = ()=>{ 
    useEffect(() => {
      getEstate(dispatch);   

  }, [dispatch]);
  
    return (
      <>
      <div className="container-fluid  big">
       <div className="flame ">
       <h2 className="mt-5">
            How Cribstock works
          </h2>
          <p className="mt-3 ">When you successfully invest into a property, you’ll earn a daily interest tied to the appreciation of the <br/> property.You’ll also earn rent from tenants 
            who use the property.</p>
        </div>
        {/* begin of three row */}
  
      <main className="container  mt-5 anima ">
        <div  className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card hee">
            <div className="">
               <div className="pty"> <img src="/p2.png" alt="" /></div>
            </div>
            <div className="card-body "> 
               <div  className="ht card-title">  <h4>Create free account</h4></div>
                <main className="main">
                <p className="listMe ">
            Create an account for free,
             and you'll get a free wallet and a free bank account to fund it.
            </p>
            <p className="listMe">
            Set up a secret 
            wallet pin or turn on your wallet.
            </p>
            <p className="listMe">
            The fund wallet button must be tapped 
            to see your specific account number.
            </p>
            <p className="listMe ">
            To successfully fund your wallet, send Naira
             to the specified account number.
            </p>
                </main>
            </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ">
          <div className="card hee">
            <div className="">
                <div className="pty"> <img src="/p2.png" alt="" /></div>
            </div>
            <div className="card-body "> 
               <div  className="ht  card-title">  <h4>Create free account</h4></div>
             <main className="main">
             <p className="listMe">
            Create an account for free,
             and you'll get a free wallet and a free bank account to fund it.
            </p>
            <p className="listMe">
            Set up a secret 
            wallet pin or turn on your wallet.
            </p>
            <p className="listMe">
            The fund wallet button must be tapped 
            to see your specific account number.
            </p>
            <p className="listMe">
            To successfully fund your wallet, send Naira
             to the specified account number.
            </p>
             </main>
            </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4  ">
          <div className="card hee">
            <div className="">
                <div className="pty "> <img src="/p3.png" alt="" /></div>
            </div>
            <div className="card-body "> 
               <div  className="ht card-title">  <h4>Create free account</h4></div>
                <main className="main">
                <p className="listMe  ">
            Create an account for free,
             and you'll get a free wallet and a free bank account to fund it.
            </p>
            <p className="listMe">
            Set up a secret 
            wallet pin or turn on your wallet.
            </p>
            <p className="listMe">
            The fund wallet button must be tapped 
            to see your specific account number.
            </p>
            <p className="listMe">
            To successfully fund your wallet, send Naira
             to the specified account number.
            </p>
                </main>
            </div>
            </div>
          </div>
        </div>
      </main>
        {/* another big div for money */}
        <section className="container-fluid money ">
                  <content className="new">
                    <img src="/undraw.png" alt=""/>
                  </content>
                <main className="old ">
                    <h6 className="mt-5 pt-5">Put Your money to work.</h6>
                    <p >
                    You can make any amount of investment in the Crobstock right now. 
                    Start investing in your preferred property, other African businesses, mutual funds, or global fixed income securities.
                    </p>
                    <div className="mt-3 obj">
                      <input type="email" placeholder="Email" className="email"/>
                      <button className="bu1">Start investing</button>
                    </div>
                  </main>
                </section>
                   {/* End */}
                   <section className="container money2 mt-5">
                                <main className="old1 ">
                    <h5 className="mt-5 pt-5 pb-3">Start building wealth in 5 minutes</h5>
                    <content className="container">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 kk">
                           <h4>Create an account</h4>
                           <h6>Sign up for an account with your name,<br/> email and phone number.
                           </h6>
                        </div>
                        <div className="col-lg-12 col-md-12  mt-4 kk">
                           <h4>Invest in a property</h4>
                           <h6>Using your debit card, bank account,<br/> USSD, QR Code, setup your first investment.


                           </h6>
                        </div>
                        <div className="col-lg-12 col-md-12 mt-4 kk">
                           <h4>Watch your money grow</h4>
                           <h6>Sit back, relax & let your money work for <br/> you all day, everyday.
                           </h6>
                        </div>
                         </div>
                    </content>
                  </main>
                  <content className="new1">
                    <img src="/phone2.png" alt="" className="img5"/>
                  </content>
                </section>  
                <Footer/>
                  {/* another section */}
                  {/* <section className="container-fluid qq">
                                <content className="row">
                                  <main className="col-12 col-md-6 col-lg-6 bg-success yyy">
                                    <h2>Stay up to date</h2>
                                    <p>Get all updates, new stock alert, 
                                      trading session alert and summary right
                                       to your inbox! Sign up here so you don't miss a single newsletter.
                                        </p>
                                  </main>
                                  <main className="col-12 col-md-6 col-lg-6 bg-primary yyy">
                                        <input type="email" src="" placeholder="Email"/>    
                                        <button>Send</button>     
                                 </main>
                                </content>
                             </section> */}

  
      
                   </div>
                            
      </>
    )
  }

  return (
    <>
    <div className="container-fluid  mt-4 justify-content-center cont">
    <Table responsive>
      <thead className="head">
        <tr>
          <th>Stock   <FontAwesomeIcon icon={faExclamationCircle} size="xs"  /> </th>
          <th>Price  <FontAwesomeIcon icon={faExclamationCircle} size="xs"  /></th>
          <th>Market Cap  <FontAwesomeIcon icon={faExclamationCircle} size="xs"  /></th>
          <th>30d  <FontAwesomeIcon icon={faExclamationCircle} size="xs"  /></th>
          <th>1y  <FontAwesomeIcon icon={faExclamationCircle} size="xs"  /></th>
          <th>Volume(24hrs)  <FontAwesomeIcon icon={faExclamationCircle} size="xs"  /></th>
          <th>Available supply  <FontAwesomeIcon icon={faExclamationCircle} size="xs"  /></th>
          <th hidden> fgoo</th>
        </tr>
      </thead>
      <tbody>
        {ab.map((person) => {
          return (
            <tr>
            <td>
            <div className="div1" key={person._id}>
              <figure className="figure"> <img src={person.cloudinary_id_img[0].secure_url} alt="img"  width="40px" height="40px" className="magic"/>
                 </figure>
                    <h6 id="hqq">{person.name}</h6>
                    <p id="pqq">{person.location.substring(0,20)}...</p>
             </div>
  
                 </td>
            <td className="pt-4">#{person.price}</td>
            <td className="pt-4">#{person.market_price}</td>
            <td className="pt-4">{person.days}%</td>
            <td className="pt-4">{person.year}%</td>
            <td className="pt-4">#{person.volume}</td>
            <td className="pt-4">{person.available_supply}</td>
            <td>
            <button className="but1 mt-2" onClick={()=>{
                   navigate(`/Graph/${person._id}`)
                  }}>Invest
            </button>
             </td>
          </tr>
          )
        })}
      
           
      </tbody>
    </Table>

    </div>
    <div className="container-fluid mdd ">
      <button id="btt"
      onClick={() => {
        navigate(`/signup`)
      }}
      >Explore stocks 
      <FontAwesomeIcon icon={faArrowRight} id="arrow"/>
      </button>
    </div>
    <Body/>
    {/* <Footer/> */}
          </>
  )
}
