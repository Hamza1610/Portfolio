import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ContactMe = () => {

    return ( 
        <div id='contact' style={{display:'flex', flexDirection:'column', justifyContent:'center', height: '50vh', alignItems:'center'}}>

            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <a href='mailto:hamza.dev001@gmail.com'><i className='fas fa-envelope m-2 h3'></i></a>
                <a href='linkedin.com/in/muhammad-hamza-7239b9237'><i className='fab fa-linkedin m-2 h3'></i></a>
                <a href='#'><i className='fab fa-twitter m-2 h3'></i></a>
                <a href="tel:+2349026880099"><i className='fab fa-whatsapp m-2 h3'></i></a>
            </div>
            <b as='b'>or</b>
            <Form>
                <Form.Group style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Form.Control className='w-100 m-3' size="lg" type="text" placeholder="Hire me" />
                    <Button type='submit'>Send</Button>
                </Form.Group>
            </Form>
        </div>
    );
}
 
export default ContactMe;