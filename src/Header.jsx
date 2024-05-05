import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <div className='container'>
    <div className='row-header'>
      <div className='half'>
     <Nav.Link href='section4'>
         <h1>APPLE</h1>
         </Nav.Link>
        <Navbar  expand="lg" className="tertiary">

        
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <nav >
    <Nav.Link href="#section1">I-pad  </Nav.Link>
    <Nav.Link  href="#section2">Macbook  </Nav.Link>
    <Nav.Link  href="#section3">I-phone  </Nav.Link>
    
  </nav>
</Navbar.Collapse>

</Navbar>     
        
 </div>
 
 </div>
 

 </div>     

 
      
   
  )
}
