import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import RoundCard from '../components/RoundCard';

const Technologies = ({ technologies }) => {
    return ( 
        <Container id='technologies' className='w-95 mb-5'>
            <h4>Technologies</h4>
            <hr style={{ width: '50vw',  height:'1em' }}/>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
            <Row md={2}  lg={4}>
                {technologies && technologies.map((item, key) => (<RoundCard key={key} imageSource={item.Framework} />))}
            </Row>
        </Container>
    );
}
 
export default Technologies;