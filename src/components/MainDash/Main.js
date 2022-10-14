import React, {useState,useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./Main.css";
import Card from "../Card/Card";
// import Table from '../Table/Table';
import Rightside from '../Rightside/Rightside';
// import Widgets from '../Widgets/Widgets';
import axios from "axios";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Main() {
  const url = "http://localhost:4000/user/getdash";
  const [userDetails,setUserDetails] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [items,setItems]  = useState([]);
   const [error,setMyerror] = useState("");
  const token = localStorage.userToken;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let formal ;
    let currentUser = useSelector((state) => state.users.currentuser);
    console.log(currentUser);
    let data = currentUser;
  // useEffect
  useEffect(() => {
    console.log(token);
    
    axios.get(url,{
      headers:{
        "Authorization": `Bearer ${token}`,
        "Accept":"application/json",
        "Content-Type":"application/json",
        }
    }).then((res) => {
      console.log(res);
      if(res.data.status == false){
        localStorage.removeItem("userToken");
        setMyerror(res.data.message);
        navigate("/login");
      }else{
        setUserDetails(res.data?.result);
        formal = res.data?.result;
        console.log(formal);
        console.log(userDetails)
      }
    }).catch((err) => {
      console.log(err.message);
      setMyerror(err.message);
      navigate("/login");
    })
  }, [])
  
  return (
    <>
       <div className='App'>
       <div className='AppGlass'>
          <Sidebar userData={data}/>
          {/* <div>Welcome</div> */}
       <div className='MainDash'>
         <Card userData={data} />
         {/* <h1>dolapo</h1>  */}
         {/* <Table/> */}
       </div>
       <Rightside  userData={data}/>
         </div>
       </div>
    </>
  )
}
