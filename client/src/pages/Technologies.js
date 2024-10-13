import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import RoundCard from '../components/RoundCard';
import { motion } from "framer-motion";

const Technologies = ({ technologies }) => {
    return (       
        <Container id='technologies' className='w-95 mb-5'>
            <motion.h4
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0.2, x: 20 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 100,  duration: 1.4, delay: .75 }} 
                >Technologies</motion.h4>
                <hr style={{ width: '50vw',  height:'1em' }}/>
            <motion.div>I'm exerienced in working with the following programming languages, frameworks and services</motion.div>
            <Row md={2}  lg={4}>
                {technologies && technologies.map((item, key) => (<RoundCard key={key} imageSource={item.Framework} />))}
            </Row>
        </Container>
    );
}
 
export default Technologies;