import Container from 'react-bootstrap/Container';


const Experiences = ({ experience }) => {
    
    console.log(experience)
    return ( 
        <Container id='experience' className='w-95 mb-3' >
            <h4>Experience</h4>
            <hr style={{ width: '50vw',  height:'1em' }}/>
            <ul>
                {experience && experience.map((item, key) => (
                    <li key={key}>
                        <div>
                            <h4>{item.Title}</h4>
                            <p>{item.Description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
 
export default Experiences;