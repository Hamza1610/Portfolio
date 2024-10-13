import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import logo from '../resources/me7.png'
import '../App.css';
import { motion } from 'framer-motion'

const IntroMe = ({ PersonalInfo, Summary }) => {

    return ( 
    <Container id='intro' className='w-95 h-100 mt-5'>

        <motion.div className='profile-image-div'
        
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0.2, x: -25 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100,  duration: 1.4, delay: .75 }}
        >
            <Image className='profile-image' src={logo}/>  
        </motion.div>
        <motion.div 
        
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0.2, x: 25 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100,  duration: 1.4, delay: .75 }}
            style={{width: '565px'}}
        >
            <h2 style={{fontSize: '2rem'}}>{PersonalInfo[0].Name}</h2> 
            <h3 style={{fontSize: '1.2rem'}}>{PersonalInfo[0].Title}</h3> 
            <div>
                <p className='summary'>{Summary[0].Content}</p>
                <motion.a
                    animate={{ scaleX: 1.2, scaleY:1.2 }}
                    initial={{ opacity: 1}}
                    transition={{ duration: 1, repeat: Infinity }}
                    className='resume-btn' href='resume-software-engineer.pdf'
                >Download resume <i className='fas fa-file-lines'></i>
                </motion.a>
            </div>
        </motion.div>
    </Container>
    );
}
 
export default IntroMe;