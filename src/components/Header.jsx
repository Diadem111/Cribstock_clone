            import React, {useState} from "react";
            import Nav from "react-bootstrap/Nav"
            import Container from 'react-bootstrap/Container';
            import Navbar from 'react-bootstrap/Navbar';
            import "../Navbar.css"
    import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
// import { Button } from "bootstrap";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import { Link, Navigate, useLocation,useNavigate } from "react-router-dom";





            export default function Header() {
                const [colorChange, setcolorChange] = useState(false);
                const changeNavbarColor = () =>{
                    if(window.scrollY >=80){
                      setcolorChange(true);  
                    }else{
                        setcolorChange(false);
                    }
                }
                window.addEventListener('scroll', changeNavbarColor);
                return (
                    <>
                      <Navbar expand="sm" id="nav" className={colorChange ? "navbar colorChange"  : "navbar" }  >
        <Container >
          <Navbar.Brand href="#home" >
            <img
              alt=""
              src="/logo2.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            id="logo"/>{' '}
            <span className="fw-bolder" id="span">cribstock</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"id="toggle" />
           <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto pe-5">
             <Link to="/dashboard/invest" className="fw-bold pe-5 " id="linkid">Stocks</Link>
             <Link to="fq" className="fw-bold pe-5 " id="linkid">FAQ</Link>
             <Link to="/about" className="fw-bold pe-5 " id="linkid">About</Link>
             <Link to="/fq" className="fw-bold pe-5 " id="linkid">Team</Link>
              </Nav>
              <Nav>
                <Link to="/login">
                <Button className="mt-1" id="but1">Login</Button>
                </Link>
                <Link to="/signup">
                <Button className="ms-2 mt-1" id="but1">Sign up</Button>
                </Link>
              </Nav>
           </Navbar.Collapse>
        </Container>
            

      </Navbar>
                    </>
                )
            }