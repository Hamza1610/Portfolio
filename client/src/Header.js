import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const Navigation = () => {

  const [offcanvasStyle, setOffcanvasStyle] = useState({color: 'black'})

  return (
    <Navbar expand="md">
      <Container className='justify-content-between'>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Offcanvas
          id={`offcanvasNavbarLabel-expand-lg`}
          aria-labelled-by={`offcanvasNavbarLabel-expand-lg`}
          placement='end'
          onEntering={()=> setOffcanvasStyle({color: 'black'})}
          onExiting={()=> setOffcanvasStyle({color: 'black'})}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='justify-content-end'>
              <Nav fill variant='pills' defaultActiveKey='/'>
              <Nav.Link href='#projects' className='me-4' style={offcanvasStyle}>Projects</Nav.Link>
              <Nav.Link href='#experience' className='me-3' style={offcanvasStyle}>Experience</Nav.Link>
              <Nav.Link href='#technologies' className='me-4' style={offcanvasStyle}>Technologies</Nav.Link>
              <Nav.Link href='#contact' className='me-4' style={offcanvasStyle}>Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
