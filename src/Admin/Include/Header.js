import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { dispatch } = useContext(UserContext);
  let navigate = useNavigate();

  const Logout = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    navigate("/login");
  };
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-dark text-white">
        <Container>
          <Navbar.Brand className="text-white" href="/admin">
            Admin Header
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="text-white" href="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link className="text-white" href="/profile">
                Profile
              </Nav.Link>
              <button className="btn btn-secondary" onClick={Logout}>Logout</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
