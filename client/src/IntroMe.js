import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Image'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import logo from './resources/me7.png'
const IntroMe = () => {
    return ( 
        <Container id='top' className='w-95 h-100' style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around'}}>
                <div>
                    <Image src={logo} style={{width: '300px', height: '350px'}}/>  
                </div>
                <div style={{width: '550px'}}>
                    <h1>Software Engineer</h1> 
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt distinctio excepturi nulla quod, atque cumque quo tempore corporis veritatis consectetur hic rerum? Reiciendis vero dolorum nulla molestias non, debitis qui iusto quibusdam rem id ratione ipsum, exercitationem omnis odit repellat. Similique totam aperiam exercitationem ut laudantium accusamus minima soluta commodi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quas placeat suscipit quaerat amet facilis iure iste excepturi consequuntur praesentium, deserunt ipsam voluptas.</p>
                    </div>
                </div>
        </Container>
    );
}
 
export default IntroMe;