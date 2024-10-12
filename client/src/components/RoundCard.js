import Image from 'react-bootstrap/Image';
import { motion } from 'framer-motion';
import '../App.css';

const RoundCard = ({ imageSource }) => {
    return (
        <motion.div
        
            style={{width:'100px', height:'100px'}}
            className='m-2 bg-dark d-flex justify-content-center align-items-center'
        >
            <Image className="round-card-image" src={imageSource} alt='Technology' roundedCircle/>
        </motion.div>
    )
}
export default RoundCard;