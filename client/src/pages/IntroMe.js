import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import logo from '../resources/me7.png'
import '../App.css';

const IntroMe = ({ PersonalInfo, Summary }) => {

    return ( 
        <Container id='intro' className='w-95 h-100 mt-5'>
            <div className='profile-image-div'>
                <Image className='profile-image' src={logo}/>  
            </div>
            <div style={{width: '565px'}}>
                <h2 style={{fontSize: '2rem'}}>{PersonalInfo[0].Name}</h2> 
                <h3 style={{fontSize: '1.2rem'}}>I'm {PersonalInfo[0].Title}</h3> 
                <div>
                    <p className='summary'>{Summary[0].Content}</p>
                    <a className='resume-btn' href='resume-software-engineer.pdf'>My resume <i className='fas fa-file-lines'></i></a>
                </div>
            </div>
        </Container>
    );
}
 
export default IntroMe;