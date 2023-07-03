import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const admin = localStorage.getItem("adminlogin");
 
  return (
    <Navbar expand="lg" className="bg-dark text-white">
      <Container>
        <Navbar.Brand className="text-white" href="/">React Routing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/">Home</Nav.Link>
            <Nav.Link className="text-white" href="/about">About</Nav.Link>
            <Nav.Link className="text-white" href="/contact">Contact</Nav.Link>
            {admin ? (
              <Nav.Link className="text-white" href="/admin">My Account</Nav.Link>
            ) : (
              <Nav.Link className="text-white" href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header