import React, {useState} from 'react'
import "../Signup.css"
import Layout from './Layout'
import Footer from './Footer'
// import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {useFormik} from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
import {basicSchema} from "../../src/components/schema/schema";
import {useSelector,useDispatch} from "react-redux";

import {sendUser} from ".././redux/apiCalls";
import { Link, useLocation,useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
   let url = "http://localhost:4000/user/signUp";

   let error = useSelector((state) => 
 state.users.error1
 )
console.log(error);
const [success,setSuccess] = useState("");
const [failed,setFailed] = useState("");

   const dispatch = useDispatch();
   const navigate = useNavigate();

   let error3 = useSelector((state) => state.users.error1 )
   // sumit function
   const onSubmit= (values,actions) => {
      // e.preventDefault();
      // let ss = values;
      console.log(values);
       let firstname = values.firstname;
       let lastname = values.lastname;
       let username = values.username;
       let email = values.email;
       let number = values.number;
       let password = values.password;
       let currentBalance = 0.00;
       let walletBalance = 0.00;
       let dd = {firstname,lastname,username,email,number,password,currentBalance,walletBalance};
       sendUser(dd,dispatch);
       if (error3 == false){
         setSuccess("congratulation! you have successfully signup");
         navigate("/login");
       }else if(error3 == true) {
         setFailed("Sorry!your registration failed.Try again");
       }
      //   axios.post(url,dd).then((res) => {
      //    console.log(res);
      //    if(res.data.status == false) {
      //       setFailed(res.data.message);
      //       actions.resetForm();
      //    }else{
      //       setSuccess(res.data.message);
      //       navigate("/login");
      //    }
      //   }).catch((err) => {
      //    setFailed(err.message);
      //    console.log(err.message)
      //   })
      
   }
      const Logup =() => {
         const {values,errors,handleBlur,isSubmitting,handleChange,handleSubmit,touched} = useFormik({
            initialValues:{
               firstname:"",
               lastname :"",
               username:"",
               email:"",
               confirmemail:"",
               number:"", 
               password:"",
               confirmPassword:"",
               acceptedTos:false,
            },
            validationSchema :basicSchema, 

            onSubmit,
           
         })
         
         // console.log(errors);   
        return (
            <>
            <section className='container-fluid contain'>
               {failed &&<div class="alert alert-danger alert-dismissible fade show" role="alert">
               <strong>{failed}</strong> 
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                 </div>

              }
              {success &&<div class="alert alert-primary alert-dismissible fade show" role="alert">
               <strong>{success}</strong> 
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                 </div>
              }

                <container className="row">
                   <main className='col-12 col-md-6 col-lg-6  fit'>
                          <container className="card buddy">
                           <div className='card-body body1'>
                              <h1 className='card-title t1'>
                                 Get your money to work
                              </h1>
                              <p>No stress,Zero hassle.</p>
                               <ul>
                                 <li>Get a realistic property</li>
                                 <li>Become a property owner</li>
                                 <li>View recurring transaction</li>
                                 <li>Make money at your comfort.</li>

                               </ul>
                           </div>
                          </container>
                   </main>
                   {/* form card */}
                   <main className='  col-12 col-md-6 col-lg-6 hei'>
                       <container className="card hee2">
                         <div className='card-body'>
                            <h3 className='card-title mt-4'>
                                Let's Invest into Real Estate Together
                            </h3>
                            {/* <p>
                                Please fill in all fields correctly
                            </p> */}
                         </div>
                          <form action="" onSubmit={handleSubmit} className="form1">
                           <div className='row mb-3'>
                                <div className='col'>
                                <label for="FirstnameInput" className="form-label">
                                    First name
                                </label>
                                <input type="text" 
                                onChange={handleChange} onBlur={handleBlur}
                                name='firstname' width="50px" 
                                className={errors.firstname && touched.firstname ?  "form-control is-invalid" : "form-control "}/>
                                {errors.firstname && touched.firstname &&
                                <div className='text-danger'>{errors.firstname}</div> }
                               </div>
                             <div className='col'>
                                <label for="lastnameInput" className="form-label">
                                    Last name
                                </label>
                                <input type="text" 
                               className={errors.lastname && touched.lastname ?  "form-control is-invalid" : "form-control "} 
                                onChange={handleChange} onBlur={handleBlur}
                                name='lastname' />
                                {errors.lastname && touched.lastname &&
                                 <div className='text-danger'>{errors.lastname}</div>}
                             </div>
                           </div>
                             <div className='mb-3'>
                                <label for="usernameInput" className="form-label">
                                    Username
                                </label>
                                <input type="text"  className={errors.username && touched.username ?  "form-control is-invalid" : "form-control "}
                                 onChange={handleChange} onBlur={handleBlur} name='username' />
                                 {errors.username && touched.username &&
                                 <div className='text-danger'>{errors.username}</div>
                                 }
                             </div>
                             <div className='mb-3'>
                                <label for="emailInput" className="form-label">
                                    Email
                                </label>
                                <input type="email"  className={errors.email  && touched.email ? "form-control is-invalid" : "form-control "}
                                 onChange={handleChange} onBlur={handleBlur}
                                name='email' />
                                {errors.email && touched.email &&
                                 <div className='text-danger'>{errors.email}</div>
                                }
                             </div>
                             <div className='mb-3'>
                                <label for="confirmemailInput" className="form-label">
                                   Confirm email
                                </label>
                                <input type="email"  className={errors.confirmemail && touched.confirmemail ?  "form-control is-invalid" : "form-control "} 
                                 onChange={handleChange} onBlur={handleBlur} name='confirmemail' />
                                 {errors.confirmemail && touched.confirmemail  && 
                                  <div className='text-danger'>{errors.confirmemail}</div>
                                 }
                             </div>
                             <div className='mb-3'>
                                <label for="bvnInput" className="form-label">
                                   Phone number 
                                   <span>
                                    <Link to="/">
                                        <button className='btn btn-rounded mt-1 mx-2 why '>
                                        <FontAwesomeIcon icon={faExclamationCircle} color="grey"/>
                                         <small className='mx-2'>why?</small></button>
                                    </Link>
                                   </span>
                                </label>
                                <input type="text" className={errors.number && touched.number ?  "form-control is-invalid" : "form-control "} 
                                 onChange={handleChange}  onBlur={handleBlur} name='number' />
                                 {errors.number && touched.number &&
                                <div className='text-danger'>{errors.number}</div>
                                 }
                                <small className='text-muted'>Dial *565*0# to get your BVN number</small>
                             </div>
                             <div className='mb-3'>
                                <label for="passwordInput" className="form-label">
                                   Password
                                </label>
                                <input type="password" className={errors.password && touched.password ?  "form-control is-invalid" : "form-control "}  
                                onChange={handleChange} onBlur={handleBlur} name='password' />
                                {errors.password && touched.password &&
                                <div className='text-danger'>{errors.password}</div>
                                   }
                             </div>
                             <div className='mb-3'>
                                <label for="confirmpasswordInput" className="form-label">
                                   Confirm password
                                </label>
                                <input type="password"  className={errors.confirmPassword && touched.confirmPassword ? "form-control is-invalid" : "form-control "} 
                                 onChange={handleChange} onBlur={handleBlur} name='confirmPassword' />
                                 {errors.confirmPassword && touched.confirmPassword &&
                                <div className='text-danger'>{errors.confirmPassword}</div>
                                 }
                             </div>
                             {/* for checkbox */}
                            <div className='d-flex'>
                            <div className="form-check">
                                <input className={errors.acceptedTos && touched.acceptedTos ? "form-check-input is-invalid" : "form-check-input"}
                                 type="checkbox" value="" id="defaultCheck1"
                                onChange={handleChange} onBlur={handleBlur}
                                 name="acceptedTos"/>
                                  {errors.acceptedTos && touched.acceptedTos &&
                                <div className='text-danger'>{errors.acceptedTos}</div>
                                 }
                                  </div>
                                       <div >
                                    <label className="form-check-label labely mb-5" for="defaultCheck1" >
                                       <p>
                                          <span  className='swwq '>I agree to Jabstock's</span>
                                       <Link to="/" className='another'>
                                             <span className='px-2 text-primary'>Terms of use</span>
                                            </Link>
                                            & 
                                            <Link to="/"  className='another'>
                                             <span className='px-2 text-primary '>Privacy policy</span>
                                            </Link>
                                       </p>
                                      </label>
                                      </div>
                            </div>
                                      {/* checkbox ends here */}
                                  <button className='button' type='submit' disabled={isSubmitting}>Register</button>
                           </form>
                           <div className='row'>
                              <div className='col-12  coll'>
                              <span>Already have an account?</span> <span>
                                <Link to="/login" className="mmm">
                                <small className="text-primary">Log in</small>
                                </Link>
                            </span>
                              </div>
                           </div>
                         </container>
                     </main>
                </container>
            </section>
            {/* message side */}
    <div id="message">
    <FontAwesomeIcon icon={faMessage} size="lg" color="white"  id="icon" />
    {/* <FontAwesomeIcon icon="fa-solid fa-message-question" color="white" /> */}
    </div>
            </>
        )
    }
  return (
    <>
      {/* <Layout> */}
        <Logup/>
        {/* <div>gggg</div> */}
        {/* <Footer/> */}
      {/* </Layout> */}
    </>
  )
}
