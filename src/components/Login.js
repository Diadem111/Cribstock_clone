import React from 'react';
import "../Login.css";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
import Signup from './Signup';
import Header from './Header';


export default function Login() {
   const Card = () => {
          return (
            <>
             <main className='container contain1'>
       <div className='row'>
         <div className='container mx-auto mt-5 p-0 cardee'>
            <h1 className='text-center mt-5'>Login to your account</h1>
            <p className='text-center'>Enter your credentials below to continue</p>
            <Form className=' form1 mx-auto'>
             <div className='flex flex-col space-y-4 mt-12'>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label> Username or email address</Form.Label>
                  <Form.Control  className="form-control-lg" type="email" />
                   <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                   </Form.Text>
              </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" className="form-control-lg" />
      </Form.Group>
             </div>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <p className='float-end '>
                    <Link to="/signup" className='edd'>
                        Forget password?
                    </Link>
                  </p>
              </Form.Group>
    <div className='container mx-auto d-flex flex-col'>
    <button  type="submit" className='btn1 mt-3 mx-auto'>
        Login
      </button>
    </div>
    </Form>

         </div>
       </div>
    </main>

            </>
          )
   }
  return (
    <>
       <Header/>
       <Card/> 
       {/* message side */}
    <div id="message">
    <FontAwesomeIcon icon={faMessage} size="lg" color="white"  id="icon" />
    {/* <FontAwesomeIcon icon="fa-solid fa-message-question" color="white" /> */}
    </div>
       </>
  )
}
