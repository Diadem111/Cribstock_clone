import React, { useEffect } from 'react';

import { BrowserRouter as Router,Routes,Redirect, Route } from 'react-router-dom';

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

 function App() {
  const activeMenu = true;
  return (
       
      //  <Router>
         <Routes>
            <Route  path="/" exact   element={<Homepage	/>}>
            </Route>
            <Route  path="/signup" exact  element={<Signup	/>}>
            {/* <Signup/> */}
            </Route>
            <Route  path="/about" exact  element={<About/>}>
           </Route>

            <Route  path="/fq" exact  element={<Fq/>}>
            </Route>
            <Route  path="/dashboard"   element={<Main/>}>
            </Route>
            <Route  path="/dashboard/portfolio" exact  element={<Portfolio/>}>
            </Route>
            <Route  path="/dashboard/wallet" exact  element={<Wallet/>}>
            </Route>
            <Route  path="/dashboard/invest" exact  element={<Investment/>}>
            </Route>

            <Route  path="/dashboard/trade" exact  element={<Trade/>}>
            </Route>
            <Route  path="/dashboard/product" exact  element={<Product/>}>
            </Route>
            <Route  path="/Graph/:personid" exact  element={<Graph/>}>
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
