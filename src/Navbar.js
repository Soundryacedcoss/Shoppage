import React from "react";
import img1 from "./image/logo.png";
import img2 from "./image/shopping-cart.png";
import './Navbar.css'
export const Navbar = () => {
  return (
    <div className="Navbar" style={{ marginLeft: "2%" }}>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={img1} alt="" />
    </a>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" style={{marginLeft:"3%"}}>
          <input type="text" className="SearchBox" placeholder="Search Book by pulisher name.." />
        </li>
        <li class="nav-item" style={{marginLeft:"20%"}}>
          <a class="nav-link" href="#">FAQ</a>
        </li>
        <li class="nav-item" style={{marginLeft:"3%"}}>
          <a class="nav-link" href="//">Track Order</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#"><img className="CartLogo" src={img2} alt="" /></a>
        </li>
        <button className="SigninButton">SignIn</button>
      </ul>
    </div>
  </div>

</nav>
   <ul className="NavRow2">
    <li className="NavRow2li">Home</li>
    <li className="NavRow2li">Category</li>
    <li className="NavRow2li">About</li>
    <li className="NavRow2li">Page</li>
    <li className="NavRow2li">Blog</li>
    <li className="NavRow2li">Contact</li>
   </ul>
    </div>
  );
};
