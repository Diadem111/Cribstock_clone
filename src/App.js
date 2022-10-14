import React, { useEffect } from 'react';

import { BrowserRouter as Router,Routes,Redirect, Route,Navigate } from 'react-router-dom';

// import {Routes} from "react-router";
// import { Route } from "react-router";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Fq from "./components/Fq";
import Portfolio from "./components/Portfolio/Portfolio"
// import DashboardM from "./components/DashboardM";
import Main from "./components/MainDash/Main";
import Wallet from "./components/Wallet/Wallet";
import Investment from "./components/Investment/Investment";
import Trade from "./components/Trade/Trade";
import Product from "./components/Trade/Product/Product";
import ProductContent from "./components/Trade/Product/ProductContent/ProductContent";
// import Invest from "./components/Invest/Invest";
import Graph from "./components/Graph/Graph";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Responsive from "./components/Slider";
import Testing from "./components/Testing";
import Sidebar from "./components/Sidebar/Sidebar";
import {NotFound} from "./Pages/NotFound/NotFound";

 function App() {
  const activeMenu = true;
  const token = localStorage.userToken;

  return (
    // {token ? 
    //     <Ecommerce/> : <Navigate to="/signin"/>}
      //  <Router>
         <Routes>
            <Route  path="/" exact   element={<Homepage	/>}>
            </Route>
            <Route  path="/signup" exact  element={<Signup	/>}>
            {/* <Signup/> */}
            </Route>
            <Route  path="/about" exact  element={<About/>}>
           </Route>
           <Route  path="/login"   element={<Login/>}>
            </Route>
            <Route  path="/fq" exact  element={<Fq/>}>
            </Route>
            <Route  path="/dashboard"   element={ token ? <Main/> : <Navigate to="/login"/>} >
            </Route>
            <Route  path="/dashboard/portfolio" exact  element={token ? <Portfolio/> : <Navigate to="/login"/>}>
            </Route>
            <Route  path="/dashboard/wallet" exact  element={token ? <Wallet/> : <Navigate to="/login"/>}>
            </Route>
            <Route  path="/dashboard/invest" exact  element={token ?<Investment/> : <Navigate to="/login"/>}>
            </Route>

            <Route  path="/dashboard/trade" exact  element={token ? <Trade/> : <Navigate to="/login"/>}>
            </Route>
            <Route  path="/dashboard/product" exact  element={token  ? <Product/> : <Navigate to="/login"/>}>
            </Route>
            <Route  path="/Graph/:personid" exact  element={token ? <Graph/> :<Navigate to="/login"/>}>
            </Route>
            <Route  path="*" exact  element={<NotFound/>}>
            </Route>
           

             {/* <Route path="/saw" element={<ProductContent	/>}/> */}
          {/* <Route path="/Graph" element={<Graph	/>}/> */}
          {/* <Route path="/slider" element={<Responsive	/>}/> */}
          {/* <Route path="/testing" element={<Testing	/>}/> */}

          </Routes>
      //  </Router>
         
  );
}

export default App;
