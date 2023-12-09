import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Image'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import logo from './resources/me7.png'
const IntroMe = () => {
    return ( 
        <Container id='top' className='w-95 h-100 mt-5' style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-around'}}>
                <div style={{display:'flex', }}>
                    <Image src={logo} style={{width: '400px', height: '450px'}}/>  
                </div>
                <div style={{width: '565px'}}>
                    <h3>Full Stack Software Engineer</h3> 
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt distinctio excepturi nulla quod, atque cumque quo tempore corporis veritatis consectetur hic rerum? Reiciendis vero dolorum nulla molestias non, debitis qui iusto quibusdam rem id ratione ipsum, exercitationem omnis odit repellat. Similique totam aperiam exercitationem ut laudantium accusamus minima soluta commodi.</p>
                    </div>
                </div>
        </Container>
    );
}
 
export default IntroMe;