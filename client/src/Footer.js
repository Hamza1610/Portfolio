import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TopScroller from './TopScroller'
const Footer = () => {

    return ( 
        <footer className="bg-dark text-light mt-5">
            <Container>
                <Row style={{float: 'inline-end'}}>
                    <TopScroller />
                </Row>
                <Row>
                    <Col className="text-center py-3 bg-dark">
                        <p className='bg-dark text-center'>&copy; {new Date().getFullYear()} Muuhammad Hamza. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
    </footer>
     );
}
 
export default Footer;