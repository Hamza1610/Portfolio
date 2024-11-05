import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

const MobileOffCanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch OffCanvas
            </Button>

            <Offcanvas show={show} onHide={handleClose} responsive="sm">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>Your content goes here.</p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MobileOffCanvas;
