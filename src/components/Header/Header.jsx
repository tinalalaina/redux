import React from 'react'
import '../../index.css'
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"  className='fw-bold h1'>TIMBER & TRENDS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class=" me-auto  mb-lg-0">
      
        </div>
  
  
        <div class="links  me-auto "> 
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#designers">Designers</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
          
         </div>
         
        <div class=" mb-lg-0">
          <button className='bgs'> Sign in</button>
        </div>
  
  
      </div>
      
      
    </div>
  </nav>
  )
}

export default Header