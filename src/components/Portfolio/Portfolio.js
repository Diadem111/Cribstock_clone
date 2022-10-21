import React, {useState,useRef,useEffect} from 'react';
import "./Portfolio.css";
import Sidebar from '../Sidebar/Sidebar';
import {AiOutlineExclamationCircle} from "react-icons/ai";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useDispatch,useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Dashnav from '../DashNav/Dashnav';
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {BiMoney}  from "react-icons/bi";
import {AiOutlineArrowUp}  from "react-icons/ai";
import {MdCompareArrows}  from "react-icons/md";
import {MdArrowDownward}  from "react-icons/md";
import {BsCreditCard2BackFill}  from "react-icons/bs";
import {TbRadar}  from "react-icons/tb";
import Button from 'react-bootstrap/Button';
import {BsCartXFill} from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import axios from "axios";
import {addProductCart} from "../../redux/cartRedux";
export default function Portfolio() {
  const [document,setDocument] = useState([]);
  const [filter, setfilter] = useState(document);
  const [error,setError] = useState(null);
  const dispatch = useDispatch();


  const url = "http://localhost:4000/user/getdoc/";

  let currentUser = useSelector((state) => state.users.currentuser);
  console.log(currentUser);
  let data = currentUser;
    
  // getting d cart 
  let cartInfo = useSelector((state) => state.cart);
  console.log(cartInfo);
  let annual = cartInfo;
  // useEffect
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.user);
      if(res.data){
        console.log(res.data);
        setDocument(res.data?.user);
        console.log(document);
        let productArray = []
          res.data.forEach((doc)=>{
          productArray.push(doc);
        })
      }  
    }).catch((err) => {
      setError(err.message);
    })
  }, [])

  //  modal section
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // second modal
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // third modal
  const [visible, setVisible] = useState(false);
  const handleVisible = () => setVisible(false);
  const handleHidden = () => setVisible(true);

  // fourth modal
  const [fact, setFact] = useState(false);
  const handleFact = () => setFact(false);
  const handleFact1 = () => setFact(true);

// cart modal
const [cart,setCart] = useState(false);
const handleCart = () => setCart(false);
const handleCartShow = () => setCart(true)
  // for value of option
  const [addrtype, setAddrtype] = useState(document);
  // console.log(addrtype);
  // console.log(document);
  var specificValuesFromArray = document.map(obj => obj.name);
    // console.log(specificValuesFromArray);
    // const [addvalue,setAddvalue] = useState(specificValuesFromArray);
    // console.log(addvalue);
    const Add = specificValuesFromArray.map(Add => Add);

   const [size,setSize] = useState("HKLEY");
   console.log(size);
   const [pricev,setPricev] = useState("");
   console.log(pricev);
  //  const [product,setProduct] = useState({});
  //  console.log(product);

    // const handleAddTypeChange = (e) => {
    //   // console.clear();
    // e.preventDefault();
    //   // console.log(( specificValuesFromArray[e.target.value]));
    //   SetActive( specificValuesFromArray[e.target.value]);
    // }

  // const  [active,SetActive] = useState("HKLEY");

  var sameThing = document?.find(obj => obj.name == size);
  console.log(sameThing);
  let price = sameThing?.price;
  console.log(price);
  const [pricevalue,setPricevalue] = useState(price);
  const [quantity,setQuantity] = useState(1);

  // The simplest option is to remove all commas: 
  const num =parseFloat(price?.replace(/,/g, ''),10) ;
  console.log(num);
  let totalPrice = quantity * num;
  console.log(totalPrice);
  // if (!fm) return;

  

  const FormData = () => {
    // e.preventDefault();
    
    const priceData = {...sameThing,quantity,price,totalPrice};
    console.log(priceData);
    dispatch(addProductCart(priceData));
   }
 

// for button
const [click,setClick] = useState(false);
const [optclick,setOptclick] = useState(false);
// const handleClick = () => setClick(false);
const handleClick1 = () =>{
  setClick(true);
  if(optclick == true) {
    setOptclick(false)
  }
  // setOnForclick(false);
}


const handleForClick = () => {
  setOptclick(true);
  if(click == true) {
    setClick(false);
  }
  // setClick(false);
}
function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)} className="bg-none border border-primary fw-bold text-dark">
        what is margin ?
      </Button>
      <Overlay target={target.current} show={show} placement="bottom" className="bg-none">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Margin is the difference in the market value of this stock and your buying or selling price 
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}


// modal second
// const handleAddTypeChange = (e) => {
//   // console.clear();
  // console.log((addrtype[e.target.value]));
//   SetActive(addrtype[e.target.value]);
// }     
               
              const HandleBuy = () => { 
                    //  setShow(true);
                          return (
                                <section className={fact ? `mt-5`:""}>
                                  {/* <span variant="primary" onClick={handleFact1} className="d-flex ms-5">
                                    <AiOutlineArrowUp/>
                                    <button className='wee p-2'>Buy/Sell</button>
                                  </span> */}
                                  <Modal show={fact} onHide={handleFact} className="bd-highlight ">
                                      <Modal.Header closeButton>
                                          <Modal.Title className="p-3 fw-bold">Place buy order</Modal.Title>
                                      </Modal.Header>
                                <Modal.Body className="ms-5 bd-highlight dola ">
                                 <main>
                                  <div>
                                 <div className='mb-3'>
                                
                                <label for="FirstnameInput" className="form-label fw-bold">
                                    Stock
                                </label>

                                <select className="form-control" name="active" id="active"
                                        onChange={(e)=>{setSize(e.target.value);setPricev(e.target.key)}}>
                                          {
                                            document && document?.map((active,key) => (
                                              <option value={active.name} key={active.price}>{active.name}</option>
                                           )
                                            )
                                          }
                                          
                                        </select>
                                
                           </div>
                           <div className='mb-3'>
                                <label for="lastnameInput" className="form-label fw-bold">
                                  Quantity
                                </label>
                                <input type="number" 
                               className="form-control "
                               value={quantity}
                                 onChange={(e)=> setQuantity(e.target.value) }/>
                               
                             </div>
                             <div className='mb-3'>
                                <label for="emailInput" className="form-label fw-bold">
                                    Price per stock
                                </label>
                                <input type="text"  className=  "form-control "
                                name='price' value={price} readOnly />
                             </div>
                             <div className='mt-2 row d-flex'>
                              <main className='col-12 d-flex'>
                                
                              <p className='text-muted'>Margin:-#0.00</p>
                              <div className=" d-flex ms-5 ps-5 d-flex float-end float-right justify-content-end" >
                                <Example/>
                                {/* <h1>hello world</h1> */}
                              </div>
                              </main>
                             </div>
                             <button  className="btn-success rounded border-1 w-50 mt-5 "  onClick={()=>{FormData();handleFact(); handleCartShow()}}>Continue</button>
                             </div>
                                 </main>
                                </Modal.Body>
                                
                                    </Modal>
                                    <CartModal/>
                                  </section>
                                  )
                                }
                            

                                // cart modal start here
                      const CartModal= () => {
                        return (
                          <>
                            <section className={cart ? `mt-5`:""}>
                                  {/* <span variant="primary" onClick={handleFact1} className="d-flex ms-5">
                                    <AiOutlineArrowUp/>
                                    <button className='wee p-2'>Buy/Sell</button>
                                  </span> */}
                                  <Modal show={cart} onHide={handleCart} className="bd-highlight ">
                                      <Modal.Header closeButton>
                                          <Modal.Title className="p-3 fw-bold"> 
                                          <div className="d-flex flex-row"> 
                                          <span><AiOutlineArrowLeft className='mt-2' onClick={()=>{handleCart();handleFact1()}}/></span>
                                          <span className='ms-4'>Buy order summary</span>
                                          </div>
                                         </Modal.Title>
                                      </Modal.Header>
                                <Modal.Body className="ms-5 bd-highlight dola ">
                                <main>
                                  <div className='d-flex flex-row  mb-4'>
                                    <span className="text-muted fw-bold">Property </span>
                                    <span className='float-end ms-4 ps-4 fw-bold float-right'>{annual.cartProduct.name}</span>
                                  </div>
                                  <div className='d-flex  flex-row mb-4'>
                                    <span className="text-muted fw-bold">Buy Price </span>
                                    <span className='float-end ms-4 ps-4 fw-bold float-right'>#{annual.cartProduct.price}</span>
                                  </div>
                                  <div className='d-flex flex-row mb-4'>
                                    <span className="text-muted fw-bold">Stock quantity </span>
                                    <span className='float-end ms-4 ps-4 fw-bold float-right'>{annual.quantity}</span>
                                  </div>
                                  <div className='d-flex flex-row mb-4'>
                                    <span className="text-muted fw-bold">Total amount </span>
                                    <span className='float-end ms-4 ps-4 fw-bold float-right' style={{marginLeft:"20px"}}>#{annual.numPrice}</span>
                                  </div>
                                  <button className="btn text-white btn-rounded bg-success">Place buy order</button>
                                </main>

                                </Modal.Body>
                                
                                    </Modal>
                                  </section>
                                  </>
                                )
                              }
  return (
     <section className='App1'>
      <div className='AppGlass1'>
        <Sidebar userData={data}/>
        <div className=' list '>
          {/* <Dashnav/> */}
            <main className='row mt-5  ms-lg-5 mt-3 box '>
                    <div className='col-12 col-lg-4 col-md-6  ms-lg-5 d-flex '>
                      <div className='card p-4 mgg'>
                          <span className='d-flex'>
                            <p>Current Balance</p>
                            <span className='mb-2 ms-2'>
                              <AiOutlineEyeInvisible/>   
                             </span>
                          </span>
                          <span className='d-flex'>
                            
                              <h1 className='mt-lg-0 mt-2'>#{data.currentBalance}</h1>
                              <button className=' ms-lg-3 ms-4 mb-1  btntwo'>{data.currentBalance}%</button>
                          </span >
                          <h5 className='greencolor'>#{data.currentBalance} (30d)</h5>
                      </div>
                    </div>
                    {/* second card */}
                    <div className='col-12 col-lg-4 col-md-4  ms-lg-5 ms-1 d-flex  box2'>
                      <div className='card mt-5 pt-4 mgt'>
                          <span className='d-flex p-3'>

                            {/* modal start here */}
                            <section className="mt-5">
                                 <span variant="primary" onClick={handleShow} className="d-flex ms-5">
                                   {/* <AiOutlineArrowUp/> */}
                                   <button className='wee p-2'>Buy/Sell</button>
                                 </span>
                                 <Modal show={show} onHide={handleClose} className="bd-highlight ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="p-3">Do you want to?</Modal.Title>
                                    </Modal.Header>
                               <Modal.Body className="ms-5 bd-highlight dola ">
                                 <div className="d-flex bd-highlight "onClick={()=>{handleClose(); handleFact1();}} >
                                    <TbRadar size={42} color="green"/>
                                    <span className="d-flex flex-column ms-3">
                                        <h2 className="fw-bolder" >Buy Stock</h2>
                                        <p className="text-muted">Browse and invest in your various properties</p>
                                    </span>
                                 </div>
                               </Modal.Body>
                               <Modal.Body className="ms-5 mb-5 mt-3 bd-highlight dola ">
                                 <div className="d-flex bd-highlight ">
                                    <BsCartXFill  size={42} color="green"/>
                                    <span className="d-flex flex-column ms-3">
                                        <h2 className="fw-bolder">Sell Stocks</h2>
                                        <p className="text-muted">Sell your already owned stocks</p>
                                    </span>
                                 </div>
                               </Modal.Body>
                                  </Modal>
                                 <HandleBuy />
                                 </section>
                           
                           {/* second modal start here */}
                           {/* modal start here */}
                           <section className="mt-5">
                                 <span variant="primary" onClick={handleShow1} className="d-flex ms-5">
                                   {/* <AiOutlineArrowUp/> */}
                                   <button className=' btnone p-2'>My Orders</button>
                                 </span>
                                 <Modal show={show1} onHide={handleClose1} className="bd-highlight ">
                                    <Modal.Header closeButton>
                                        <Modal.Title className="p-3">My Orders</Modal.Title>
                                    </Modal.Header>
                               <Modal.Body className="ms-5 bd-highlight dola ">
                                 <div className="d-flex bd-highlight ">
                                    {/* <BsBank size={42}/> */}
                                    <span className="d-flex flex-column ms-3">
                                      <div className="d-flex">
                                        <button className='text-gray fw-bolder border border-success bg-success rounded p-2' onClick={handleClick1}>
                                          sell orders <Badge bg="secondary">(o)</Badge></button>
                                        <button className='ms-3 text-success fw-bolder' onClick={handleForClick}>buy orders <Badge bg="secondary">(0)</Badge></button>
                                      </div>
                                        {/* <h2>NGN Mobile Bank Transfer</h2> */}
                                        {/* <p className="text-muted">Timeline:0-1 hour</p> */}
                                    </span>
                                 </div>
                               </Modal.Body>
                               <Modal.Body className="ms-5 mb-5 mt-3 bd-highlight dola ">
                                 <div className=" bd-highlight ">
                                    {/* <BsCreditCard2BackFill  /> */}
                                    <section className=' '>
                                    {click && <div className='col-12 col-lg-6 col-md-6  ' style={{height:"200px"}}>
                                    <div className=' mt-5 pt-5 text-center mx-auto'>
                                      <span className='mt-1 mx-auto'>
                                      <AiOutlineExclamationCircle className='mx-auto ms-5  mt-1' color='green' size={42} style={{position:"relative",left:"130px"}}/>
                                      </span>
                                      <p className='mt-3 fw-bold text-success mx-auto ms-5' style={{position:"relative",left:"70px"}}>
                                        You dont have any sell order</p>
                                      {/* <p className='ms-2 mt-2'>You have not made any transactions on your wallet yet
                                      </p>         */}
                                  </div>

                              </div>}
                              {optclick &&
                              <div className='col-12 col-lg-6 col-md-6  ' style={{height:"200px"}}>
                              <div className=' mt-5 pt-5 text-center mx-auto'>
                                <span className='mt-1 mx-auto'>
                                <AiOutlineExclamationCircle className='mx-auto ms-5  mt-1' color='green' size={42} style={{position:"relative",left:"130px"}}/>
                                </span>
                                <p className='mt-3 fw-bold text-success mx-auto ms-5' style={{position:"relative",left:"70px"}}>
                                  You dont have any buy order</p>
                                {/* <p className='ms-2 mt-2'>You have not made any transactions on your wallet yet
                                </p>         */}
                            </div>

                           </div>
                              }
                                </section>
                                 </div>
                               </Modal.Body>
                                  </Modal>
                                 </section>
                          </span>
              
                      </div>
                    </div>
             </main>
              {/* table section */}
                <div className='container mt-5 ms-lg-5 newn'>
                    <section className='row '>
                      <div className='col-12 mtta mt-3'>
                       <span className='d-flex'>
                        <h5 className='mt-2'>Your Assets</h5>
                           <button className='ms-4  btnone p-2'>View all </button>
                       </span>
                       <div className='d-flex mt-3'>
                        <span className='mt-1'>
                        <AiOutlineExclamationCircle className='ms-2 mt-1' color='gray'/>
                        </span>
                        <p className='ms-2 mt-2'>You have not made any transactions on your wallet yet
                        </p>        
               </div>

                      </div>
                    </section>
                </div>
        </div>
        </div>

     </section>    
  )
}
