import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import logo from '../logo.svg';
const RoundCard = () => {
    return (
        <Card style={{width:'220px', height:'220px',}}  className='m-2 bg-dark' border='primary'>
            <Image src={logo} alt='Technology Image' style={{width:'160px', height:'160px'}} roundedCircle/>
            <div style={{width:'220px'}}>
                <b style={{fontSize:'0.7rem'}}>Programming language</b>
            </div>
        </Card>
    )
}
export default RoundCard;