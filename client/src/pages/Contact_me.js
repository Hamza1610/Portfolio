import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { motion } from "framer-motion";


const ContactMe = ({ contactDetails }) => {

    const testAPI =  async () => {
        
        try {
            const response = await axios.post('http://localhost:3002/profiles/create_profile', {
                message: "Hellowold"
            });
            
            if(response.status === 200) {
                console.log('Response', response.data)
            }
        } catch (error) {
            console.log(error);
            
        }

        
    }
    return ( 
        <motion.div
        
        >

            <div id='contact' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <hr style={{ width: '80vw',  height:'1em' }}/>
            <motion.h3
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0.2, x: 20 }}
                transition={{ type: 'spring', damping: 10, stiffness: 100,  duration: 1.4, delay: .75 }} 
                className='bg-dark'
            >Contact me</motion.h3>
            {contactDetails[0] ? (
                <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <a href='mailto:hamza.dev001@gmail.com'><i style={{fontSize: '1.2em'}} className='fas fa-envelope m-2 h3'></i></a>
                    {/* <a href={contactDetails[0].Github}><i style={{fontSize: '1.2em'}} className='fas fa-envelope m-2 h3'></i></a> */}
                    <a href={contactDetails[0].LinkedIn}><i style={{fontSize: '1.2em'}} className='fab fa-linkedin m-2 h3'></i></a>
                    <a href={contactDetails[0].X}><i style={{fontSize: '1.2em'}} className='fab fa-twitter m-2 h3'></i></a>
                    <a href={contactDetails[0].PhoneNumber}><i style={{fontSize: '1.2em'}} className='fab fa-phone m-2 h3'></i>{contactDetails.PhoneNumber}</a>
                </div>

            ) : (
                <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                    <a href='mailto:hamza.dev001@gmail.com'><i style={{fontSize: '1.2em'}} className='fas fa-envelope m-2 h3'></i></a>
                    <a href='linkedin.com/in/muhammad-hamza-7239b9237'><i style={{fontSize: '1.2em'}} className='fab fa-linkedin m-2 h3'></i></a>
                    <a href='#'><i style={{fontSize: '1.2em'}} className='fab fa-twitter m-2 h3'></i></a>
                    <a href="tel:+2349026880099"><i style={{fontSize: '1.2em'}} className='fab fa-whatsapp m-2 h3'></i></a>
                </div>
                )}
                <Form action='mailto:hamza.dev001@gmail.com' method='post'>
                    <Form.Group style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <Form.Control className='w-100 m-0' size="md" type="text" placeholder="message me" name='message' required/>
                        <Button className='mt-2' onClick={ () => testAPI() } >Send</Button>
                    </Form.Group>
                </Form>
            </div>
        </motion.div>
    );
}
 
export default ContactMe;