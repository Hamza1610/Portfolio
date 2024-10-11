
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import logo from '../logo.svg';
const RoundCard = ({ imageSource }) => {
    return (
        <Card style={{width:'100px', height:'100px',}}  className='m-2 bg-dark d-flex justify-content-center align-items-center' border='primary'>
            <Image src={imageSource} alt='Technology Image' style={{width:'90px', height:'90px'}} roundedCircle/>
            {/* <Image src={logo} alt='Technology Image' style={{width:'90px', height:'90px'}} roundedCircle/> */}
        </Card>
    )
}
export default RoundCard;