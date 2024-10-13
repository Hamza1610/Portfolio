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
                <motion.h4
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0.2, x: 20 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100,  duration: 1.4, delay: .75 }} 
                >Experience</motion.h4>
                <hr style={{ width: '50vw',  height:'1em' }}/>
                <ul>
                    {experience && experience.map((item, key) => (
                        <li key={key}>
                            <motion.div
                                whileInView={{ opacity: 1, scale: 1}}
                                initial={{ opacity: 0.2, scale: .2 }}
                                transition={{ type: 'spring', damping: 10, stiffness: 100,  duration: 1.4, delay: .75 }} 
                            
                            >
                                <h6>{item.Title}</h6>
                                <p style={{fontSize: '.9rem'}}>{item.Description}</p>
                            </motion.div>
                        </li>
                    ))}
                </ul>
            </Container>
        </motion.div> 
    );
}
 
export default Experiences;