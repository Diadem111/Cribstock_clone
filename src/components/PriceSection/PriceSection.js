import React from 'react';
import {AiOutlineExclamationCircle} from "react-icons/ai";
import "./PriceSection.css";


export const PriceSection = ({data}) => {
    if (!data) return;
  return (
    <div>
         <section className="mt-lg-5 mt-5 pt-lg-0 pt-5 ms-2">
              <div className="row mt-lg-5 mt-5 pt-lg-0 pt-5 ms-2">
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Price</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">#{data.price}</p>
                  </div>
                </div>
                {/* end of first */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold">Market cap</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">#{data.market_price}</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> 30d</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-success fw-bolder">{data.days}%</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-4 col-lg-3">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> 1y</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-success fw-bolder">{data.year}%</p>
                  </div>
                </div>
                {/* end */}
              </div>
              {/* second row */}
              <div className="row mt-3 ms-2">
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Volume</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">#{data.volume}</p>
                    <p>0</p>
                  </div>
                </div>
                {/* end of first */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold">Available supply</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="fw-bolder">{data.available_supply}</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-lg-3 col-4">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Circulating supply</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-success fw-bolder">{data.Circulating_supply}</p>
                  </div>
                </div>
                {/* end */}
                <div className="col-4 col-lg-3">
                  <div className="">
                    <span className="d-flex flex-row">
                      <p className="fw-bold"> Average volume</p>
                      <p>
                        <AiOutlineExclamationCircle className='ms-3 '/>
                      </p>
                    </span>
                    <p className="text-danger fw-bolder">{data.Average_volume}</p>
                  </div>
                </div>
                {/* end */}
                <div className="row">
                  <h4 className="fw-bolder mt-3 ms-3">Location</h4>
                  <p className="text-muted ms-3">
                  {data.location}
                  </p>
                </div>
                {/* end */}
                <section>
                  <h4 className="fw-bolder ms-3 mt-2">Description</h4>
                    <div className=''>
                    {/* <NamesList/> */}
                    </div>
                  <ul className='forOrder'>{data?.description?.map(person => <li key={person}> {person} </li>)}</ul>
                  {/* {data.description.map((str,index) => {
                    console.log(str);
                    return (
                      <ul className="mt-4">
                      <li className='text-muted'>{str}</li>
                        </ul>
                    )
                   })};
                 */}
                  {/* <ul> */}
                    {/* console.log(fname) */}
                 {/* let aaa = {data.description.map((str,index)=> ({value:str, id:index+1}))}
                 console.log(aaa); */}
                    {/* {data.description.map((person)=>{
                    let aaw =  person.split('/r/n');
                      console.log(aaw);
                    })} */}
                    {/* <li className='text-muted'>Interior/furnishing in progress and should be ready by 20th August</li>
                    <li  className='text-muted mt-2'>A smart one bedroom penthouse + sitting room with automated home features</li>
                    <li  className='text-muted mt-2'>Bedroom area , a modern wardrobe ,open plan kitchen</li>
                    <li  className='text-muted mt-2'>High quality beddings & furniture</li>
                    <li  className='text-muted mt-2'>Fully finished kitchen area with a cooker, microwave, heat extractor, washing machine and smoke detectors</li>
                    <li  className='text-muted mt-2'>Fingerprint or card door access, doorbell & cameras</li>
                    <li  className='text-muted mt-2'>A car parking space</li>
                    <li  className='text-muted mt-2'>Good electricity and water supply</li>
                    <li  className='text-muted mt-2'>A personalized lounge area</li>
                    <li  className='text-muted mt-2'>Intended for short-let or Airbnb</li>
                    <li  className='text-muted mt-2'>Total worth includes; Base price, documentation, furnishing & interior remodeling , insurance, brokerage fees</li>
                  </ul> */}
                </section>
              </div>
            </section>
    </div>
  )
}
