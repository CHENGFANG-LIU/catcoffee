import React from 'react';
 
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Navbar } from 'react-bootstrap';
import paws from './image/paws.png';

 
const Navigation = () => {
   
   return (
      <div>
         
         
         <Navbar bg="light" className="d-flex flex-row ">
            
            <div className="container-fluid d-flex flex-row align-items-start zindex={1}">
               <div className="p-2 col-1" ><img src={paws} width="80px" height="80px"></img></div>
               <div className="p-2 col-2 pt-3 h1 font-italic ">腳印咖啡</div>
               <NavLink to="/" className="navbar-light pt-3 p-2 col-1 font-weight-bold h3">首頁</NavLink>
               <NavLink to="/login" className="navbar-light pt-3 p-2 col-1 font-weight-bold h3">會員</NavLink>
               <NavLink to="/menu" className="navbar-light p-2 pt-3 col-1 font-weight-bold h3">菜單</NavLink>
               <NavLink to="/watchout" className="navbar-light pt-3 p-2 col-1 font-weight-bold h3" >規則</NavLink>
               
               
            </div>
            
            
            
            
            
         </Navbar>
      </div>
   );
}
 
export default Navigation;