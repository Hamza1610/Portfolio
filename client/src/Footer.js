import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {

    return ( 
        <footer className="bg-dark text-light mt-5">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>&copy; {new Date().getFullYear()} Muuhammad Hamza. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
    </footer>
     );
}
 
export default Footer;