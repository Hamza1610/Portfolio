import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import RoundCard from './render_components/RoundCard';

const Technologies = () => {
    const experience = [1,2,3,4,5]
    return ( 
        <Container className='w-95 mb-5'>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt distinctio excepturi nulla quod, atque cumque quo tempore corporis veritatis consectetur hic rerum? Reiciendis vero dolorum nulla molestias non, debitis qui iusto quibusdam rem id ratione ipsum, exercitationem omnis odit repellat. Similique totam aperiam exercitationem ut laudantium accusamus minima soluta commodi.</div>
            <Row md={2}  lg={4}>
                {experience && experience.map(() => (<RoundCard />))}
            </Row>
        </Container>
    );
}
 
export default Technologies;