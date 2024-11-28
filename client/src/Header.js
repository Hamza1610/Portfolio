import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const closeOffCanvasAndNavigate = (event) => {
    handleClose()

    // if (){
    //   setTimeout(() =>{
    //     event.target.click()
    //   }, 1500)
    }

  const offcanvasStyle = { color: 'white' };

  return (
    <Navbar expand="md">
      <Container className='justify-content-between'>
        <Navbar.Toggle onClick={handleShow} aria-controls='basic-navbar-nav' variant='primary' />
        
        {/* OffCanvas for mobile screens */}
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement='end'
          className='text-white'
          responsive="md" // Only show on mobile
          style={{backgroundColor: 'rgb(33 37 41)'}}
        >
          <Offcanvas.Header closeButton style={{ backgroundColor: '#0a58ca' }}>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='justify-content-end'>
            <Nav fill variant='pills' defaultActiveKey='/'>
              <Nav.Link href='#projects' onClick={(event) => closeOffCanvasAndNavigate(event)} className='me-2' style={offcanvasStyle}>Projects</Nav.Link>
              <Nav.Link href='#experience'  onClick={(event) => closeOffCanvasAndNavigate(event)} className='me-2' style={offcanvasStyle}>Experience</Nav.Link>
              <Nav.Link href='#technologies' onClick={(event) => closeOffCanvasAndNavigate(event)} className='me-2' style={offcanvasStyle}>Technologies</Nav.Link>
              <Nav.Link href='#contact'  onClick={(event) => closeOffCanvasAndNavigate(event)} className='me-2' style={offcanvasStyle}>Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
