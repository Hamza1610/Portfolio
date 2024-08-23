import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CustomCard from './components/Card';

const Projects = (props) => {
    const projects = [1,2,3,4,5,6,7,8,9]
    return (
        <Container>
            <h4>Projects</h4>
            <Row md={1}  lg={3}>
                
                {/* For now project will be rendered as template later from database */}
                {projects && projects.map((item) => (<CustomCard content = {item}/>))}
            </Row>
        </Container>
    );
}
 
export default Projects;