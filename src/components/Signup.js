import React from 'react'
import "../Signup.css"
import Layout from './Layout'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {useFormik} from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';




export default function Signup() {
      const Logup =() => {
         const formik = useFormik({
            initialValues:{
               firstname:"",
               lastname :"",
               username:"",
               email:"",
               confirmemail:"",
               bvn:"", 
               password:"",
               confirmPassword:""
            },
            onSubmit : (values)=>{
               console.log(values);
            },
            validate : (values) => {
              let errors = {}
              if(values.firstname==""){
               errors.firstname = "This field is required"
              }
              if(values.lastname==""){
               errors.lastname = "This field is required"
              }
              if(values.username==""){
               errors.username  = "This field is required"
              }
              if(values.email==""){
               errors.email = "This field is required"
              }
              if(values.confirmemail==""){
               errors.confirmemail = "This field is required"
              }
              if(values.bvn==""){
               errors.bvn = "This field is required"
              }
              if(values.password==""){
               errors.password = "This field is required"
              }
              if(values.confirmPassword==""){
               errors.confirmPassword = "This field is required"
              }
              return errors
            }
         
         })
         console.log(formik.errors);   
         var size = Object.keys(formik.errors).length;
         console.log(size);

         // console.log();   
        return (
            <>
            <section className='container-fluid contain'>
                {/* <div className='row '>
                    <div className='col-12 d-flex mt-5 mx-5 '>
                        <img src="/logo2.png"
                         width="30"
                           height="30"
                            className="d-inline-block align-top" alt='logo'/>
                               <span className='fw-bolder mx-2  span'>Jabstock</span>
                    </div>
                </div> */}
                <container className="row">
                   <main className='col-12 col-md-6 col-lg-6'>
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
                   <main className=' container mx-auto col-12 col-md-6 col-lg-6 hei'>
                       <container className="card hee2">
                         <div className='card-body'>
                            <h3 className='card-title mt-4'>
                                Let's Invest into Real Estate Together
                            </h3>
                            <p>
                                Please fill in all fields correctly
                            </p>
                         </div>
                          <form action="" onSubmit={formik.handleSubmit} className="form1">
                           <div className='row mb-3'>
                                <div className='col'>
                                <label for="FirstnameInput" className="form-label">
                                    First name
                                </label>
                                <input type="text" className='form-control' 
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                name='firstname' width="50px" />
                                {formik.touched.firstname ?
                                <div className='text-danger'>{formik.errors.firstname}</div>
                                     :"" }
                               </div>
                             <div className='col'>
                                <label for="lastnameInput" className="form-label">
                                    Last name
                                </label>
                                <input type="text" 
                                className='form-control' 
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                name='lastname' />
                                {formik.touched.lastname ? 
                                 <div className='text-danger'>{formik.errors.lastname}</div>
                                 : ""}
                             </div>
                           </div>
                             <div className='mb-3'>
                                <label for="usernameInput" className="form-label">
                                    Username
                                </label>
                                <input type="text" className='form-control'
                                 onChange={formik.handleChange} onBlur={formik.handleBlur} name='username' />
                                 {formik.touched.username ? 
                                 <div className='text-danger'>{formik.errors.username}</div>
                                 : ""}
                             </div>
                             <div className='mb-3'>
                                <label for="emailInput" className="form-label">
                                    Email
                                </label>
                                <input type="email" className='form-control'
                                 onChange={formik.handleChange} onBlur={formik.handleBlur}
                                name='email' />
                                {formik.touched.email ?
                                 <div className='text-danger'>{formik.errors.email}</div>
                                : ""}
                             </div>
                             <div className='mb-3'>
                                <label for="confirmemailInput" className="form-label">
                                   Confirm email
                                </label>
                                <input type="email" className='form-control' 
                                 onChange={formik.handleChange} onBlur={formik.handleBlur} name='confirmemail' />
                                 {formik.touched.confirmemail ?
                                  <div className='text-danger'>{formik.errors.confirmemail}</div>
                                 : ""}
                             </div>
                             <div className='mb-3'>
                                <label for="bvnInput" className="form-label">
                                   Bank verfication number (BVN) 
                                   <span>
                                    <Link to="/">
                                        <button className='btn btn-rounded mt-1 mx-2 why '>
                                        <FontAwesomeIcon icon={faExclamationCircle} color="grey"/>
                                         <small className='mx-2'>why?</small></button>
                                    </Link>
                                   </span>
                                </label>
                                <input type="number" className='form-control' 
                                 onChange={formik.handleChange}  onBlur={formik.handleBlur} name='bvn' />
                                 {formik.touched.bvn ?
                                <div className='text-danger'>{formik.errors.bvn}</div>
                                 : ""}
                                <small className='text-muted'>Dial *565*0# to get your BVN number</small>
                             </div>
                             <div className='mb-3'>
                                <label for="passwordInput" className="form-label">
                                   Password
                                </label>
                                <input type="password" className='form-control'  
                                onChange={formik.handleChange} onBlur={formik.handleBlur} name='password' />
                                {formik.touched.password ?
                                <div className='text-danger'>{formik.errors.password}</div>
                                  :"" }
                             </div>
                             <div className='mb-3'>
                                <label for="confirmpasswordInput" className="form-label">
                                   Confirm password
                                </label>
                                <input type="password" className='form-control' 
                                 onChange={formik.handleChange} onBlur={formik.handleBlur} name='confirmPassword' />
                                 {formik.touched.confirmPassword ?
                                <div className='text-danger'>{formik.errors.confirmPassword}</div>
                                 :""}
                             </div>
                             {/* for checkbox */}
                             <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label labely" for="defaultCheck1" >
                                       <p>I agree to Jabstock's
                                       <Link to="/" className='another'>
                                             <span className='px-2'>Terms of use</span>
                                            </Link>
                                            & 
                                            <Link to="/"  className='another'>
                                             <span className='px-2'>Privacy policy</span>
                                            </Link>
                                       </p>
                                       
                                              </label>
                               </div>
                                  {/* checkbox ends here */}
                                  <button className='reg' disabled={size>0}>Register</button>
                           </form>
                           <div className='row'>
                              <div className='col-12 coll'>
                              <span>Already have an account?</span> <span>
                                <Link to="/" className="mmm">
                                <small>Log in</small>
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
