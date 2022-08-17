import React from 'react';
import "../Fq.css";
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';




export default function Fq() {
  return (
    <>
    <section className='container-fluid'>
        <main className='row bgrow'>
            <div className='col-12'>
                 <h1 className='text-start mt-5 pt-5 ms-5 '>Frequently asked questions

                 </h1>
            </div>
        </main>
        <section className='container mt-5 '>
        <Accordion defaultActiveKey="0" flush   >
          <Accordion.Item eventKey="0" className='mt-3 shape'>
        <Accordion.Header className=''>How do i earn from owning stock?</Accordion.Header>
        <Accordion.Body>
          <p>You have multiple ways to earn;</p>
          <ul>
            <li className='text-muted'>Stocks of properties you own are meant 
                to yield rent which is payed out as dividend either monthly or quarterly depending on the property type.
             </li>
             <li className='text-muted'>Stocks are expected to appreciate simultaneously
                 with the overall property and you can hold for gains or sell at margin.

               </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='mt-3 shape'>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw dividends either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='mt-3 shape'>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw dividends either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className='mt-3 shape'>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw dividends either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className='mt-3 shape '>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw dividends either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5" className='mt-3 shape'>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw dividends either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6" className='mt-3 shape'>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw dividends either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7" className='mt-3 shape'>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw
         dividends either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" className='mt-3 shape'>
        <Accordion.Header>How can i withdraw earnings from overseas?</Accordion.Header>
        <Accordion.Body>
        <p className='text-muted'> There is a fast option to withdraw dividends 
        either in Naira to a Nigerian Bank account or crypto currency (coming soon)

          </p>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </section>
    </section>

    {/* message side */}
    <div id="message">
    <FontAwesomeIcon icon={faMessage} size="lg" color="white"  id="icon" />
    {/* <FontAwesomeIcon icon="fa-solid fa-message-question" color="white" /> */}
    </div>
    </>
  )
}
