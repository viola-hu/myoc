import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar(){
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><h1 className='whitefont'>myoc</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#/jobsearch" className='whitefont job-matches'>Job Matches</Nav.Link>
          <Nav.Link href="/#/jobsearch" className='whitefont saved-jobs'>Saved Jobs</Nav.Link>
          <Nav.Link href="/#/profile" className='whitefont profile'>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
