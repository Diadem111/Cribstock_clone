import React ,{useEffect,useState,useRef}from 'react';
import {addProductCart} from "../redux/cartRedux";
import { useDispatch,useSelector } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';



export const Modalpart = ({data},{info}) => {
  const dispatch = useDispatch();
    // if(!data) return;
    // if(!info) return;
    let fact = data;
    let document = info;
    // const [fact,setFact] = useState(data);
    // const [document,setDocument] = useState(info);
    console.log(fact);
    console.log(document);
    
    // fourth modal
    const handleFact = () => fact(false);
  
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

  // if (!fm) return;

  

  const FormData = (e) => {
    e.preventDefault();
    const priceData = {...sameThing,quantity,price};
    console.log(priceData);
    dispatch(addProductCart(priceData));
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
             <button  className="btn-success rounded border-1 w-50 mt-5 " onClick={FormData}>Continue</button>
             </div>
                 </main>
                </Modal.Body>
                
                    </Modal>
                  </section>
                  )
                }

  

