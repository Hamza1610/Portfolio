import Container from 'react-bootstrap/Container';
import { motion } from "framer-motion";


const Experiences = ({ experience }) => {
    
    console.log(experience)
    return (
        <motion.div
            // whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0.2, x: 5 }}
            // transition={{ duration: .75, delay: .5 }}
    >
            <Container id='experience' className='w-95 mb-3' >
                <h4>Experience</h4>
                <hr style={{ width: '50vw',  height:'1em' }}/>
                <ul>
                    {experience && experience.map((item, key) => (
                        <li key={key}>
                            <div>
                                <h4>{item.Title}</h4>
                                <p>{item.Description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </motion.div> 
    );
}
 
export default Experiences;