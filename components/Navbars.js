 
import React from 'react' 
  
import Image from 'next/image'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


export default function Navbars() { 
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="/">           
      <Image
        src="/img/sf.png"
        height={60}
        width={100}
        alt="mi imagen de perfil"
      ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
