import Image from 'react-bootstrap/Image';
import { motion } from 'framer-motion';
import '../App.css';

const RoundCard = ({ imageSource, Label }) => {
    if (Label) console.log(Label);
    
    return (
        <motion.div
        
            style={{width:'100px', height:'100px'}}
            className='m-2 bg-dark d-flex justify-content-center align-items-center flex-column m-4'
        >
            <Image className="round-card-image" src={imageSource} alt='Technology' roundedCircle/>
            <b>{Label}</b>
        </motion.div>
    )
}
export default RoundCard;