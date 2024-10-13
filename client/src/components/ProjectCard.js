import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion'

const ProjectCard = ({ projectContent })=>  {
  return (
    <motion.div
      className='m-0 p-0 d-flex justify-content-center align-items-center'
      whileHover={{scale: 1.1}}
      >
      <Card style={{ width: '12rem', height: '18rem', fontSize: '.5rem'}} className='custon-card m-0 bg-secondary fs-5' border='primary'>
        <Card.Body>
          <Card.Title style={{color:'white'}}><h5>{projectContent.Title || 'Project Title'}</h5></Card.Title>
          <Card.Text>
            <p style={{fontSize: '.6rem', textAlign: 'justify'}}><b>Project Summary</b>: {projectContent.Summary || ''}</p>
            <p style={{fontSize: '.7rem', textAlign: 'justify'}}><b>Technologies</b>: {projectContent.Technologies || ''}</p>
          </Card.Text>
        </Card.Body>
        <Card.Body className='p-0 m-0 text-center'>
          <Card.Link href={projectContent.Demo || 'https://github/Hamza1610'} style={{fontSize: '.7rem'}}>Project Link</Card.Link>
          <Card.Link href={projectContent.GitHub || 'https://github/Hamza1610'} style={{fontSize: '.7rem'}}>Preview Link</Card.Link>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;