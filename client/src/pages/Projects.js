import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/ProjectCard';
import { motion } from "framer-motion";

const Projects = ({ projectsList }) => {

    console.log(projectsList);
    return (
        <Container id='projects' className='mt-4 mb-3'>
            <motion.h4
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0.2, x: 25 }}
                transition={{ type: 'spring', damping: 10, stiffness: 100,  duration: 1.4, delay: .75 }}         

            >Projects</motion.h4>
            <hr style={{ width: '50vw',  height:'1em' }}/>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                    
                {/* For now project will be rendered as template later from database */}
                {projectsList && projectsList.map((item, key) => (<ProjectCard key={key} projectContent = {item}/>))}
            </div>
        </Container>
    );
}
 
export default Projects;