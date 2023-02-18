import React from "react";

import "../assets/css/Navbar.css";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" bg="white" className="justify-content-between">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <Nav.Link href="/" className="nav-link">
              Authz
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/login" className="nav-link">
                Login
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link"></Nav.Link>
              <Nav.Link href="#" className="nav-link">
                About
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link"></Nav.Link>
              <Button
                variant="light"
                className="get-in-touch-btn d-none  d-lg-inline-block mx-3"
              >
                Get in Touch
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
