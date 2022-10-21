import React,{useState,useEffect} from 'react';
import "../Login.css";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
import {useFormik} from "formik";
import Signup from './Signup';
import Header from './Header';
import {LoginSchema} from "../../src/components/schema/anotherSchema";
import axios from "axios";
import storage from 'redux-persist/lib/storage';
import {login} from ".././redux/apiCalls";

export default function Login() {
  let url = "http://localhost:4000/user/userAuth";
  
  const dispatch = useDispatch();
  // const history = useHistory();
  const navigate = useNavigate();
  // let emailInput ;
  // console.log(emailInput);
  const user = useSelector((state) => state.users.userDetails);
  let aa = user;
  console.log(aa);
  const [success,setSuccess] = useState("");
  const [myerror,setMyerror] = useState("");
  

  const onSubmit = (values,actions) => {
    let dd = values;
    // emailInput = values.email;

    console.log(values);
    login(dispatch,dd,navigate);
    axios.post(url,dd).then((res) => {
      console.log(res.data);
      localStorage.userToken = res.data.usertoken;
      if(res.data.status === false) {
        setMyerror(res.data.message);
        console.log(myerror)
      }
      else {
        storage = aa.find((val,i)=>val.email == res.data.user.email &&
         val.password == res.data.user.password);
         console.log(storage);
        if(storage){
          setSuccess(res.data.message);
           navigate("/dashboard");
        }else if(!storage){
           setMyerror(res.data.message);
           console.log("Wrong credentials");
        }
       
      }
    }).catch((err) => {
      // console.log(err);
      setMyerror(err.message);
      console.log(err.message)

    })
  }
   const Card = () => {
    const {values,errors,handleBlur,isSubmitting,handleChange,handleSubmit,touched} = useFormik({
      initialValues:{
         email:"",
         password:"",
          },
      validationSchema :LoginSchema, 
        onSubmit,
     
   })
          // console.log(errors);   
          return (
            <>
             <main className='container  contain1'>
             {myerror &&<div class="alert alert-danger alert-dismissible fade show" role="alert">
               <strong>{myerror}</strong> 
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                 </div>

              }
              {success &&<div class="alert alert-primary alert-dismissible fade show" role="alert">
               <strong>{success}</strong> 
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                 </div>
              }
             <div className='row'>
         <div className='container mx-auto mt-5 p-0 cardee'>
            <h1 className='text-center mt-5'>Login to your account</h1>
            <p className='text-center'>Enter your credentials below to continue</p>
            <Form className=' form1 mx-auto' onSubmit={handleSubmit}>
             <div className='flex flex-col space-y-4 mt-12'>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label> Username or email address</Form.Label>
                  <Form.Control
                  onChange={handleChange} onBlur={handleBlur}
                  name='email' width="50px"  type="email"
                  className={errors.email && touched.email ?  "form-control is-invalid" : "form-control "}/>
                     {errors.email && touched.email &&
                      <div className='text-danger'>{errors.email}</div> }
                   <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                   </Form.Text>
              </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control type="password" 
            onChange={handleChange} onBlur={handleBlur}
            name='password' width="50px" 
            className={errors.password && touched.password ?  "form-control is-invalid" : "form-control "}/>
               {errors.password && touched.password &&
                <div className='text-danger'>{errors.password}</div> }
                  
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
    <button  type="submit"  className='btn1 mt-3 mx-auto' disabled={isSubmitting} >
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
