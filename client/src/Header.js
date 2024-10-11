import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const Navigation = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [offcanvasStyle, setOffcanvasStyle] = useState({color: 'white'})

  return (
    <Navbar expand="md">
      <Container className='justify-content-between'>
        <Navbar.Toggle  aria-controls='basic-navbar-nav' variant='primary' />
        <Navbar.Offcanvas
          id={`offcanvasNavbarLabel-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement='end'
          className='text-white'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='justify-content-end'>
              <Nav fill variant='pills' defaultActiveKey='/'>
              <Nav.Link href='#projects' className='me-2' style={offcanvasStyle}>Projects</Nav.Link>
              <Nav.Link href='#experience' className='me-2' style={offcanvasStyle}>Experience</Nav.Link>
              <Nav.Link href='#technologies' className='me-2' style={offcanvasStyle}>Technologies</Nav.Link>
              <Nav.Link href='#contact' className='me-2' style={offcanvasStyle}>Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;