
import {Routes} from "react-router";
import { Route } from "react-router";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Fq from "./components/Fq";
import Portfolio from "./components/Portfolio/Portfolio"
// import DashboardM from "./components/DashboardM";
import Main from "../src/components/MainDash/Main";
import Wallet from "./components/Wallet/Wallet";
import Investment from "./components/Investment/Investment";
import Trade from "./components/Trade/Trade";
import Product from "./components/Trade/Product/Product";
import ProductContent from "./components/Trade/Product/ProductContent/ProductContent";
// import Invest from "./components/Invest/Invest";


function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/fq" element={<Fq/>}/>
      <Route path="/dashboard" element={<Main/>}/>
      <Route path="/users" element={<Portfolio/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/invest" element={<Investment/>}/>
      <Route path="/trade" element={<Trade/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/saw" element={<ProductContent	/>}/>


        </Routes> 
        {/* <div style={{overflowY:"scroll", height:"2200px"}}></div> */}
    </div>
  );
}

export default App;
