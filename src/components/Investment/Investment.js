import React from "react";
import "./Investment.css";
import Sidebar from "../Sidebar/Sidebar";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle,faArrowRight} from '@fortawesome/free-solid-svg-icons';



export default function Investment () {
    return (
        <>
        <main className="App4">
            <section className="AppGlass4">
                <Sidebar/>
                <div className="list4">
                <div className="container-fluid  mt-5 pt-5 justify-content-center cont">
                  <h5>Stocks</h5>
        <Table responsive className="mt-3">
      <thead className="head ">
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
        <tr>
          <td>
          <div className="div1">
            <figure className="figure"> <img src="/house1.jpg" alt="" width="40px" height="40px" className="magic"/>
               </figure>
                  <h6 id="h">HKLEY</h6>
                  <p id="p">Hockley millennial tower.</p>
           </div>

               </td>
          <td className="pt-4">#11,937.65</td>
          <td className="pt-4">#59,688,246.47</td>
          <td className="pt-4">27.70%</td>
          <td className="pt-4">90.80%</td>
          <td className="pt-4">#30,888,999.67</td>
          <td className="pt-4">2497</td>
          <td>
            <button className="but1 mt-2">Invest</button>
          </td>
        </tr>
        <tr>
        <td>
          <div className="div1">
            <figure className="figure"> <img src="/house1.jpg" alt="" width="40px" height="40px" className="magic"/>
               </figure>
                  <h6 id="h">HKLEY</h6>
                  <p id="p">Hockley millennial tower.</p>
           </div>
               </td>

          <td className="pt-4">#11,937.65</td>
          <td className="pt-4">#59,688,246.47</td>
          <td className="pt-4">27.70%</td>
          <td className="pt-4">90.80%</td>
          <td className="pt-4">#30,888,999.67</td>
          <td className="pt-4 pl-5">2497</td> 
          <td>
            <button className="but1 mt-2">Invest</button>
          </td>
             </tr>
        <tr>
        <td>
          <div className="div1">
            <figure className="figure"> <img src="/house1.jpg" alt="" width="40px" height="40px" className="magic"/>
               </figure>
                  <h6 id="h">HKLEY</h6>
                  <p id="p">Hockley millennial tower.</p>
           </div>
               </td>
          <td className="pt-4">#11,937.65</td>
          <td className="pt-4">#59,688,246.47</td>
          <td className="pt-4">27.70%</td>
          <td className="pt-4">90.80%</td>
          <td className="pt-4">#30,888,999.67</td>
          <td className="pt-4">2497</td>
          <td>
            <button className="but1 mt-2">Invest</button>
          </td>
            </tr>    
      </tbody>
    </Table>
      <span className="d-flex mt-4 text-center justify-content-center ">
      <button className="btn fff">Load more</button>

      </span>
    </div>

                </div>
            </section>
        </main>
        </>
    )
}