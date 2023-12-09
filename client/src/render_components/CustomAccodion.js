import Accordion from 'react-bootstrap/Accordion';
import Projects from  '../Projects';
import Experience from '../Experience';
import Technologies from '../Technologies';

function CustomAcodion() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0"  className='bg-dark'>
        <Accordion.Header id='projects'><h4>Projects</h4></Accordion.Header>
        <Accordion.Body>
            <Projects />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className='bg-dark'>
        <Accordion.Header id='experience'><h3>Experience</h3></Accordion.Header>
        <Accordion.Body>
            <Experience />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='bg-dark'>
        <Accordion.Header id='technologies'><h3>Technologies</h3></Accordion.Header>
        <Accordion.Body>
            <Technologies />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomAcodion;