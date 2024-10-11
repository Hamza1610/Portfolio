import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TopScroller from './components/TopScroller'
const Footer = () => {

    return ( 
        <footer className="bg-dark text-light mt-5">
            <TopScroller />
            <Container>
                <Row>
                    <Col className="text-center py-3 bg-dark">
                        <p style={{color: 'GrayText'}} className='text-center fs-6 fst-italic'>&copy; {new Date().getFullYear()} Muuhammad Hamza. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;