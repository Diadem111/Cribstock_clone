import React, {useState} from "react";
import Sidebar from "../../Sidebar/Sidebar";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {BsFillHouseFill} from "react-icons/bs";
import {BsDot} from "react-icons/bs";
import {BsDash} from "react-icons/bs";
import {BsCurrencyDollar} from "react-icons/bs";
import Table from 'react-bootstrap/Table';

import "./Product.css";
import { Container } from "@mui/system";



export default function Product () {
    const [show, setShow] = useState(false);
    const [known, setKnown] = useState(false);
    return (
        <>
        <section className="App6">
            <main className="AppGlass6">
                <Sidebar/>
                <section className="list6">
                    <section className="ggt">
                        <span className="d-flex flex-row mt-5 ms-5">
                            <AiOutlineArrowLeft className="mt-2" size={32}/>
                            <h1 className="fw-bolder mt-1 ms-2">HKLEY</h1>
                        </span>
                        <p className="ms-5 ">Hockley millennial town, eko akete, abijo, lagos, Nigeria</p>
                        <main className=" d-flex flex-row">
                            <button className="aff ms-5">Buy</button>
                            <button className="aff1 ms-3">Sell</button>
                            <button className="aff2">
                                <AiOutlinePlus size={25} className="ms-3 mt-2"/>
                                <p className="ms-lg-2 ms-2 mt-1 pp">Place sell order</p>
                            </button>
                        </main>
                        
                     <section>
                        <div className="row ms-3 g-3 mt-3">
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* scond card */}
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* third card */}
                            <main className="col-12 col-lg-4 col-md-12 ">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1 ">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* end of first row */}
                        </div>
                        {/* second row */}
                        <div className="row ms-3 g-3 mt-3">
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* scond card */}
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* third card */}
                            <main className="col-12 col-lg-4 col-md-12 ">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1 ">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* end of first row */}
                        </div>
                        {/* third row */}
                        <div className="row ms-3 g-3 mt-3">
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* scond card */}
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* third card */}
                            <main className="col-12 col-lg-4 col-md-12 ">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1 ">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* end of first row */}
                        </div>
                        {/* third row */}
                        <div className="row ms-3 g-3 mt-3">
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* scond card */}
                            <main className="col-12 col-lg-4 col-md-12">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* third card */}
                            <main className="col-12 col-lg-4 col-md-12 ">
                                <div className="card muy">
                                    <div className="d-flex flex-row mt-4 ms-4" >
                                       <BsFillHouseFill className="mt-1"/>
                                       <h4 className="ms-3">#12,047.96</h4>
                                       <small className="ms-1 mt-1">per unit</small> 
                                    </div>
                                    <div  className="d-flex flex-row mt-1 ">
                                        <h5 className="ms-4">HKLEY</h5>
                                        <BsDot className="mt-1"/>
                                        <p>Quantity: 1</p>
                                    </div>
                                    <div className="d-flex flex-row ms-4">
                                        <h5>Margin:</h5>
                                        <BsDash className="mt-1" color="black"/>
                                        <h5>#0.00</h5>
                                        <small className="ms-1 mt-1">per unit</small>
                                    </div>
                                    <div className="d-flex flex-row ms-3">
                                        <div className="ddw">
                                            <small className="text-center ms-2">n</small>
                                        </div>
                                        <p className="d-flex">
                                            <BsCurrencyDollar className="mt-1"/>
                                            <p>naomivwaire</p>
                                        </p>
                                        <button className="ffd2 mx-auto mt-2">Buy now</button>
                                    </div>
                                </div>
                            </main>
                            {/* end of first row */}
                        </div>
                     </section>
                    </section>
                </section>
            </main>
            
        </section>
        </>
    )
}